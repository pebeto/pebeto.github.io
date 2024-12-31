import Link from "next/link";
import { Metadata } from "next";
import { Col, Container, Row } from "react-bootstrap";

export const metadata: Metadata = {
    title: "Resume | Jose's Website",
}

export default function Resume() {
    return (
        <Container>
            <Row>
                <Col>
                    You can download my resume{" "}
                    <Link href="resume.pdf" target="_blank">
                        here
                    </Link>
                    .
                </Col>
            </Row>
        </Container>
    );
}
