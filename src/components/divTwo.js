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
                        <h2 style={{ marginBottom: `15%`}}>Lessons by Chandler Crouch</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="4" className="box">
                        <h5>4 Year A&M Wake Team Member</h5>
                        <p>Chandler was an 4 active team member on the Texas A&M Wake Boarding Team</p>
                    </Col>
                    <Col xs="12" sm="4" className="box">
                        <h5>Orlando Wake Accademy Former Graduate</h5>
                        <p>Renounded as one of the top wake boarding accademies in the world, Chandler completed the program in 2016</p>
                    </Col>
                    <Col xs="12" sm="4" className="box" style={{ marginBottom: `20%`}}>
                        <h5>2 Time League Champion</h5>
                        <p>Known for being a very competitive league</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
