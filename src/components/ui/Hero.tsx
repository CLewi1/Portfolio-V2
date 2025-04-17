'use client';
import Image from 'next/image';
import { useState } from 'react';
import './Hero.css';
import Link from 'next/link';

export default function Hero() {
    const [isWaving, setIsWaving] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [ showAnimation, setShowAnimation ] = useState(false);
    
    const handleMouseEnter = () => {
        setIsWaving(true);
    };
    
    const handleAnimationEnd = () => {
        setIsWaving(false);
    };

    const handleProfileMouseEnter = () => {
        setIsHovering(true);
    };

    const handleProfileMouseLeave = () => {
        setIsHovering(false);
    };

    const handleCircleAnimationEnd = () => {
        setIsHovering(false);
        if (!showAnimation) {
            setShowAnimation(true);
        } else {
            setShowAnimation(false);
        }

    };

    return (
        <div>
            <div className="mb-6 flex gap-5">
                <div 
                    className="relative inline-block" 
                    onMouseEnter={handleProfileMouseEnter}
                    onMouseLeave={handleProfileMouseLeave}
                >
                    <div className="relative size-[70px] select-none hover:saturate-[70%]">
                        <div className="absolute inset-1">
                            <Image className="size-full rounded-full bg-muted-foreground object-cover object-[center_20%] ring-5 ring-muted-foreground/50 ring-offset-2 ring-offset-background" alt="Profile" src="/images/pfp.png" width={70} height={70}/>
                            <Image className={`z-10 absolute top-[-0.5px] left-[4px] size-[50px] transition-opacity duration-300 ${showAnimation ? 'block' : 'hidden'}`}  alt="Profile Glasses" src="/images/glasses.png" width={70} height={70}/>
                        </div>
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                            <circle 
                                cx="50" 
                                cy="50" 
                                r="45" 
                                fill="none" 
                                strokeWidth="6"
                                strokeLinecap='round'
                                onAnimationEnd={handleCircleAnimationEnd}
                                className={`stroke-emerald-500 dark:stroke-green-500 profile-circle ${isHovering ? 'profile-circle-animate' : 'profile-circle-paused'}`}
                            />
                        </svg>
                    </div>
                </div>
                <div className="space-y-1">
                    <h1 className="font-semibold text-xl tracking-tighter sm:text-2xl cursor-pointer">
                        Hi, I&apos;m Colin
                        <span className={isWaving ? "ml-1 waving-hand" : "ml-1"} onMouseEnter={handleMouseEnter} onMouseLeave={handleAnimationEnd} onAnimationEnd={handleAnimationEnd}>👋</span>
                    </h1>
                    <a href="mailto:colin.s.lewandowski@icloud.com" rel="noopener noreferrer" target="_blank" className="flex items-center gap-1.5">
                        <div className="size-2 rounded-full bg-green-500"></div>
                        <div className="relative cursor-pointer overflow-hidden">
                            <p className="group text-[#a3a3a3]">
                                <span className="group-hover:-translate-y-full flex flex-col border-b border-dashed transition-all duration-1000 ease-slow">Available for work</span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <p className="mb-4 text-sm sm:hidden">I&apos;m a creative software developer with three years of experience. I specialize in backend development, focused on building secure applications with high standards for code quality and reliability.</p>
            </div>
            <div className="hidden sm:block">
                <p>
                    <span className={`transition-opacity duration-700 ${showAnimation ? 'opacity-30' : 'opacity-100'}`}>I&apos;m a </span>
                    <span className="relative inline-block">
                        <span className="relative z-10">software developer</span>
                        <span 
                            className={`absolute inset-0 bg-yellow-200 dark:bg-yellow-800 ${showAnimation ? 'highlight-active' : 'w-0'}`} 
                            style={{ transformOrigin: 'left center' }}
                        ></span>
                    </span>
                    <span className={`transition-opacity duration-700 ${showAnimation ? 'opacity-30' : 'opacity-100'}`}> with </span>
                    <span className="relative inline-block">
                        <span className="relative z-10">three years of experience</span>
                        <span 
                            className={`absolute inset-0 bg-yellow-200 dark:bg-yellow-800 ${showAnimation ? 'highlight-active' : 'w-0'}`} 
                            style={{ transformOrigin: 'left center' }}
                        ></span>
                    </span>
                    <span className={`transition-opacity duration-700 ${showAnimation ? 'opacity-30' : 'opacity-100'}`}>. I specialize in </span>
                    <span className="relative inline-block">
                        <span className="relative z-10">backend development,</span>
                        <span 
                            className={`absolute inset-0 bg-yellow-200 dark:bg-yellow-800 ${showAnimation ? 'highlight-active' : 'w-0'}`} 
                            style={{ transformOrigin: 'left center' }}
                        ></span>
                    </span>
                    <span className={`transition-opacity duration-700 ${showAnimation ? 'opacity-30' : 'opacity-100'}`}> focused on building </span>
                    <span className="relative inline-block">
                        <span className="relative z-10"> secure applications</span>
                        <span 
                            className={`absolute inset-0 bg-yellow-200 dark:bg-yellow-800 ${showAnimation ? 'highlight-active' : 'w-0'}`} 
                            style={{ transformOrigin: 'left center' }}
                        ></span>
                    </span>
                    <span className={`transition-opacity duration-700 ${showAnimation ? 'opacity-30' : 'opacity-100'}`}> with high standards for </span>
                    <span className="relative inline-block">
                    <span className="relative z-10">code quality and reliability.</span>
                        <span 
                            className={`absolute inset-0 bg-yellow-200 dark:bg-yellow-800 ${showAnimation ? 'highlight-active' : 'w-0'}`} 
                            style={{ transformOrigin: 'left center' }}
                        ></span>
                    </span>
                </p>
            </div>
            <div className="my-4">
                <p>
                    <span className={`transition-opacity duration-700 ${showAnimation ? 'opacity-30' : 'opacity-100'}`}>Exploring my new passion for cybersecurity in my </span>
                    <span className="relative inline-block">
                        <Link href="/cyberlab" className="font-mono bg-black/10 dark:bg-white/10 rounded px-2 py-0.5 hover:bg-black/20 dark:hover:bg-white/20 relative z-10">
                            <span className="typing-animation">Cyberlab</span>
                        </Link>
                        <span 
                            className={`absolute inset-0 bg-yellow-200 dark:bg-yellow-800 ${showAnimation ? 'highlight-active' : 'w-0'}`} 
                            style={{ transformOrigin: 'left center' }}
                        ></span>
                    </span>
                </p>
            </div>
        </div>
    );
}