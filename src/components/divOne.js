import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class DivOne extends React.Component {
    render() {
        return (
            <Container 
            style={{ backgroundColor: `#343a40`, color: `darkgrey`, margin: `0px`, minWidth: `100%` }}
            >
                <Row>
                    <Col xs="12">
                        <h2 style={{ color: `343a4` }}>How It Works</h2>
                    </Col>
                </Row>
                <Row className="divSection">
                    <Col xs="12" sm="4" className="box">
                        <h3>1. Fill Out The Evaluation Form</h3>
                        <p>Tell us a little about yourself as well as your preferred lesson day, time, and location.</p>
                    </Col>
                    <Col xs="12" sm="4" className="box">
                        <h3>2. Lesson Confirmation</h3>
                        <p>After filling out the evaluation, we'll get in contact with you through phone or email to confirm your lesson.</p>
                    </Col>
                    <Col xs="12" sm="4" className="box">
                        <h3>3. We Come To You</h3>
                        <p>We'll meet you any where in the Austin, Texas area. If you don't have a boat, <a href="/boat-rentals">click here</a> to check out popular rental locations</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
