import Link from "next/link";
import { Metadata } from "next";
import { Col, Container, Figure, FigureCaption, FigureImage, Row } from "react-bootstrap";
import { getDaysSinceDate } from "@/utils";

export const metadata: Metadata = {
    title: "Now | Jose's Website",
};

export default function Now() {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={7}>
                    <h3>
                        What I'm doing{" "}
                        <Link href="https://nownownow.com/about" target="_blank">
                            now
                        </Link>
                        ?
                    </h3>
                    <ul>
                        <li>
                            Still recording my band's album (a truly masterpiece; if you
                            are a record label, please hire us)
                        </li>
                        <li>
                            Fine-tuning LLMs as much as I can
                        </li>
                        <li>
                            Living a pretty normal life with my girlfriend and our four
                            cats
                        </li>
                        <li>
                            My girlfriend gifted me a Switch 2. In love with Zelda games!!!
                        </li>
                        <li>
                            Learning about optimal GPU kernel implementations
                        </li>
                        <li>
                            Journaling every day (Improved my mental health a lot, highly
                            recommend it)
                        </li>
                    </ul>
                    <p>Last update: {getDaysSinceDate("2026-02-23")} days ago</p>
                </Col>
                <Col xs={8} sm={5}>
                    <Figure>
                        <FigureImage
                            src="emvdmv.jpeg"
                            alt="Playing with El Mejor Verano de mi Vida"
                        />
                        <FigureCaption>
                            Playing with{" "}
                            <Link
                                href="https://pebeto.github.io/elmejorveranodemivida/"
                                target="_blank"
                            >
                                El Mejor Verano de mi Vida
                            </Link>
                        </FigureCaption>
                    </Figure>
                </Col>
            </Row>
        </Container>
    );
}
