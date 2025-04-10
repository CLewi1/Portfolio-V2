import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import Map from "@/components/ui/Map";
import Clock from "@/components/ui/Clock"
import Hero from "@/components/ui/Hero";
import Skills from "@/components/ui/Skills";

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
                <div id='showcase section???'></div>
                <div id='projects'></div>
                <div id='something???????'></div>
            </section>
            <footer>

            </footer>
        </main>
    );
}
