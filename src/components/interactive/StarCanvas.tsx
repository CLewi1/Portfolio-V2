'use client'

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/ThemeProvider"; 

interface ParticleProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  vx?: number;
  vy?: number;
}

interface Particle {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
}

const StarCanvas = ({
  className = "absolute top-0 left-0 size-full z-[-1]",
  quantity = 20,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  vx = 0,
  vy = 0,
}: ParticleProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const boundsRef = useRef({ w: 0, h: 0 });
  const pixelRatioRef = useRef(1);
  const animationFrameId = useRef<number | null>(null);
  const { theme } = useTheme();

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    pixelRatioRef.current = window.devicePixelRatio || 1;

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      contextRef.current = canvasRef.current.getContext("2d");
      resizeCanvas();
      drawInitialParticles();
      window.addEventListener("resize", resizeCanvas);
      return () => {
        window.removeEventListener("resize", resizeCanvas);
        if (animationFrameId.current !== null) {
          window.cancelAnimationFrame(animationFrameId.current);
        }
      };
    }
  }, [theme, quantity, size]);

  useEffect(() => {
    trackMousePosition();
  }, [mouse.x, mouse.y]);

  useEffect(() => {
    resizeCanvas();
  }, [refresh]);

  const resizeCanvas = () => {
    clearAndResize();
    drawInitialParticles();
  };

  const trackMousePosition = () => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = boundsRef.current;
      const x = mouse.x - rect.left - w / 2;
      const y = mouse.y - rect.top - h / 2;
      if (x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2) {
        mouseRef.current.x = x;
        mouseRef.current.y = y;
      }
    }
  };

  const clearAndResize = () => {
    if (wrapperRef.current && canvasRef.current && contextRef.current) {
      particlesRef.current.length = 0;
      boundsRef.current.w = wrapperRef.current.offsetWidth;
      boundsRef.current.h = wrapperRef.current.offsetHeight;
      canvasRef.current.width = boundsRef.current.w * pixelRatioRef.current;
      canvasRef.current.height = boundsRef.current.h * pixelRatioRef.current;
      canvasRef.current.style.width = `${boundsRef.current.w}px`;
      canvasRef.current.style.height = `${boundsRef.current.h}px`;
      contextRef.current.scale(pixelRatioRef.current, pixelRatioRef.current);
    }
  };

  const generateParticle = (): Particle => {
    const x = Math.floor(Math.random() * boundsRef.current.w);
    const y = Math.floor(Math.random() * boundsRef.current.h);
    return {
      x,
      y,
      translateX: 0,
      translateY: 0,
      size: Math.floor(2 * Math.random()) + size,
      alpha: 0,
      targetAlpha: parseFloat((0.6 * Math.random() + 0.1).toFixed(1)),
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
      magnetism: 0.1 + 4 * Math.random(),
    };
  };

  const drawParticle = (particle: Particle, skipPush = false) => {
    if (contextRef.current) {
      const { x, y, translateX, translateY, size, alpha } = particle;

      const themeColorRGB = (() => {
        let hex = theme === "light" ? "#000000" : "#ffffff";
        hex = hex.replace("#", "");
        if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
        const intVal = parseInt(hex, 16);
        return [(intVal >> 16) & 255, (intVal >> 8) & 255, intVal & 255];
      })();

      contextRef.current.translate(translateX, translateY);
      contextRef.current.beginPath();
      contextRef.current.arc(x, y, size, 0, 2 * Math.PI);
      contextRef.current.fillStyle = `rgba(${themeColorRGB.join(", ")}, ${alpha})`;
      contextRef.current.fill();
      contextRef.current.setTransform(pixelRatioRef.current, 0, 0, pixelRatioRef.current, 0, 0);
      if (!skipPush) particlesRef.current.push(particle);
    }
  };

  const clearCanvas = () => {
    if (contextRef.current) {
      contextRef.current.clearRect(0, 0, boundsRef.current.w, boundsRef.current.h);
    }
  };

  const drawInitialParticles = () => {
    clearCanvas();
    for (let i = 0; i < quantity; i++) {
      drawParticle(generateParticle());
    }
    animateParticles();
  };

  const interpolate = (value: number, min: number, max: number, newMin: number, newMax: number) => {
    const scaled = ((value - min) * (newMax - newMin)) / (max - min) + newMin;
    return scaled > 0 ? scaled : 0;
  };

  const animateParticles = () => {
    clearCanvas();
    particlesRef.current.forEach((particle, index) => {
      const edgeDist = Math.min(
        particle.x + particle.translateX - particle.size,
        boundsRef.current.w - particle.x - particle.translateX - particle.size,
        particle.y + particle.translateY - particle.size,
        boundsRef.current.h - particle.y - particle.translateY - particle.size
      );

      const alphaFactor = parseFloat(interpolate(edgeDist, 0, 20, 0, 1).toFixed(2));
      if (alphaFactor > 1) {
        particle.alpha += 0.02;
        if (particle.alpha > particle.targetAlpha) {
          particle.alpha = particle.targetAlpha;
        }
      } else {
        particle.alpha = particle.targetAlpha * alphaFactor;
      }

      particle.x += particle.dx + vx;
      particle.y += particle.dy + vy;
      particle.translateX += (mouseRef.current.x / (staticity / particle.magnetism) - particle.translateX) / ease;
      particle.translateY += (mouseRef.current.y / (staticity / particle.magnetism) - particle.translateY) / ease;

      drawParticle(particle, true);

      const outOfBounds =
        particle.x < -particle.size ||
        particle.x > boundsRef.current.w + particle.size ||
        particle.y < -particle.size ||
        particle.y > boundsRef.current.h + particle.size;

      if (outOfBounds) {
        particlesRef.current.splice(index, 1);
        drawParticle(generateParticle());
      }
    });

    animationFrameId.current = window.requestAnimationFrame(animateParticles);
  };

  return (
    <div className={className} ref={wrapperRef} aria-hidden="true">
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
};

export default StarCanvas;
