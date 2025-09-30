import Navbar from "@/components/ui/Navbar";
import Map from "@/components/ui/Map";
import Clock from "@/components/ui/Clock"
import Hero from "@/components/ui/Hero";
import Skills from "@/components/ui/Skills";
import Projects from "@/components/ui/Projects";
import Experience from "@/components/ui/Experience";
import Footer from "@/components/ui/Footer";

export default function Home() {
    const lightMapUrl = process.env.LIGHT_MAP;
    const darkMapUrl = process.env.DARK_MAP;

    if (!lightMapUrl || !darkMapUrl) {
        return <div>Error: Map configuration is missing.</div>;
    }

    return (
        <main className="relative mx-auto mt-6 max-w-xl px-6 overflow-x-hidden">
            <header className="-ml-[8px] mb-10 tracking-tight sm:mb-16">
                <Navbar />
            </header>
            <section className="h-full bg-background">
                <div className="group relative h-48 overflow-hidden">
                    <Map lightMapUrl={lightMapUrl} darkMapUrl={darkMapUrl} />
                    <Clock />
                </div>
                <Hero />
                <Skills />
                <Projects />
                <Experience />
            </section>
            <Footer />
        </main>
    );
}
