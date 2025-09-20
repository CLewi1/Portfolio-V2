import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Colin Lewandowski | Projects',
  description: 'Portfolio of my development projects and work',
};

interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "NFL Play-By-Play",
      description: "A C# Blazor Web Application developed for a Software Engineering capstone project. Made with API integrations for ESPN and OpenAI to transform NFL real-time play-by-play data into interactive audio narration.",
      image: "/images/NFLPlayByPlay.png",
      githubUrl: "https://github.com/Brogs360/NFL-Play-by-Play",
      liveUrl: undefined,
      tags: ["C#", "Blazor", "OpenAI", "API"],
    },
    {
      title: "Personal Site",
      description: "My current interactive developer portfolio built with Next.js, TailwindCSS, and TypeScript. Features interactive elements, dark mode, and responsive design.",
      image: "/images/Portfolio.png", 
      githubUrl: "https://github.com/CLewi1/Portfolio-V2",
      liveUrl: "https://clewi.vercel.app/",
      tags: ["Next.js", "TypeScript", "TailwindCSS"],
    },
    {
      title: "Java Chess",
      description: "Java Swing chess game with board display, move tracking, and save/load functionality.",
      image: "/images/JavaChess.png", 
      githubUrl: "https://github.com/CLewi1/JavaChess",
      liveUrl: undefined,
      tags: ["Java", "Swing", "Algorithms"],
    },
    {
      title: "SongScope",
      description: "Java Swing app for song discovery using Spotify/YouTube metrics with MySQL database.",
      image: "/images/SongScope.png", 
      githubUrl: "https://github.com/wilman2019/SongScope",
      liveUrl: undefined,
      tags: ["Java", "Swing", "MySQL"],
    },
    {
      title: "Deck Link (WIP)",
      description: "A compilation of numerous multiplayer card games built with React, Socket.IO, and Express. Features include real-time gameplay, custom game rooms, and multiple game variations.",
      image: "/images/WIP.png",
      githubUrl: "https://github.com/CLewi1/CS460-Project",
      liveUrl: undefined,
      tags: ["Python", "Flask", "Websockets"],
    },
  ];

  return (
    <main className="relative mx-auto mt-6 max-w-xl px-6">
      <header className="-ml-[8px] mb-10 tracking-tight sm:mb-16">
        <Navbar />
      </header>
      
      <section className="h-full bg-background">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-neutral-500 dark:text-neutral-400">
            A collection of my development work and side projects
          </p>
        </div>

        {/* Projects List */}
        <div className="my-8">

          <div className="grid grid-cols-1 gap-6 mb-12">
            {projects.map((project, index) => (
              <div key={index} className="size-full overflow-hidden rounded-xl border border-neutral-200 bg-background p-8 shadow-2xs transition-all duration-300 hover:bg-neutral-800/[0.03] dark:hover:bg-neutral-800/30 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_40px_-20px_#ffffff1f_inset]">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-2/5">
                    <div className="relative aspect-video w-full">
                      <Image 
                        alt={`${project.title} Image`}
                        src={project.image}
                        className="rounded-lg shadow-2xs dark:hidden"
                        layout="fill" 
                        objectFit="cover"
                      />
                      <Image 
                        alt={`${project.title} Image`}
                        src={project.image}
                        className="hidden rounded-lg border border-neutral-800 shadow-2xs dark:block"
                        layout="fill" 
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-3/5">
                    <h2 className="font-medium text-xl mb-2">{project.title}</h2>
                    <p className="text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium px-3 py-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-4 mr-1.5">
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"></path>
                        </svg>
                        Source Code
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-sm font-medium px-3 py-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 mr-1.5">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Archive Link */}
        <div className="flex justify-center">
          <Link className="link-underline max-w-fit" href="/archive">
            View The Archive
          </Link>
        </div>



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
          <span className="hidden sm:inline">Sep 19, 2025</span>
          <span className="sm:hidden">09/19/2025</span>
        </p>
      </footer>
    </main>
  );
}