import Link from "next/link";
import { Metadata } from "next";
import { Col, Container, Figure, FigureCaption, FigureImage, Row } from "react-bootstrap";

export const metadata: Metadata = {
    title: "Home | Jose's Website",
};

export default function Home() {
    return (
        <Container>
            <Row>
                <Col xs={8} sm={4}>
                    <Figure>
                        <FigureImage src="profile.jpeg" alt="Jose Esparza" rounded />
                        <FigureCaption>
                            Eating soup
                        </FigureCaption>
                    </Figure>
                </Col>
                <Col sm={7} md={7}>
                    <h3>Welcome!</h3>
                    <p>
                        I'm a Senior Software & ML Engineer focused on bridging the gap between advanced academic research and scalable industry solutions. My experience spans architecting complex data pipelines, deploying fine-tuned LLMs, and building robust RAG architectures for real-world applications. As a bilingual (English/Spanish) tech lead, I enjoy aligning multinational teams to deliver high-performance, production-grade AI and full-stack systems.
                    </p>
                    <p>
                        I hold a B.S. in Software Engineering from{" "}
                        <Link href="https://www.upn.edu.pe/" target="_blank">
                            Universidad Privada del Norte
                        </Link>{" "}
                        where I graduated as a highlighted student with a 4.0 GPA. My early research was recognized at the{" "}
                        <Link href="https://smiles.skoltech.ru/school-2020" target="_blank">
                            Skolkovo Institute of Science and Technology (SMILES 2020)
                        </Link>
                        , where I earned a top 10% spot to present my work on Convolutional Neural Networks for respiratory condition detection. Currently, I am expanding my academic horizons by pursuing an MSc in Computer Science at the{" "}
                        <Link href="https://www.london.ac.uk/" target="_blank">
                            University of London
                        </Link>.
                    </p>
                    <p>
                        As a{" "}
                        <Link href="https://www.repuprogram.org/repu-cs" target="_blank">
                            REPU
                        </Link>{" "}
                        Computer Science alum, I analyzed a corpus of 80,000 COVID-19-related texts using novel NLP approaches. This resulted in a published{" "}
                        <Link href="https://link.springer.com/chapter/10.1007/978-3-030-91434-9_18" target="_blank">
                            research paper
                        </Link>{" "}
                        that was indexed in the{" "}
                        <Link
                            href="https://pesquisa.bvsalud.org/global-literature-on-novel-coronavirus-2019-ncov/resource/pt/covidwho-1593151?lang=en" target="_blank">
                            WHO COVID-19 Research Database
                        </Link>. During this research, I had the privilege of being mentored by{" "}
                        <Link
                            href="https://www.linkedin.com/in/gissella-bejarano-phd-3789b01a/" target="_blank">
                            Gisella Bejarano
                        </Link>{" "}
                        in Professor Arti Ramesh's research lab at{" "}
                        <Link href="https://www.binghamton.edu/computer-science/index.html" target="_blank">
                            Binghamton University
                        </Link>.
                    </p>
                    <p>
                        I'm also a huge enthusiast of the Julia Programming Language and active in the open-source community. The Google Summer of Code 2023 gave me the opportunity to work on{" "}
                        <Link href="https://summerofcode.withgoogle.com/archive/2023/projects/iRxuzeGJ" target="_blank">
                            empowering Julia-based Data Science with MLflow
                        </Link>.{" "}
                        Today, I actively contribute to the{" "}
                        <Link href="https://alan-turing-institute.github.io/MLJ.jl/dev/" target="_blank">
                            Machine Learning in Julia (MLJ)
                        </Link>{" "}
                        framework, and I maintain tracking tools like{" "}
                        <Link href="https://github.com/JuliaAI/DearDiary.jl" target="_blank">
                            DearDiary.jl
                        </Link>{" "}
                        under the JuliaAI organization.
                    </p>
                    <p>
                        Beyond the code, I play vocals in a band called{" "}
                        <Link href="https://pebeto.github.io/elmejorveranodemivida/" target="_blank">
                            El mejor verano de mi vida
                        </Link>{" "}
                        (The best summer of my life). We were recognized as part of the fifth wave of emo, which I'm quite proud of! I also enjoy playing Magic: The Gathering and spending time with my two cats.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
