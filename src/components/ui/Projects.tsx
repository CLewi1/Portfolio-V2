import Image from "next/image"

export default function Projects() {


    return (
        <div className="my-16">
            {/* Header */}
            <div className="mb-1 w-fit rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 px-1.5 py-1 text-xs">
                <p className="text-neutral-500 dark:text-neutral-400">Recent projects</p>
            </div>

            {/* Project Display */}
            <div className="my-3 grid grid-cols-2 gap-4">
                <div className="col-span-2 size-full cursor-pointer overflow-hidden rounded-xl border border-neutral-200 bg-background p-4 shadow-2xs transition-all duration-300 hover:bg-neutral-800/[0.03] sm:col-span-1 dark:hover:bg-neutral-800/30 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_40px_-20px_#ffffff1f_inset]">
                    <a href="https://github.com/CLewi1/CS460-Project" target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex w-full flex-col">
                                <div className="relative aspect-video w-full"> 
                                    <Image 
                                        alt="Deck Link Image" 
                                        src="/images/DeckLink.png" 
                                        className="rounded-lg shadow-2xs dark:hidden" 
                                        layout="fill" 
                                        objectFit="cover"
                                    />
                                    <Image 
                                        alt="Deck Link Image" 
                                        src="/images/DeckLink.png" 
                                        className="hidden rounded-lg border border-neutral-800 shadow-2xs dark:block" 
                                        layout="fill" 
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="mt-1 font-medium text-lg">Deck Link</div>
                            </div>
                        </div>
                        <div className="mt-2 line-clamp-4 text-sm">A compilation of numerous multiplayer card games</div>
                    </a>
                </div>
                <div className="col-span-2 size-full cursor-pointer overflow-hidden rounded-xl border border-neutral-200 bg-background p-4 shadow-2xs transition-all duration-300 hover:bg-neutral-800/[0.03] sm:col-span-1 dark:hover:bg-neutral-800/30 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_40px_-20px_#ffffff1f_inset]">
                    <a href="https://clewi.dev" target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex w-full flex-col">
                                <div className="relative aspect-video w-full">
                                    <Image 
                                        alt="Personal Site"
                                        className="relative aspect-video size-full rounded-lg shadow-2xs dark:hidden"
                                        src="/images/DeckLink.png"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    <Image 
                                        alt="Personal Site"
                                        className="hidden aspect-video size-full rounded-lg border border-neutral-800 shadow-2xs dark:block"
                                        src="/images/DeckLink.png"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="mt-1 font-medium text-lg">Personal Site</div>
                            </div>
                        </div>
                        <div className="mt-2 line-clamp-4 text-sm">My current interactive developer portfolio</div>
                    </a>
                </div>

            </div>

            {/* More Projects link */}
            <a className="group flex items-center gap-1 font-semibold hover:text-neutral-400" href="/projects">
                <p>More projects</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M18 8L22 12L18 16"></path>
                    <path d="M2 12H22"></path>
                </svg>
            </a>
        </div>
    )
}