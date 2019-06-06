import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Collapsible from "../components/coll"

import Image from "../components/image"
import HomeDiv from "../components/home-div"
import clip from "../images/limitless.mp4"
import info from "../data/info.json"
import { Button } from 'reactstrap';
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const IndexPage = ({ data }) => {
  const faqData = data.allMarkdownRemark.edges[0].node.frontmatter.faq;

  return (
    <Layout>
      <SEO title="Home" />

      {/* cover video */}
      <div className="overlay">
        <div className="video">
          <video id="myVid" autoPlay muted loop poster>
            <source src={clip} type="video/mp4" />
            Your browser does not support HTML5 video.
                  </video>
        </div>
      </div>


      {/* cover image for mobile devices */}
      <div id="mobile-cover-img"></div>

      {/* JumboTron Container */}
      {/* Jumbotron Text*/}
      <div className="cover-items" style={{ maxWidth: 960, textAlign: `center`, margin: `20px auto` }}>
        <h1 id="cover-title" style={{ color: `white`, fontSize: `7rem`, textAlign: `center` }}>Learn<br />To<br />Ride</h1>
        <p id="cover-text">Wakeboard and Wakesuft lessons by Chandler Crouch in Austin, Texas.</p>
      </div>

      {/* Lesson Booking Button */}
      <Link to="/contact">
        <Button color="primary" size="lg" style={{ width: `55%`, margin: `5px auto`, zIndex: `1` }} block id="cover-button">Book A Lesson</Button>
      </Link>

      {/* Home Page Container */}
      <div style={{ marginTop: `300px` }}>
        <Container background="#343a40">
          {/* How It Works*/}
          <HomeDiv info={info[0]} />
        </Container>
      </div>

      {/* A Few Featured Images*/}
      <div
        id="backgroundTwo"
        className="background">
        <h1 id="backTwoHeading" style={{ color: `white`, fontSize: `5rem`, margin: `0px auto` }}>Learn<br />On Your Boat<br />With<br />Your Friends</h1>
      </div>

      <Container background="#343a40">
        {/* Declare Authority in this industry */}
        <HomeDiv info={info[1]} />
      </Container>

      <div
        id="backgroundTwo"
        className="background">
      </div>

      <Container background="#f6f6f6">
          {/* FAQ preview and link to full faq page */}
        <h2>Frequently Asked Questions</h2>
        {faqData.map((faq) => {
          return (
            <div>
              <Collapsible
                button={faq.question}
                content={faq.answer}
              />
            </div>
          )
        })}
       </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark (filter: {
    frontmatter: {
      templateKey: {regex: "/faq/"}
    }
  }) {
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
}
`