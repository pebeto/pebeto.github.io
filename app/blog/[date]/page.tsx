import Markdown from "react-markdown";
import { Col, Container, Row } from "react-bootstrap";

import { getMarkdownFileContent, getMarkdownFileNames } from "@/services/markdownFiles";

export async function generateStaticParams() {
    const fileNames = await getMarkdownFileNames();
    const paths = fileNames.map((filename: string) => {
        return { date: filename.replace(/\.md$/, '') }
    });

    return paths;
}

export default async function BlogEntry(
    { params }: { params: Promise<{ date: string }> }
) {
    const date = (await params).date;
    const blogEntry = (await getMarkdownFileContent(`${date}.md`))[0];

    return (
        <Container>
            <Row>
                <Col>
                    <Markdown>
                        {blogEntry}
                    </Markdown>
                </Col>
            </Row>
        </Container>
    );
}
