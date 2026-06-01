import Link from "next/link";

export default function Home() {
    return (
        <main className="max-w-6xl mx-auto px-6 sm:px-12 py-16">
            <div className="flex flex-col md:flex-row md:gap-12 lg:gap-20">
                <div className="md:w-1/3 md:shrink-0">
                    <div className="md:sticky md:top-12">
                        <img
                            src="profile.jpeg"
                            alt="Jose Esparza"
                            className="w-full max-w-xs md:max-w-none mx-auto md:mx-0 rounded-sm"
                        />
                        <p className="text-xs text-[var(--color-text-faint)] mt-4 italic">
                            Eating soup
                        </p>
                    </div>
                </div>

                <div className="md:w-2/3 md:pl-10 md:border-l md:border-[var(--color-border-light)] space-y-10 mt-12 md:mt-0">
                    <h2 className="text-2xl font-semibold text-[var(--color-heading)]">
                        About
                    </h2>

                    <div className="space-y-6 text-[var(--color-text)] leading-relaxed">
                        <p>
                            I like owning a system from the first prototype to the dashboards that watch it in production. As a Senior ML Engineer, most of what I ship now is LLM systems: agentic assistants with LangGraph and MCP, RAG over vector databases, and fine-tuned Llama models for domain-specific generation, plus the BI and observability around them. I've worked across fintech, edtech, retail and large enterprise.
                        </p>
                        <div>
                            <p>Recent builds:</p>
                            <ul className="space-y-2 mt-3">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-dot)] shrink-0" />
                                    <span>WhatsApp customer-support agents</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-dot)] shrink-0" />
                                    <span>Semantic search over a lesson catalog</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-dot)] shrink-0" />
                                    <span>A Llama-based lesson generator fine-tuned on expert-picked curriculum to preserve a specific technical-English voice</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-dot)] shrink-0" />
                                    <span>High-volume retailer data ingestion</span>
                                </li>
                            </ul>
                        </div>
                        <p>
                            Earlier in my career I led a five-engineer data team building AWS pipelines that ingested product-availability data from Cencosud, Falabella and Walmart, and trained default-risk models for fintech lenders. Before that I engineered raw-material microservices for INDITEX, refactored the Spanish Ministry of Justice's certificate system to handle 500k+ records, and shipped a full-stack risk platform for Barrick Gold. My{" "}
                            <a href="/resume.pdf" target="_blank">resume</a>{" "}
                            has the specifics.
                        </p>
                        <p>
                            I'm deep in the Julia open-source community. Google Summer of Code 2023 funded my work on{" "}
                            <Link href="https://summerofcode.withgoogle.com/archive/2023/projects/iRxuzeGJ" target="_blank">
                                empowering Julia-based Data Science with MLflow
                            </Link>. I contribute to the{" "}
                            <Link href="https://alan-turing-institute.github.io/MLJ.jl/dev/" target="_blank">
                                Machine Learning in Julia (MLJ)
                            </Link>{" "}
                            framework and maintain{" "}
                            <Link href="https://github.com/JuliaAI/DearDiary.jl" target="_blank">
                                DearDiary.jl
                            </Link>{" "}
                            under the JuliaAI organization.
                        </p>
                        <p>
                            I hold a B.S. in Software Engineering from{" "}
                            <Link href="https://www.upn.edu.pe/" target="_blank">
                                Universidad Privada del Norte
                            </Link>
                            , where I graduated with a 4.0 GPA. At Skolkovo's{" "}
                            <Link href="https://smiles.skoltech.ru/school-2020" target="_blank">
                                SMILES 2020
                            </Link>{" "}
                            summer school I placed in the top 10% of 2,000+ applicants and presented my work on Convolutional Neural Networks for respiratory-condition detection. I'm pursuing an MSc in Computer Science at the{" "}
                            <Link href="https://www.london.ac.uk/" target="_blank">
                                University of London
                            </Link>.
                        </p>
                        <p>
                            As a REPU Computer Science alum, I analyzed 80,000 COVID-19 texts with Gisella Bejarano in Arti Ramesh's lab at Binghamton University, and we published a{" "}
                            <Link href="https://link.springer.com/chapter/10.1007/978-3-030-91434-9_18" target="_blank">
                                paper
                            </Link>{" "}
                            indexed in the{" "}
                            <Link
                                href="https://pesquisa.bvsalud.org/global-literature-on-novel-coronavirus-2019-ncov/resource/pt/covidwho-1593151?lang=en" target="_blank">
                                WHO COVID-19 Research Database
                            </Link>.
                        </p>
                        <p>
                            Beyond the code, I do vocals in a band called{" "}
                            <Link href="https://pebeto.github.io/elmejorveranodemivida/" target="_blank">
                                El mejor verano de mi vida
                            </Link>{" "}
                            (The best summer of my life). We got counted in the fifth wave of emo, and I'm proud of it. I also play Magic: The Gathering and spend time with my two cats.
                        </p>
                    </div>

                    <h2 className="text-2xl font-semibold text-[var(--color-heading)] pt-4">
                        Tech stack
                    </h2>

                    <div>
                        <dl className="space-y-3 text-sm">
                            <div className="flex flex-col sm:flex-row sm:gap-4">
                                <dt className="font-semibold text-[var(--color-heading)] sm:w-36 shrink-0">ML & LLMs</dt>
                                <dd className="text-[var(--color-text-muted)]">PyTorch, HF Transformers, vLLM, LangGraph, LlamaIndex, MCP/FastMCP, LLaMA-Factory</dd>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:gap-4">
                                <dt className="font-semibold text-[var(--color-heading)] sm:w-36 shrink-0">Data & infra</dt>
                                <dd className="text-[var(--color-text-muted)]">Spark, Airflow, Databricks, AWS, GCP, Docker, Kubernetes</dd>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:gap-4">
                                <dt className="font-semibold text-[var(--color-heading)] sm:w-36 shrink-0">Languages</dt>
                                <dd className="text-[var(--color-text-muted)]">Python, SQL, Julia, TypeScript, C++, CUDA</dd>
                            </div>
                        </dl>
                        <p className="text-sm text-[var(--color-text-faint)] mt-4">
                            <a href="/resume.pdf" target="_blank">Full stack on my resume ↗</a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
