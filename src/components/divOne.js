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
                        <h2 style={{ marginBottom: `15%`}}>How It Works</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="4" className="box">
                        <h4>1. Book A Lesson</h4>
                        <p>Lessons are by the hour and can be private or with your friends.</p>
                    </Col>
                    <Col xs="12" sm="4" className="box">
                        <h4>2. Fill Out The Evaluation</h4>
                        <p>Fill out the quick evaluation form so we can know how to make the most of your lesson.</p>
                    </Col>
                    <Col xs="12" sm="4" className="box" style={{ marginBottom: `20%`}}>
                        <h4>3. We Come To You</h4>
                        <p>The instructor comes to you. Lessons are on your boat with your friends </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
