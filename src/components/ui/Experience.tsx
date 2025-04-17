'use client'

import { useState } from "react";
import Image from "next/image";

export default function Experience() {
    const [activeTab, setActiveTab] = useState("work");

    return (
        <div>
            {/* Buttons */}
            <div className="h-9 items-center justify-center rounded-lg bg-neutral-200 dark:bg-neutral-800 p-1 text-muted-foreground mb-2 grid w-full grid-cols-2" data-orientation="horizontal">
                <button 
                    type="button" 
                    role="tab" 
                    onClick={() => setActiveTab("work")}
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 border-0 outline-0 ${activeTab === "work" ? "bg-neutral-100 dark:bg-background text-foreground shadow" : "bg-transparent"}`}
                >
                    Work
                </button>
                <button 
                    type="button" 
                    role="tab" 
                    onClick={() => setActiveTab("education")}
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 border-0 outline-0 ${activeTab === "education" ? "bg-neutral-100 dark:bg-background text-foreground shadow" : "bg-transparent"}`}
                >
                    Education
                </button>
            </div>
            
            {/* Tab Content */}
            <div className="tab-content relative overflow-hidden">
                <div 
                    className={`${
                        activeTab === "work" 
                            ? "opacity-100 translate-x-0 transition-opacity duration-500 ease-in" 
                            : "opacity-0 absolute translate-x-[-100%] transition-opacity duration-100 ease-out"
                    }`}
                >
                    <div className="mt-2">
                        <div className="rounded-xl border border-neutral-300 dark:border-neutral-800 shadow relative">
                            <div>
                                <ul className="ml-10 border-l border-neutral-400 dark:border-neutral-700">
                                    <li className="relative ml-10 py-4">
                                        <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                                            <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border border-neutral-400 dark:border-neutral-700">
                                                <Image 
                                                    alt="City of Elmhurst"
                                                    className="aspect-square h-full w-full bg-background object-contain"
                                                    src="/images/Elmhurst.png"
                                                    fill={true}
                                                />
                                            </span>
                                        </div>
                                        <div className="flex flex-1 flex-col justify-start gap-1">
                                            <time className="text-xs text-muted-foreground">
                                                <span>May 2023 - Present</span>
                                            </time>
                                            <h2 className="font-semibold leading-none">City of Elmhurst</h2>
                                            <p className="text-sm text-muted-foreground">IT Intern</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="ml-10 border-l border-neutral-400 dark:border-neutral-700">
                                    <li className="relative ml-10 py-4">
                                        <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                                            <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border border-neutral-400 dark:border-neutral-700">
                                                <Image 
                                                    alt="York High School"
                                                    className="aspect-square h-full w-full bg-background object-contain"
                                                    src="/images/YHS.png"
                                                    fill={true}
                                                />
                                            </span>
                                        </div>
                                        <div className="flex flex-1 flex-col justify-start gap-1">
                                            <time className="text-xs text-muted-foreground">
                                                <span>Aug 2019 - May 2022</span>
                                            </time>
                                            <h2 className="font-semibold leading-none">York High School</h2>
                                            <p className="text-sm text-muted-foreground">Tech Services Intern</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div 
                    className={`${
                        activeTab === "education" 
                            ? "opacity-100 translate-x-0 transition-opacity duration-500 ease-in" 
                            : "opacity-0 absolute translate-x-[100%] transition-opacity duration-100 ease-out"
                    }`}
                >
                    <div className="mt-2">
                        <div className="rounded-xl border border-neutral-300 dark:border-neutral-800 shadow">
                            <div>
                                <ul className="ml-10 border-l border-neutral-400 dark:border-neutral-700">
                                    <li className="relative ml-10 py-4">
                                        <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                                            <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border border-neutral-400 dark:border-neutral-700">
                                                <Image 
                                                    alt="University Of Wisconsin-Whitewater"
                                                    className="aspect-square h-full w-full bg-background object-contain"
                                                    src="/images/Whitewater.png"
                                                    fill={true}
                                                />
                                            </span>
                                        </div>
                                        <div className="flex flex-1 flex-col justify-start gap-1">
                                            <time className="text-xs text-muted-foreground">
                                                <span>Aug 2022 - May 2026</span>
                                            </time>
                                            <h2 className="font-semibold leading-none">University of Wisconsin-Whitewater</h2>
                                            <p className="text-sm text-muted-foreground">Bachelor of Science, Computer Science</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}