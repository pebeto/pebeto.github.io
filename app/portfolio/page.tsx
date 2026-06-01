import Link from "next/link";
import { Metadata } from "next";

import { getNotebooks } from "@/services/notebooks";
import { FileResource } from "@/types/fileResource";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Production ML work, open-source Julia projects, a peer-reviewed publication, and notebooks by Jose Esparza, Senior ML Engineer.",
    alternates: { canonical: "/portfolio" },
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
                        has the names and dates; below are a few representative builds.
                    </p>

                    <div className="space-y-5">
                        <div>
                            <span className="font-semibold text-[var(--color-heading)]">Agentic banking assistant</span>
                            <span className="text-[var(--color-text-faint)] mx-2">—</span>
                            <span className="text-sm text-[var(--color-text-muted)]">WhatsApp customer support built end to end: a LangGraph agent over RAG (Postgres/pgvector), with audio transcription, AWS OTP, scheduled LLM-generated financial reports, and an MCP server exposing internal tools.</span>
                        </div>
                        <div>
                            <span className="font-semibold text-[var(--color-heading)]">Curriculum ML tooling</span>
                            <span className="text-[var(--color-text-faint)] mx-2">—</span>
                            <span className="text-sm text-[var(--color-text-muted)]">A transformer recommender surfacing semantically adjacent lessons with sub-second latency, plus a fine-tuned Llama 3.1 8B (LoRA) for resource generation that expert reviewers signed off as on-voice.</span>
                        </div>
                        <div>
                            <span className="font-semibold text-[var(--color-heading)]">Retail data pipelines</span>
                            <span className="text-[var(--color-text-faint)] mx-2">—</span>
                            <span className="text-sm text-[var(--color-text-muted)]">High-volume AWS ETL (Glue, Athena, Lambda, S3) ingesting product-availability data from major retailer B2B platforms, feeding analytics that drove stakeholder decisions.</span>
                        </div>
                    </div>

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
                            GitHub Profile
                        </Link>.
                    </p>

                    <h2 className="text-2xl font-semibold text-[var(--color-heading)] pt-6">
                        Research & recognition
                    </h2>

                    <div className="space-y-5">
                        <div>
                            <Link
                                href="https://link.springer.com/chapter/10.1007/978-3-030-91434-9_18"
                                target="_blank"
                                className="font-semibold text-[var(--color-heading)]"
                            >
                                Understanding the Issues Surrounding COVID-19 Vaccine Roll Out via User Tweets
                            </Link>
                            <span className="text-[var(--color-text-faint)] mx-2">—</span>
                            <span className="text-sm text-[var(--color-text-muted)]">
                                Peer-reviewed paper at CSoNet 2021, indexed in the{" "}
                                <Link
                                    href="https://pesquisa.bvsalud.org/global-literature-on-novel-coronavirus-2019-ncov/resource/pt/covidwho-1593151?lang=en"
                                    target="_blank"
                                >
                                    WHO COVID-19 Research Database
                                </Link>.
                            </span>
                        </div>
                        <div>
                            <Link
                                href="https://summerofcode.withgoogle.com/archive/2023/projects/iRxuzeGJ"
                                target="_blank"
                                className="font-semibold text-[var(--color-heading)]"
                            >
                                Empowering Julia-based Data Science with MLflow
                            </Link>
                            <span className="text-[var(--color-text-faint)] mx-2">—</span>
                            <span className="text-sm text-[var(--color-text-muted)]">
                                Google Summer of Code 2023, bringing MLflow experiment tracking to the Julia ecosystem.
                            </span>
                        </div>
                        <div>
                            <Link
                                href="https://smiles.skoltech.ru/school-2020"
                                target="_blank"
                                className="font-semibold text-[var(--color-heading)]"
                            >
                                Convolutional Neural Networks in Respiratory Conditions Detection: A Systematic Review of the Last 4 Years
                            </Link>
                            <span className="text-[var(--color-text-faint)] mx-2">—</span>
                            <span className="text-sm text-[var(--color-text-muted)]">
                                Research poster at SMILES 2020 (Skoltech), selected in the top 10% of 2,000+ applicants.
                            </span>
                        </div>
                    </div>

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
