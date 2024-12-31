import Markdown from "react-markdown";
import { Col, Container, Row } from "react-bootstrap";

import { getMarkdownFileContent } from "@/services/markdownFiles";

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
