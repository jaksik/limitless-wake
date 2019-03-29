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
                        <h2 style={{ color: `white` }}>Lessons by:</h2>
                        <h3 style={{ marginBottom: `40px`, color: `white`}}>Chandler Crouch</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="4" className="box">
                        <h5>Texas A&M Wake Team Member</h5>
                        <p>Chandler was an active member of the Texas A&M Wake team for 4 years</p>
                    </Col>
                    <Col xs="12" sm="4" className="box">
                        <h5>Collegiate National Champion</h5>
                        <p>Champion of one of the largest wake competitions in the country</p>
                    </Col>
                    <Col xs="12" sm="4" className="box">
                        <h5>Freedom Wake Park former Student</h5>
                        <p>Known for being one of the most prestigious wake academies in the country</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
