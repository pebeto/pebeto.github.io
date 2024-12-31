import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
    return (
        <Container>
            <Row>
                <Col>
                    <p>Jose Esparza | {new Date().getFullYear()}</p>
                </Col>
            </Row>
        </Container>
    );
}
