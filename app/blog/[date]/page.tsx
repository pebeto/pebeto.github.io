import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import { Col, Container, Row } from "react-bootstrap";

import { getMarkdownFileContent, getMarkdownFileNames } from "@/services/markdownFiles";
import rehypeRaw from "rehype-raw";

export async function generateStaticParams() {
    const fileNames = await getMarkdownFileNames();
    const paths = fileNames.map((filename: string) => {
        return { date: filename.replace(/\.md$/, '') }
    });

    return paths;
}

export async function generateMetadata({ params }: { params: Promise<{ date: string }> }) {
    const date = (await params).date;
    const blogEntryTitle = (await getMarkdownFileContent(`${date}.md`))[0].split('\n')[0].replace(/^#\s+/, '');

    return {
        title: `${date} | Jose's Blog`,
        description: blogEntryTitle,
    };
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
                    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                        {blogEntry}
                    </Markdown>
                </Col>
            </Row>
        </Container>
    );
}
