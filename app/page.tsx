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
                            I'm a Senior ML Engineer who ships production LLM systems: agentic assistants with LangGraph and MCP, RAG over vector databases, fine-tuned Llama models for domain-specific generation, plus the BI dashboards and observability. The work spans fintech, edtech, retail and large enterprise. Recent builds: WhatsApp customer-support agents, semantic search over a lesson catalog, a Llama-based lesson generator fine-tuned on expert-picked curriculum to preserve a specific technical-English voice, and high-volume retailer data ingestion. Earlier in my career I trained classical risk models, built AWS ETL pipelines and shipped full-stack platforms. My{" "}
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
                            summer school I earned a top 10% spot to present work on Convolutional Neural Networks for respiratory-condition detection. I'm pursuing an MSc in Computer Science at the{" "}
                            <Link href="https://www.london.ac.uk/" target="_blank">
                                University of London
                            </Link>.
                        </p>
                        <p>
                            As a{" "}
                            <Link href="https://www.repuprogram.org/repu-cs" target="_blank">
                                REPU
                            </Link>{" "}
                            Computer Science alum, I analyzed a corpus of 80,000 COVID-19-related texts under the mentorship of{" "}
                            <Link
                                href="https://www.linkedin.com/in/gissella-bejarano-phd-3789b01a/" target="_blank">
                                Gisella Bejarano
                            </Link>{" "}
                            in Professor Arti Ramesh's research lab at{" "}
                            <Link href="https://www.binghamton.edu/computer-science/index.html" target="_blank">
                                Binghamton University
                            </Link>. We published the work as a{" "}
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
                            Beyond the code, I play vocals in a band called{" "}
                            <Link href="https://pebeto.github.io/elmejorveranodemivida/" target="_blank">
                                El mejor verano de mi vida
                            </Link>{" "}
                            (The best summer of my life). We were recognized as part of the fifth wave of emo, which I'm quite proud of! I also enjoy playing Magic: The Gathering and spending time with my two cats.
                        </p>
                    </div>

                    <h2 className="text-2xl font-semibold text-[var(--color-heading)] pt-4">
                        Tech stack
                    </h2>

                    <dl className="space-y-3 text-sm">
                        <div className="flex flex-col sm:flex-row sm:gap-4">
                            <dt className="font-semibold text-[var(--color-heading)] sm:w-36 shrink-0">LLM & ML</dt>
                            <dd className="text-[var(--color-text-muted)]">PyTorch, TensorFlow, HF Transformers, vLLM, LangChain, LangGraph, LlamaIndex, MCP/FastMCP, LLaMA-Factory, OpenAI API, scikit-learn, pandas</dd>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4">
                            <dt className="font-semibold text-[var(--color-heading)] sm:w-36 shrink-0">Data & Cloud</dt>
                            <dd className="text-[var(--color-text-muted)]">Spark, Airflow, Databricks, AWS, GCP</dd>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4">
                            <dt className="font-semibold text-[var(--color-heading)] sm:w-36 shrink-0">Databases</dt>
                            <dd className="text-[var(--color-text-muted)]">PostgreSQL/pgvector, MongoDB, Redis, Neo4j</dd>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4">
                            <dt className="font-semibold text-[var(--color-heading)] sm:w-36 shrink-0">Backend & Web</dt>
                            <dd className="text-[var(--color-text-muted)]">FastAPI, Django, Node.js, Next.js, TypeScript</dd>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4">
                            <dt className="font-semibold text-[var(--color-heading)] sm:w-36 shrink-0">Languages</dt>
                            <dd className="text-[var(--color-text-muted)]">Python, SQL, Julia, TypeScript, C++, Bash</dd>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4">
                            <dt className="font-semibold text-[var(--color-heading)] sm:w-36 shrink-0">DevOps</dt>
                            <dd className="text-[var(--color-text-muted)]">Docker, Kubernetes, GitHub Actions</dd>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4">
                            <dt className="font-semibold text-[var(--color-heading)] sm:w-36 shrink-0">Observability</dt>
                            <dd className="text-[var(--color-text-muted)]">Prometheus, Grafana, Datadog, Sentry, Langfuse</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </main>
    );
}
