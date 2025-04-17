import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Navbar() {


    return (
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
                    <div className="relative flex w-full justify-center overflow-hidden">
                        <a className="group flex h-8 items-center rounded-md px-2 py-0.5 text-center text-md text-muted-foreground hover:text-primary/80" href="/cyberlab">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill='none'
                                className="size-7 flex-shrink-0"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m8 9 3 3-3 3m5 0h3M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                            </svg>
                            <span className="ml-1 max-w-xs sm:max-w-0 overflow-hidden whitespace-nowrap opacity-100 sm:opacity-0 transition-all duration-400 ease-in-out group-hover:ml-1 sm:group-hover:max-w-xs sm:group-hover:opacity-100">Lab</span>
                        </a>
                        <a className="group flex h-8 items-center rounded-md px-2 py-0.5 text-center text-md text-muted-foreground hover:text-primary/80" href="/projects">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="size-5 flex-shrink-0"
                                fill="currentColor"
                            >
                                <path xmlns="http://www.w3.org/2000/svg" d="M448 96H272L226.746 50.746C214.742 38.742 198.465 32 181.49 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V160C512 124.654 483.346 96 448 96ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H181.49C190.039 64 198.074 67.328 204.117 73.375L249.373 118.627L258.746 128H448C465.645 128 480 142.355 480 160V416Z"/>
                            </svg>
                            <span className="ml-1 max-w-xs sm:max-w-0 overflow-hidden whitespace-nowrap opacity-100 sm:opacity-0 transition-all duration-400 ease-in-out group-hover:ml-1 sm:group-hover:max-w-xs sm:group-hover:opacity-100">Projects</span>
                        </a>
                        <a className="group flex h-8 items-center rounded-md px-2 py-0.5 text-center text-md text-muted-foreground hover:text-primary/80" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                className="size-5 flex-shrink-0"
                                fill="currentColor"
                            >
                                <path d="M365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM208 240C208 231.156 200.844 224 192 224S176 231.156 176 240V361.375L123.312 308.688C120.188 305.562 116.094 304 112 304S103.812 305.562 100.688 308.688C94.438 314.938 94.438 325.063 100.688 331.312L180.688 411.312C186.938 417.562 197.063 417.562 203.312 411.312L283.312 331.312C289.562 325.062 289.562 314.937 283.312 308.688S266.937 302.438 260.688 308.688L208 361.375V240Z"/>
                            </svg>
                            <span className="ml-1 max-w-xs sm:max-w-0 overflow-hidden whitespace-nowrap opacity-100 sm:opacity-0 transition-all duration-400 ease-in-out group-hover:ml-1 sm:group-hover:max-w-xs sm:group-hover:opacity-100">Resume</span>
                        </a>
                    </div>
                </div>
                <ThemeToggle />
            </div>
        </nav>
    </div>
    );
};