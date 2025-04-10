'use client'

import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());
    const [isHovering, setIsHovering] = useState(false);

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
            <p 
                className="rounded bg-background/80 px-2 py-1.5 font-mono text-sm tabular-nums text-[#a3a3a3] font-thin cursor-help"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {formattedTime} CDT
            </p>
            
            {isHovering && (
                <div className="fixed left-0 top-0 min-w-max">
                    <p className="font-mono text-xs mb-1 text-[#a3a3a3] font-semibold">We&apos;re in the same timezone!</p>
                </div>
            )}
        </div>
    )
}