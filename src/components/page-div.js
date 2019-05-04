import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const pagediv = (props) => (
    <Container style={{ backgroundColor: `#343a40`, color: `darkgrey`, margin: `0px`, minWidth: `100%` }}>
        <Row>
            <Col xs="12">
                <h2 style={{ color: `white` }}>{props.data.title}</h2>
            </Col>
        </Row>
        <Row className="divSection">
            <Col xs="12" sm="4" className="box">
                <h3>{props.data.data[0].title}</h3>
                <p>{props.data.data[0].info}</p>
            </Col>
            <Col xs="12" sm="4" className="box">
            <h3>{props.data.data[1].title}</h3>
            <p>{props.data.data[1].info}</p>
            </Col>
            <Col xs="12" sm="4" className="box">
            <h3>{props.data.data[2].title}</h3>
            <p>{props.data.data[2].info}</p>
            </Col>
        </Row>
    </Container>
)

export default pagediv
