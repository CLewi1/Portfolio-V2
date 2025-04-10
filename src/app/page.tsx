import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import Map from "@/components/ui/Map";
import Clock from "@/components/ui/Clock"
import Hero from "@/components/ui/Hero";
import Skills from "@/components/ui/Skills";
import Projects from "@/components/ui/Projects";

export default function Home() {
    return (
        <main className="relative mx-auto mt-6 max-w-xl px-6">
            <header className="-ml-[8px] mb-10 tracking-tight sm:mb-16">
                <div className="lg:sticky lg:top-20">
                    <nav className="relative flex scroll-pr-6 items-center justify-end px-0 pb-0 md:relative md:overflow-auto">
                        <Link href="/" className="pl-2 first:mr-auto">
                            <div className="hidden font-bold font-mono text-2xl sm:block">
                                Colin Lewandowski
                            </div>
                            <div>
                                <h1 className="block font-bold font-mono text-2xl sm:hidden">
                                    CL
                                </h1>
                            </div>
                        </Link>
                        <div className="flex items-center">
                            <div className="relative mx-auto flex w-fit flex-col items-center rounded-md">
                                <div className="relative flex w-full justify-center">
                                    <a className="flex h-8 items-center rounded-md px-2 py-0.5 text-center text-md text-muted-foreground hover:text-primary/80" href="/1">
                                      1
                                    </a>
                                    <a className="flex h-8 items-center rounded-md px-2 py-0.5 text-center text-md text-muted-foreground hover:text-primary/80"href="/2">
                                      2
                                    </a>
                                    <a className="flex h-8 items-center rounded-md px-2 py-0.5 text-center text-md text-muted-foreground hover:text-primary/80"href="/3">
                                      3
                                    </a>
                                </div>
                            </div>
                            <ThemeToggle />
                        </div>
                    </nav>
                </div>
            </header>
            <section className="h-full bg-background">
                <div className="group relative h-48 overflow-hidden">
                    <Map />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(transparent,#9d9da200_60%,#fafafa)] dark:bg-[linear-gradient(transparent,#18181b73_60%,#0a0a0a)]"></div>
                    <Clock />
                </div>
                <Hero />
                <Skills />
                <Projects />
                <div id='experience'></div>
                <div id='something???????'></div>
            </section>
            <footer className="my-10 flex items-center justify-between">
                <ul className="flex gap-5 font-sm">
                    <li>
                        <a className="flex items-center justify-center text-muted-foreground hover:text-primary" rel="noopener noreferrer" target="_blank" href="https://github.com/CLewi1">
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"></path>
                            </svg>
                            <p className="ml-2 hidden sm:block">GitHub</p>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center justify-center text-muted-foreground hover:text-primary" rel="noopener noreferrer" target="_blank" href="mailto:colin.s.lewandowski@icloud.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                            <p className="ml-2 hidden sm:block">Contact</p>
                        </a>
                    </li>
                </ul>
                <p className="text-muted-foreground">Last updated:&nbsp;
                    <span className="hidden sm:inline">April 10, 2025</span>
                    <span className="sm:hidden">04/10/2025</span>
                </p>
            </footer>
        </main>
    );
}
