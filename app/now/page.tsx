import Link from "next/link";
import { Metadata } from "next";
import DaysSince from "./days-since";

export const metadata: Metadata = {
    title: "Now | Jose's Website",
};

export default function Now() {
    return (
        <main className="max-w-6xl mx-auto px-12 py-16">
            <div className="flex flex-col lg:flex-row lg:gap-20">
                <div className="lg:w-2/3 space-y-10">
                    <h2 className="text-2xl font-semibold text-[var(--color-heading)]">
                        What I'm doing{" "}
                        <Link href="https://nownownow.com/about" target="_blank">
                            now
                        </Link>
                        ?
                    </h2>

                    <ul className="space-y-5 text-[var(--color-text)]">
                        {[
                            "Still recording my band's album (a truly masterpiece; if you are a record label, please hire us)",
                            "Learning about GPU programming",
                            "Learning about using profiling tools to optimize my code and find bottlenecks",
                            "Playing Death Stranding 2 (awesome game, I highly recommend it)",
                            "Starting with a PhD-like study plan to learn more about machine learning and deep learning",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-dot)] shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <DaysSince />
                </div>

                <div className="lg:w-1/3 lg:shrink-0 mt-12 lg:mt-0">
                    <div className="lg:sticky lg:top-12">
                        <img
                            src="emvdmv.jpeg"
                            alt="Playing with El Mejor Verano de mi Vida"
                            className="w-full rounded-sm"
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
