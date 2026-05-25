import Link from "next/link";
import { Metadata } from "next";

import { getNotebooks } from "@/services/notebooks";
import { FileResource } from "@/types/fileResource";

export const metadata: Metadata = {
    title: "Portfolio",
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
        <main className="max-w-6xl mx-auto px-6 sm:px-12 py-16">
            <div className="flex flex-col md:flex-row md:gap-12 lg:gap-20">
                <div className="md:w-1/3 md:shrink-0">
                    <div className="md:sticky md:top-12">
                        <img src="missy.jpeg" alt="Missy" className="w-full max-w-xs md:max-w-none mx-auto md:mx-0 rounded-sm" />
                        <p className="text-xs text-[var(--color-text-faint)] mt-4 italic">
                            Missy
                        </p>
                    </div>
                </div>

                <div className="md:w-2/3 md:pl-10 md:border-l md:border-[var(--color-border-light)] space-y-10 mt-12 md:mt-0">
                    <h2 className="text-2xl font-semibold text-[var(--color-heading)]">
                        Production work
                    </h2>
                    <p className="text-[var(--color-text)]">
                        Most of what I ship at work is closed-source: production LLM agents, RAG pipelines, fine-tuned models and data infrastructure across fintech, edtech and retail. My{" "}
                        <a href="/resume.pdf" target="_blank">resume</a>{" "}
                        has names, dates and outcomes.
                    </p>

                    <h2 className="text-2xl font-semibold text-[var(--color-heading)] pt-6">
                        Open-source projects
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
                        I rebuilt some classic Python notebooks in{" "}
                        <Link href="https://julialang.org/" target="_blank">
                            Julia
                        </Link>{" "}
                        using{" "}
                        <Link href="https://plutojl.org/" target="_blank">
                            Pluto.jl
                        </Link>{" "}
                        for the reactive UX. Pick a topic.
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

                    <h2 className="text-2xl font-semibold text-[var(--color-heading)] pt-6">
                        Service
                    </h2>

                    <div className="space-y-5">
                        <div>
                            <span className="font-semibold text-[var(--color-heading)]">
                                REPU Seminar 2026 Judge
                            </span>
                            <span className="text-[var(--color-text-faint)] mx-2">—</span>
                            <span className="text-sm text-[var(--color-text-muted)]">
                                Evaluated undergraduate research presentations for the Research Experience for Peruvian Undergraduates. April 2026.
                            </span>
                        </div>
                        <div>
                            <span className="font-semibold text-[var(--color-heading)]">
                                IEEE Intercon 2024 Reviewer
                            </span>
                            <span className="text-[var(--color-text-faint)] mx-2">—</span>
                            <span className="text-sm text-[var(--color-text-muted)]">
                                Reviewed conference paper submissions for technical accuracy and originality. July 2024.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
