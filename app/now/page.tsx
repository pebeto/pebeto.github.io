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
                            Still recording my band's album (a truly masterpiece; if you are a
                            record label, please hire us)
                        </li>
                        <li>
                            Working on my living room (I will post pictures when it's done)
                        </li>
                        <li>
                            Started swimming for two hours three times a week
                        </li>
                        <li>
                            Bought a Steam Deck and rediscovering my love for videogames
                        </li>
                        <li>
                            Migrating this page to a SSR Next.js app (Maybe you are seeing it)
                        </li>
                    </ul>
                    <p>Last update: {getDaysSinceDate("2024-12-31")} days ago</p>
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
