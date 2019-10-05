import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Collapsible from "../components/collapsible"
import HomeDiv from "../components/home-div"
import Img from 'gatsby-image';

import info from "../data/info.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const IndexPage = ({ data }) => {
  const faqData = data.allMarkdownRemark.edges[0].node.frontmatter.faq;
  const [width, setWidth] = useState(1);
  console.log("data: ", data)
  useEffect(() => 
  {
    setWidth(window.innerWidth);
  });

  return (
    <Layout>
      <SEO title="Wakeboard Lessons Austin Texas" keywords={[`wakeboard`, `lessons`, `austin`, `texas`, `lake`, `travis`, `limitless`, `wake`, `chandler`, `crouch`]} />

      {/* Cover Video, Commented Out When Under Maintenance */}
      {/* <div className="overlay">
        <div className="video">
          <video id="myVid" autoPlay muted loop poster>
            <source src={clip} type="video/mp4" />
            Your browser does not support HTML5 video.
                  </video>
        </div>
      </div> */}

      {/* Background Image One */}
      <div id="backgroundOne"></div>

      {/* Cover Title and Description*/}
      <div className="cover-items" style={{ maxWidth: 960, textAlign: `center`, margin: `20px auto` }}>
        <h1 className="cover-title">Learn<br />To<br />Ride</h1>
        <p className="cover-text">Wakeboard and Wakesuft lessons by Chandler Crouch in Austin, Texas.</p>
      </div>

      {/* Lesson Booking Button */}
      <Link to="/contact">
        <Button color="primary" size="lg" style={{ width: `55%`, margin: `0 auto`, zIndex: `1`, top: `10px` }} block id="cover-button">Book A Lesson</Button>
      </Link>

      <div style={{width:`100%`, background:`white`}}>
      <Container>
        <div style={{ marginTop: `300px` }}>
            <h4 style={{fontWeight:`bold`, padding:`50px 0 20px`, textAlign: `center`}}>Limitless Wake</h4>
            <p style={{maxWidth:`650px`, margin:`30px auto`, textAlign:`center`, textIndent:`0px`}}>Limitless Wake Technologies LLC is dedicated to providing you with the information and training you need to reach your wakeboard/surf goals. Founded by life-long wake enthusiast and Collegiate Champion Chandler Crouch, you know you'll be in good hands when working with Limitless Wake.</p>
            <Row style={{background:`white`}}>
                <Col xs="12">
                    <h5 style={{textAlign:`center`}}>{info[1].title}</h5>
                </Col>
                {info[1].data.map((item) => {
                    return (
                        <Col xs="12" md="4">
                            <p style={{textAlign:`center`, fontWeight:`bold`}}>{item.title}</p>
                            <p className="home-div-item" style={{ textAlign: `center`, textIndent:`0`}}>{item.info}</p>                         
                        </Col>
                    )
                })} 
                <Button color="info" style={{margin:`10px auto 70px`}}>Learn More</Button>
            </Row>

            <Row style={{background:`white`}}>
                <Col xs="12">
                    <h1 style={{textAlign:`center`, fontWeight:`bold`}}>How It Works</h1>
                </Col>
                <Col xs="12" md="4">
                    <Img fluid={data.paperPencil.childImageSharp.fluid} style={{maxWidth:'70px', margin:`0 auto`}}/>
                    <h4 style={{textAlign:`center`}}>1. Fill Out the Evaluation Form</h4>
                    <p className="home-div-item" style={{ textAlign: `center`, textIndent:`0`}}>Tell us a little about yourself as well as your preferred lesson day, time, and location.</p>                         
                </Col>
                <Col xs="12" md="4">
                    <Img fluid={data.paperPencil.childImageSharp.fluid} style={{maxWidth:'70px', margin:`0 auto`}}/>
                    <h4 style={{textAlign:`center`}}>2. Lesson Confirmation</h4>
                    <p className="home-div-item" style={{ textAlign: `center`, textIndent:`0`}}>After filling out the evaluation, we'll get in contact with you through phone or email to confirm your lesson.</p>                         
                </Col>
                <Col xs="12" md="4">
                    <Img fluid={data.paperPencil.childImageSharp.fluid} style={{maxWidth:'70px', margin:`0 auto`}}/>
                    <h4 style={{textAlign:`center`}}>3. We Come To You</h4>
                    <p className="home-div-item" style={{ textAlign: `center`, textIndent:`0`}}>We'll meet you any where in the Austin, Texas area. If you don't have a boat check out our rental affiliates page for popular rental locations.</p>                         
                </Col>
            </Row>
        </div>

        <div style={{ paddingBottom: `50px` }}>
        </div>
      </Container>
      </div>

      <Container>
        <div style={{ marginTop: `300px` }}>
            <HomeDiv info={info[0]} image={data.paperPencil}/>
        </div>

        <div style={{ paddingBottom: `50px` }}>
          <HomeDiv info={info[1]} image={data.paperPencil}/>
        </div>
      </Container>

      <div id="google-maps" className="google-maps" name="google-maps">
        <iframe title="lesson locations map" frameborder="100" scrolling="no" src="https://www.google.com/maps/d/embed?mid=1JJfYAg2K--y6U6e0bfiHRSPSH_x6yHg9&hl=en" width="100%" height="360px" className="map-iframe"></iframe>
      </div>

      {/* FAQ Container */}
      <Container background="#f6f6f6">
        <h2>Frequently Asked Questions</h2>
        <div style={{ boxShadow: `0 -1px 4px #343a40`, margin: `40px auto 60px` }}>
          {faqData.map((faq) => {
            return (
              <Collapsible
                button={faq.question}
                content={faq.answer}
              />
            )
          })}
        </div>

          <Link style={{ display: (width < 700 ? `block` : `none`)}} to="/contact">
            <Button color="primary" size="lg" style={{ width: `80%`, margin: `0 auto` }} block >Book A Lesson</Button>
          </Link>

      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark (filter: { frontmatter: {templateKey: {regex: "/faq/"}}}) {
    edges {
      node {
        id
        frontmatter {
          faq {
            question
            answer
          }
        }
      }
    }
  }
  paperPencil: file(relativePath: { eq: "paper.png" }) {
    childImageSharp {
      fluid(maxWidth: 800, quality: 40) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`