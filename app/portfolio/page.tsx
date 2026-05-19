import Link from "next/link";
import { Metadata } from "next";

import { getNotebooks } from "@/services/notebooks";
import { FileResource } from "@/types/fileResource";

export const metadata: Metadata = {
    title: "Portfolio | Jose's Website",
};

export default async function Portfolio() {
    const notebooks = await getNotebooks();
    const groupedNotebooks = notebooks.reduce((acc, notebook) => {
        if (!acc[notebook.category]) {
            acc[notebook.category] = [];
        }
        acc[notebook.category].push(notebook);
        return acc;
    }, {} as Record<string, FileResource[]>);

    return (
        <main className="max-w-6xl mx-auto px-12 py-16">
            <div className="flex flex-col lg:flex-row lg:gap-20">
                <div className="lg:w-1/3 lg:shrink-0">
                    <div className="lg:sticky lg:top-12">
                        <img src="missy.jpeg" alt="Missy" className="w-full rounded-sm" />
                        <p className="text-xs text-[var(--color-text-faint)] mt-4 italic">
                            Missy
                        </p>
                    </div>
                </div>

                <div className="lg:w-2/3 lg:pl-10 lg:border-l lg:border-[var(--color-border-light)] space-y-10 mt-12 lg:mt-0">
                    <h2 className="text-2xl font-semibold text-[var(--color-heading)]">
                        Projects
                    </h2>

                    <div className="space-y-5">
                        {[
                            { href: "https://github.com/JuliaAI/MLJ.jl", title: "MLJ.jl", desc: "A Julia machine learning framework." },
                            { href: "https://github.com/JuliaAI/DearDiary.jl", title: "DearDiary.jl", desc: "A machine learning experiment tracking tool for Julia." },
                            { href: "https://github.com/pebeto/MichiBoost.jl", title: "MichiBoost.jl", desc: "CatBoost implementation in Julia." },
                            { href: "https://github.com/JuliaAI/MLFlowClient.jl", title: "MLFlowClient.jl", desc: "A Julia client for MLflow." },
                            { href: "https://github.com/pebeto/ARP.jl", title: "ARP.jl", desc: "Auto-Rotating Perceptrons in Julia." },
                            { href: "https://github.com/pebeto/pluto-design-system", title: "pluto-design-system", desc: "CSS framework styled in the Pluto.jl aesthetic." },
                            { href: "https://github.com/pebeto/missyhud.prx", title: "missyhud.prx", desc: "A PSP HUD plugin, written in C." },
                            { href: "https://github.com/pebeto/proton-ge-manager", title: "proton-ge-manager", desc: "Painless proton-ge installation for Steam Deck/Linux." },
                        ].map((project) => (
                            <div key={project.href}>
                                <Link
                                    href={project.href}
                                    target="_blank"
                                    className="font-semibold text-[var(--color-heading)]"
                                >
                                    {project.title}
                                </Link>
                                <span className="text-[var(--color-text-faint)] mx-2">—</span>
                                <span className="text-sm text-[var(--color-text-muted)]">{project.desc}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-[var(--color-text)]">
                        More in my{" "}
                        <Link href="https://github.com/pebeto" target="_blank">
                            Github Profile
                        </Link>.
                    </p>

                    <h2 className="text-2xl font-semibold text-[var(--color-heading)] pt-6">
                        Notebooks
                    </h2>
                    <p className="text-[var(--color-text)]">
                        I'm an enthusiast of{" "}
                        <Link href="https://julialang.org/" target="_blank">
                            Julia
                        </Link>
                        , so I translated every Python project from my old
                        portfolio into Julia using{" "}
                        <Link href="https://plutojl.org/" target="_blank">
                            Pluto.jl
                        </Link>{" "}
                        for reactive notebooks.
                    </p>

                    <div className="space-y-8">
                        {Object.entries(groupedNotebooks).map(([category, categoryNotebooks]) => (
                            <div key={category}>
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-faint)] mb-3">
                                    {category}
                                </h3>
                                <div className="space-y-2">
                                    {categoryNotebooks.map((notebook: FileResource) => (
                                        <div key={notebook.title} className="flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-[var(--color-dot-muted)] shrink-0" />
                                            <Link
                                                href={notebook.link}
                                                target="_blank"
                                                className="text-sm text-[var(--color-text)] hover:text-[var(--color-heading)] transition-colors"
                                            >
                                                {notebook.title}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
