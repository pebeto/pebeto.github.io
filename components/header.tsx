import Link from "next/link";

import { getRandomSubheader } from "@/services/subheaders";
import { Col, Container, Row, Stack } from "react-bootstrap";

import './header.css';

export default function Header() {
    return (
        <Container className="header-container">
            <Row>
                <Col>
                    <h1>Jose Esparza</h1>
                    <h3>{getRandomSubheader()}</h3>
                </Col>
            </Row>
            <Stack direction="horizontal" gap={2}>
                <Link className="header-link" href="/">Home</Link>
                <Link className="header-link" href="/now">Now</Link>
                <Link className="header-link" href="/portfolio">Portfolio</Link>
                <Link className="header-link" href="/tools">Tools</Link>
                <Link className="header-link" href="/blog">Blog</Link>
                <Link className="header-link" href="/resume">Resume</Link>
            </Stack>
        </Container>
    );
}
