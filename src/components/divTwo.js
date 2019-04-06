import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class DivOne extends React.Component {
    render() {
        return (
            <Container 
            style={{ backgroundColor: `#343a40`, color: `darkgrey`, margin: `0px`, minWidth: `100%`}}
            >
                <Row>
                    <Col xs="12">
                        <h2>Lessons by Chandler Crouch</h2>
                        <h3 style={{ marginBottom: `40px`}}></h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="4" className="box">
                        <h5> Former Texas A&M Wake Team Member</h5>
                        <p>Chandler was an active member and officer of the Texas A&M Wake team for 4 years</p>
                    </Col>
                    <Col xs="12" sm="4" className="box">
                        <h5>Collegiate National Champion</h5>
                        <p>Intermediate Division Champion at the 2016 Collegiate National Championships</p>
                    </Col>
                    <Col xs="12" sm="4" className="box">
                        <h5>Former Freedom Wake Park Instructor</h5>
                        <p>Awarded 2018 Wake School of the year by the WSIA</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
