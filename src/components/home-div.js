import React from "react"
import { Container, Row, Col } from 'reactstrap';

const div = (props) => {
    const data = props.info
    return (
        <div style={{ zIndex: `0`}}>
            <Row>
                <Col xs="12">
                    <h2>{data.title}</h2>
                </Col>
            </Row>
            <Row>
                {data.data.map((item) => {
                    return (
                        <Col xs="12" sm="4" className="box">
                            <h4 style={{ padding: `0`}}>{item.title}</h4>
                            <p className="home-div-item">{item.info}</p>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default div