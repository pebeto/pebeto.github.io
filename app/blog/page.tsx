import Link from "next/link";
import { Metadata } from "next";
import { Children } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { FileResource } from "@/types/fileResource";
import { getMarkdownFiles } from "@/services/markdownFiles";

export const metadata: Metadata = {
    title: "Blog | Jose's Website",
};

export default async function Blog() {
    const markdownFiles = await getMarkdownFiles();

    return (
        <Container>
            <Row>
                <Col>
                    <p>
                        This is a very personal section of my website. My thoughts, experiences and ideas are shared here.
                    </p>
                    <p>
                        Most of my writings will be in my native language, Spanish. However, I will try to write some articles in English.
                    </p>
                    <ul>
                        {
                            Children.toArray(
                                markdownFiles.map((markdownFile: FileResource) => (
                                    <>
                                        <li>
                                            <Link href={markdownFile.link}>
                                                <b>{markdownFile.title}</b>
                                            </Link>
                                        </li>
                                    </>
                                ))
                            )
                        }
                    </ul>

                </Col>
            </Row>
        </Container>
    );
}
