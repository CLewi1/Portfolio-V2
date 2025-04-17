import Navbar from "@/components/ui/Navbar";


export default function CyberLab() {

    return (
        <div className="mx-auto mt-6 max-w-3xl px-6">
            <header className="-ml-[8px] mb-10 tracking-tight sm:mb-16">
                <Navbar />
            </header>
            <section className="my-8 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="mb-4 text-xl font-semibold tracking-tight text-primary">Welcome to the Cyber Lab!</h2>
                <p className="mb-4 text-muted-foreground">
                    Interact with the elements below to learn about cybersecurity concepts.
                </p>
                {/* Add your interactive elements here */}
                {/* Example: A placeholder for a simulated terminal or challenge */}
                <div className="min-h-[100px] rounded bg-muted p-4">
                    <p className="font-mono text-sm text-muted-foreground">
                        [Interactive Content Placeholder]
                        <br />
                        Try typing help... (coming soon!)
                    </p>
                </div>
            </section>
        </div>
    );


}