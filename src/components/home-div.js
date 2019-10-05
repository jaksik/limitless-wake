import React from "react"
import {Row, Col } from 'reactstrap';
import Img from 'gatsby-image';

const div = (props) => {
    const data = props.info
    console.log("Props: ", props)
    return (
            <Row style={{background:`white`}}>
                <Col xs="12">
                    <h1 style={{textAlign:`center`, fontWeight:`bold`}}>{data.title}</h1>
                </Col>
                {data.data.map((item) => {
                    return (
                        <Col xs="12" md="4">
                            <Img fluid={props.image.childImageSharp.fluid} style={{maxWidth:'70px', margin:`0 auto`}}/>
                            <h4 style={{textAlign:`center`}}>{item.title}</h4>
                            <p className="home-div-item" style={{ textAlign: `center`, textIndent:`0`}}>{item.info}</p>                         
                        </Col>
                    )
                })}
            </Row>
    )
}

export default div