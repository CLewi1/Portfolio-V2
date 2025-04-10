'use client'

import { useEffect, useState, useRef } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());
    const [isHovering, setIsHovering] = useState(false);
    const clockRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Chicago',
        hour12: true
    }).format(time);

    return (
        <div className="absolute top-0 right-0 p-2">
            {isHovering && clockRef.current && (
                <div className="fixed" style={{
                    top: clockRef.current.getBoundingClientRect().top - 40,
                    left: clockRef.current.getBoundingClientRect().left + (clockRef.current.getBoundingClientRect().width / 2),
                    transform: 'translateX(-50%)'
                }}>
                    <p className="font-[system-ui] text-xs text-[#a3a3a3] font-semibold whitespace-nowrap rounded bg-background/80 px-2 py-1.5 border border-neutral-300 dark:border-neutral-700 relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-full after:border-6 after:border-transparent after:border-t-neutral-300 dark:after:border-t-neutral-700 after:z-10">We&apos;re in the same timezone!</p>
                </div>
            )}
            <p 
                ref={clockRef}
                className="rounded bg-background/80 px-2 py-1.5 font-mono text-sm tabular-nums text-[#a3a3a3] font-thin cursor-help"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {formattedTime} CDT
            </p>
        </div>
    )
}