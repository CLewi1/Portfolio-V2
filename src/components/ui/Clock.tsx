'use client'

import { useEffect, useState, useRef } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());
    const [isHovering, setIsHovering] = useState(false);
    const [timezoneMessage, setTimezoneMessage] = useState("");
    const clockRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Calculate timezone difference
        const now = new Date();
        
        // Get user's timezone offset in minutes (negative means ahead of UTC)
        const userOffset = now.getTimezoneOffset();
        
        // Get Chicago timezone offset in minutes
        const chicagoTime = new Intl.DateTimeFormat('en-US', {
            timeZone: 'America/Chicago',
            timeZoneName: 'longOffset'
        }).formatToParts(now);
        
        const chicagoOffsetString = chicagoTime.find(part => part.type === 'timeZoneName')?.value || '';
        const chicagoOffsetMatch = chicagoOffsetString.match(/GMT([+-]\d{1,2}):?(\d{2})?/);
        
        let chicagoOffset = 0;
        if (chicagoOffsetMatch) {
            const hours = parseInt(chicagoOffsetMatch[1]);
            const minutes = chicagoOffsetMatch[2] ? parseInt(chicagoOffsetMatch[2]) : 0;
            chicagoOffset = -(hours * 60 + (hours < 0 ? -minutes : minutes)); // Convert to minutes, negative for ahead of UTC
        }
        
        // Calculate difference in hours
        const diffMinutes = userOffset - chicagoOffset;
        const diffHours = diffMinutes / 60;
        
        if (diffHours === 0) {
            setTimezoneMessage("We're in the same timezone!");
        } else if (diffHours < 0) {
            const hours = Math.abs(diffHours);
            const hourText = hours === 1 ? "hour" : "hours";
            setTimezoneMessage(`You're +${hours}:00 ${hourText} ahead`);
        } else {
            const hours = Math.abs(diffHours);
            const hourText = hours === 1 ? "hour" : "hours";
            setTimezoneMessage(`You're -${hours}:00 ${hourText} behind`);
        }
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
                    <p className="text-muted-foreground text-xs font-semibold whitespace-nowrap rounded bg-background/80 px-2 py-1.5 border border-neutral-300 dark:border-neutral-800 relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-full after:border-6 after:border-transparent after:border-t-neutral-300 dark:after:border-t-neutral-700 after:z-10">
                        {timezoneMessage}
                    </p>
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