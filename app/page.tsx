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
                        I'm a Software Engineer with extensive knowledge in Machine
                        Learning, Data Science and Software Development. My experience in both
                        academics and industry makes me aware of novelty and fast driving,
                        as well as good analytical skills. I worked with teams from
                        different countries, giving me an integral communication fluency in
                        English. Some of my work are related with really complex systems using
                        large data pipelines, as well as performing analysis and applying
                        machine learning models.
                    </p>
                    <p>
                        I studied at{" "}
                        <Link href="https://www.upn.edu.pe/" target="_blank">
                            Universidad Privada del Norte
                        </Link>{" "}
                        and received as a Bachelor in Software Engineering. My bachelor
                        research project was highlighted due to subject innovation in my
                        alma mater, as well as presented in{" "}
                        <Link href="https://smiles.skoltech.ru/school-2020" target="_blank">
                            SMILES 2020
                        </Link>{" "}
                        as a research poster.
                        Now I'm running a MsC in Computer Science at{" "}
                        <Link href="https://www.bbk.ac.uk/" target="_blank">
                            Birkbeck, University of London
                        </Link>
                    </p>
                    <p>
                        As part of the first{" "}
                        <Link href="https://www.repuprogram.org/repu-cs" target="_blank">
                            REPUcs
                        </Link>{" "}
                        cohort, I presented and published a{" "}
                        <Link href="https://link.springer.com/chapter/10.1007/978-3-030-91434-9_18" target="_blank">
                            research paper
                        </Link>{" "}
                        about COVID-19 vaccine roll social reaction and it was indexed in
                        the{" "}
                        <Link
                            href="https://pesquisa.bvsalud.org/global-literature-on-novel-coronavirus-2019-ncov/resource/pt/covidwho-1593151?lang=en" target="_blank">
                            WHO COVID-19 Research Database
                        </Link>
                        . I was mentored by{" "}
                        <Link
                            href="https://www.linkedin.com/in/gissella-bejarano-phd-3789b01a/" target="_blank">
                            Gissella Bejarano
                        </Link>
                        , being part of the Machine Learning Research Group from{" "}
                        <Link href="https://www.binghamton.edu/computer-science/index.html" target="_blank">
                            Binghamton University Computer Science Department
                        </Link>
                        .
                    </p>
                    <p>
                        I'm a Julia Programming Language enthusiast, and most of my personal
                        computer science projects are based on it. This is great language,
                        and I'm convinced that it will be the future of scientific
                        computing. The Google Summer of Code 2023 gave me the opportunity to
                        be a{" "}
                        <Link href="https://alan-turing-institute.github.io/MLJ.jl/dev/" target="_blank">
                            Machine Learning in Julia (MLJ)
                        </Link>{" "}
                        contributor, being mentored by{" "}
                        <Link href="https://ablaom.github.io" target="_blank">
                            Anthony Blaom, PhD
                        </Link>{" "}
                        and{" "}
                        <Link href="https://www.linkedin.com/in/deyandyankov/" target="_blank">
                            Deyan Dyankov
                        </Link>
                        .
                    </p>
                    <p>
                        I play vocals in a band called{" "}
                        <Link href="https://pebeto.github.io/elmejorveranodemivida/" target="_blank">
                            El mejor verano de mi vida
                        </Link>{" "}
                        (The best summer of my life). We were recognized as part of the
                        fifth wave of emo, so I'm proud of it. I also like to play Magic The
                        Gathering and I have two cats.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
