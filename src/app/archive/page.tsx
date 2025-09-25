import Navbar from "@/components/ui/Navbar";
import Link from "next/link";

interface Projects {
    year: number;
    title: string;
    builtWith: string[];
    link: string;
}

export default function Archive() {
    const projects: Projects[] = [
        {
            year: 2023,
            title: "Personal Portfolio V1",
            builtWith: ["React", "TailwindCSS", "Vercel"],
            link: "https://clewi.vercel.app",
        },
    ];



    return (
        <main className="relative mx-auto mt-6 max-w-xl px-6">
            <header className="-ml-[8px] mb-10 tracking-tight sm:mb-16">
                <Navbar />
            </header>

            <section>

                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="text-left pr-4 font-normal text-muted-foreground">Year</th>
                            <th className="text-left pr-4 font-normal text-muted-foreground">Project</th>
                            <th className="text-left pr-4 font-normal text-muted-foreground">Built With</th>
                            <th className="text-left pr-4 font-normal text-muted-foreground">Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => (
                            <tr key={index} className="border-t border-neutral-200 dark:border-neutral-800">
                                <td className="py-2 pr-4 align-top">{project.year}</td>
                                <td className="py-2 pr-4 align-top">
                                    {project.title}
                                </td>
                                <td className="py-2 pr-4 align-top">
                                    {project.builtWith.join(", ")}
                                </td>
                                <td className="py-2 pr-4 align-top">
                                    <a className="text-primary hover:underline" href={project.link} target="_blank" rel="noopener noreferrer">
                                        View
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                






                {/* Back Home link */}
                <div className="my-12">
                    <Link className="group flex items-center gap-1 font-semibold hover:text-neutral-400" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform duration-300 group-hover:-translate-x-1">
                        <path d="M6 16L2 12L6 8"></path>
                        <path d="M2 12H22"></path>
                        </svg>
                        <p>Back to home</p>
                    </Link>
                </div>
            </section>
        </main>
    );
}