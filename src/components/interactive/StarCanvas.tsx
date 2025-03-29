'use client'

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider"; // Import your theme hook

class Star {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    isMouseInfluenced: boolean;

    constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 0.9 + 0.3;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
        this.isMouseInfluenced = Math.random() < 0.5;
    }

    respawn(canvasWidth: number, canvasHeight: number): void {
        const middleAreaWidth = canvasWidth * 0.6;
        const middleAreaHeight = canvasHeight * 0.6;

        this.x =
            (canvasWidth - middleAreaWidth) / 2 +
            Math.random() * middleAreaWidth;
        this.y =
            (canvasHeight - middleAreaHeight) / 2 +
            Math.random() * middleAreaHeight;

        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
    }

    update(canvasWidth: number, canvasHeight: number, isMouseMoving: boolean): void {
        this.x += this.speedX;
        this.y += this.speedY;

        if (!isMouseMoving) {
            const randomX = Math.random() * 0.6 - 0.3;
            const randomY = Math.random() * 0.6 - 0.3;

            this.speedX = this.speedX * 0.92 + randomX * 0.08;
            this.speedY = this.speedY * 0.92 + randomY * 0.08;

            const minSpeed = 0.2;
            const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);

            if (currentSpeed < minSpeed) {
                const scale = minSpeed / currentSpeed;
                this.speedX *= scale;
                this.speedY *= scale;
            }
        }

        if (
            this.x < 0 ||
            this.x > canvasWidth ||
            this.y < 0 ||
            this.y > canvasHeight
        ) {
            this.respawn(canvasWidth, canvasHeight);
        }
    }

    draw(ctx: CanvasRenderingContext2D, isDarkMode: boolean): void {
        if (isDarkMode) {
            ctx.fillStyle = "white";
        } else {
            ctx.fillStyle = "black";
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

export default function StarCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);
    const animationFrameIdRef = useRef<number | undefined>(undefined);
    const isMouseMovingRef = useRef<boolean>(false);
    const mouseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const prevMouseXRef = useRef<number>(0);
    const prevMouseYRef = useRef<number>(0);
    
    // Get the theme 
    const { theme } = useTheme();
    
    // Create a ref to track the current dark mode state that animation can access
    const isDarkModeRef = useRef<boolean>(false);
    
    // Update the ref whenever theme changes
    useEffect(() => {
        if (theme === 'dark') {
            isDarkModeRef.current = true;
        } else if (theme === 'light') {
            isDarkModeRef.current = false;
        } else { // system
            isDarkModeRef.current = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
    }, [theme]);
    
    // Listen for system preference changes if using system theme
    useEffect(() => {
        if (theme !== 'system') return;
        
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            isDarkModeRef.current = mediaQuery.matches;
        };
        
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);
    
    // This effect handles star initialization and animation and should run once
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Initialize stars only once
        const numStars = 30;
        starsRef.current = [];
        for (let i = 0; i < numStars; i++) {
            starsRef.current.push(new Star(canvas.width, canvas.height));
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Use the ref value which will always be current
            const currentIsDark = isDarkModeRef.current;
            starsRef.current.forEach((star) => {
                star.update(canvas.width, canvas.height, isMouseMovingRef.current);
                star.draw(ctx, currentIsDark);
            });
            animationFrameIdRef.current = requestAnimationFrame(animate);
        };
        
        // Initial theme setup
        if (theme === 'dark') {
            isDarkModeRef.current = true;
        } else if (theme === 'light') {
            isDarkModeRef.current = false;
        } else { // system
            isDarkModeRef.current = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        
        animationFrameIdRef.current = requestAnimationFrame(animate);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            starsRef.current.forEach((star) => star.respawn(canvas.width, canvas.height));
        };

        window.addEventListener("resize", handleResize);

        const handleMouseMove = (event: MouseEvent) => {
            isMouseMovingRef.current = true;

            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const mouseVectorX = mouseX - prevMouseXRef.current;
            const mouseVectorY = mouseY - prevMouseYRef.current;

            const mouseVectorLength = Math.sqrt(mouseVectorX * mouseVectorX + mouseVectorY * mouseVectorY);
            if (mouseVectorLength > 0.5) {
                const directionX = mouseVectorX / mouseVectorLength;
                const directionY = mouseVectorY / mouseVectorLength;

                starsRef.current.forEach((star) => {
                    if (star.isMouseInfluenced) {
                        const currentSpeed = Math.sqrt(star.speedX * star.speedX + star.speedY * star.speedY);

                        star.speedX = star.speedX * 0.8 + directionX * currentSpeed * 0.2;
                        star.speedY = star.speedY * 0.8 + directionY * currentSpeed * 0.2;

                        const newSpeed = Math.sqrt(star.speedX * star.speedX + star.speedY * star.speedY);
                        if (newSpeed > 0) {
                            star.speedX = (star.speedX / newSpeed) * currentSpeed;
                            star.speedY = (star.speedY / newSpeed) * currentSpeed;
                        }
                    }
                });
            }

            prevMouseXRef.current = mouseX;
            prevMouseYRef.current = mouseY;

            if (mouseTimeoutRef.current) {
                clearTimeout(mouseTimeoutRef.current);
            }

            mouseTimeoutRef.current = setTimeout(() => {
                isMouseMovingRef.current = false;
            }, 100);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }

            if (mouseTimeoutRef.current) {
                clearTimeout(mouseTimeoutRef.current);
            }

            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    
    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full fixed top-0 left-0 -z-10"
            aria-hidden="true"
        />
    );
}
