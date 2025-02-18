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
                            Started playing Persona series (Finished Persona 3 Reload, and
                            now playing Persona 4 Golden)
                        </li>
                        <li>
                            After four months, I'm a freestyle swimming beast
                        </li>
                        <li>
                            Leaving my screen addiction and enjoying more the real world
                        </li>
                    </ul>
                    <p>Last update: {getDaysSinceDate("2025-02-18")} days ago</p>
                </Col>
                <Col xs={8} sm={5}>
                    <Figure>
                        <FigureImage src="emvdmv.jpeg" alt="Playing with El Mejor Verano de mi Vida" />
                        <FigureCaption>
                            Playing with{" "}
                            <Link href="https://pebeto.github.io/elmejorveranodemivida/" target="_blank">
                                El Mejor Verano de mi Vida
                            </Link>
                        </FigureCaption>
                    </Figure>
                </Col>
            </Row>
        </Container>
    );
}
