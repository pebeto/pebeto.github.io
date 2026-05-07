'use client';

import Link from "next/link";
import { Col, Container, Figure, FigureCaption, FigureImage, Row } from "react-bootstrap";
import { getDaysSinceDate } from "@/utils";
import { useState, useEffect } from "react";

export default function Now() {
    const [daysSince, setDaysSince] = useState<number>(0);

    useEffect(() => {
        setDaysSince(getDaysSinceDate("2026-04-04"));
    }, []);

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
                            Learning about GPU programming
                        </li>
                        <li>
                            Learning about using profiling tools to optimize my code and find bottlenecks
                        </li>
                        <li>
                            Playing Death Stranding 2 (awesome game, I highly recommend it)
                        </li>
                    </ul>
                    <p>Last update: {daysSince} days ago</p>
                </Col>
                <Col xs={8} sm={5}>
                    <Figure>
                        <FigureImage
                            src="emvdmv.jpeg"
                            alt="Playing with El Mejor Verano de mi Vida"
                            rounded
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
