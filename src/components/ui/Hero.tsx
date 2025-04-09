'use client';
import Image from 'next/image';
import { useState } from 'react';
import './Hero.css';

export default function Hero() {
    const [isWaving, setIsWaving] = useState(false);
    
    const handleMouseEnter = () => {
        setIsWaving(true);
    };
    
    const handleAnimationEnd = () => {
        setIsWaving(false);
    };

    return (
        <>
            <div className="mb-6 flex gap-5">
                <div className="relative inline-block">
                    <div className="pointer-events-none relative size-[70px] select-none hover:saturate-[70%]">
                        <div className="absolute inset-1">
                            <Image className="size-full rounded-full bg-muted-foreground object-cover object-[center_20%] ring-5 ring-muted-foreground/50 ring-offset-2 ring-offset-background" alt="Profile" src="/images/pfp.png" width={70} height={70}/>
                        </div>
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
                <p className="mb-4 text-sm sm:hidden">I&apos;m a creative software developer with five years of experience. I specialize in UI design and crafting engaging user experiences with great attention to detail.</p>
            </div>
            <div className="hidden sm:block">
                <p>
                    <span className="transition-opacity duration-700 opacity-100">I&apos;m a </span>
                    <span className="relative inline-block">
                        <span className="relative z-10">creative software developer</span>
                        <span className="absolute inset-0 bg-yellow-200 dark:bg-yellow-800 w-0" style={{ transformOrigin: 'left center' }}></span>
                    </span>
                    <span className="transition-opacity duration-700 opacity-100"> with </span>
                    <span className="relative inline-block">
                        <span className="relative z-10">five years of experience</span>
                        <span className="absolute inset-0 bg-yellow-200 dark:bg-yellow-800 w-0" style={{ transformOrigin: 'left center' }}></span>
                    </span>
                    <span className="transition-opacity duration-700 opacity-100">. I specialize in </span>
                    <span className="relative inline-block">
                        <span className="relative z-10">UI design</span>
                        <span className="absolute inset-0 bg-yellow-200 dark:bg-yellow-800 w-0" style={{ transformOrigin: 'left center' }}></span>
                    </span>
                    <span className="transition-opacity duration-700 opacity-100"> and crafting </span>
                    <span className="relative inline-block">
                        <span className="relative z-10">engaging user experiences</span>
                        <span className="absolute inset-0 bg-yellow-200 dark:bg-yellow-800 w-0" style={{ transformOrigin: 'left center' }}></span>
                    </span>
                    <span className="transition-opacity duration-700 opacity-100"> with great attention to detail.</span>
                </p>
            </div>
        </>
    );
}