import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from "./card"

export default class DivOne extends React.Component {
  render() {
    return (
      <Container>
        <Row>
        <Col xs="12">
            <h2>How It Works</h2>
          </Col>
        </Row>
        <Row>
        <Col xs="12" md="4" lg="4">
            <h3>HEllo World</h3>
          </Col>
        </Row>
        <Row>
        <Col xs="12" md="4" lg="4">
          <h3>HEllo World</h3>
          </Col>
        </Row>
        <Row>
        <Col xs="12" md="4" lg="4">
          <h3>HEllo World</h3>
          </Col>
        </Row>
    </Container>
    )
  }
}
