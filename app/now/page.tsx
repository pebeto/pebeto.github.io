import Link from "next/link";
import { Metadata } from "next";
import DaysSince from "./days-since";

export const metadata: Metadata = {
    title: "Now",
    description: "What Jose Esparza is focused on right now: CUDA and kernel design, profiling production code, and a self-directed ML reading list.",
    alternates: { canonical: "/now" },
};

export default function Now() {
    return (
        <main className="max-w-6xl mx-auto px-6 sm:px-12 py-16">
            <div className="flex flex-col md:flex-row md:gap-12 lg:gap-20">
                <div className="md:w-2/3 space-y-10">
                    <h2 className="text-2xl font-semibold text-[var(--color-heading)]">
                        What I'm doing{" "}
                        <Link href="https://nownownow.com/about" target="_blank">
                            now
                        </Link>
                        ?
                    </h2>

                    <ul className="space-y-5 text-[var(--color-text)]">
                        {[
                            "Still recording my band's album (a true masterpiece; if you are a record label, please hire us)",
                            "Going deeper into CUDA and kernel design",
                            "Profiling hot paths in production code",
                            "Playing Death Stranding 2 (awesome game, I highly recommend it)",
                            "Working through a self-directed PhD-style ML reading list",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-dot)] shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <DaysSince />
                </div>

                <div className="md:w-1/3 md:shrink-0 mt-12 md:mt-0">
                    <div className="md:sticky md:top-12">
                        <img
                            src="emvdmv.jpeg"
                            alt="Playing with El Mejor Verano de mi Vida"
                            className="w-full max-w-xs md:max-w-none mx-auto md:mx-0 rounded-sm"
                        />
                        <p className="text-xs text-[var(--color-text-faint)] mt-4 italic">
                            Playing with{" "}
                            <Link
                                href="https://pebeto.github.io/elmejorveranodemivida/"
                                target="_blank"
                            >
                                El Mejor Verano de mi Vida
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
