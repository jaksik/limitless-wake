import React from "react"
import {Row, Col } from 'reactstrap';
import Img from 'gatsby-image';

const div = (props) => {
    const data = props.info
    console.log("Props: ", props)
    return (
            <Row style={{background:`white`}}>
                <Col xs="12">
                    <h2>{data.title}</h2>
                </Col>
                {data.data.map((item) => {
                    return (
                        <Col xs="12" sm="4" className="box">
                            <Img fluid={props.image.childImageSharp.fluid}/>
                            <h4 style={{ padding: `0px 0px 15px`}}>{item.title}</h4>
                            <p className="home-div-item" style={{ textAlign: `center`}}>{item.info}</p>
                        </Col>
                    )
                })}
            </Row>
    )
}

export default div