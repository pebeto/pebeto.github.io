import Link from "next/link";
import { Metadata } from "next";
import { Children } from "react";
import { Col, Container, Figure, FigureCaption, FigureImage, Row } from "react-bootstrap";

import { getNotebooks } from "@/services/notebooks";
import { FileResource } from "@/types/fileResource";

export const metadata: Metadata = {
    title: "Portfolio | Jose's Website",
};

export default async function Portfolio() {
    const notebooks = await getNotebooks();

    return (
        <Container>
            <Row>
                <Col xs={10} sm={5}>
                    <Figure>
                        <FigureImage src="nn.png" alt="A cool neural network" />
                        <FigureCaption>
                            A cool neural network
                        </FigureCaption>
                    </Figure>
                </Col>
                <Col xs={12} sm={7}>
                    <h3>Notebooks</h3>
                    <p>
                        I'm an enthusiast of{" "}
                        <Link href="https://julialang.org/" target="_blank">
                            Julia Programming Language
                        </Link>
                        , so I decided to translate every Python project from my old
                        portfolio into Julia and using{" "}
                        <Link href="https://plutojl.org/" target="_blank">
                            Pluto.jl
                        </Link>{" "}
                        for reactive notebooks (they look great!).
                    </p>
                    <ul>
                        {
                            Children.toArray(
                                notebooks.map((notebook: FileResource) => (
                                    <li>
                                        <Link href={notebook.link} target="_blank">
                                            <b>{notebook.title}</b>
                                        </Link>
                                    </li>
                                ))
                            )
                        }
                    </ul>
                    <p>
                        Also you can find more interesting stuff in my {" "}
                        <Link href="https://github.com/pebeto" target="_blank">
                            Github Profile
                        </Link>.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
