import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/section"
import Div from "../components/home-div"
import Collapsible from "../components/collapse-item"
import Section from "../components/section"

import Image from "../components/image"
import clip from "../images/limitless.mp4"
import "./style.css"

const IndexPage = ({ data }) => {
  const faqData = data.allMarkdownRemark.edges[0].node.frontmatter.faq;
  return (
    <>
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


        {/* Jumbotron Text and Call to action */}
        <div className="cover-items" style={{ maxWidth: 960, textAlign: `center`, margin: `20px auto` }}>
          <h1 id="cover-title" style={{ color: `white`, fontSize: `7rem`, textAlign: `center` }}>Learn To Ride</h1>
          <p id="cover-text">Wakeboard and Wakesuft lessons by Chandler Crouch in Austin, Texas.</p>
        </div>

       <button id="cover-button" className="contact-button">Book A Lesson</button>


        {/* Home Page Content */}
        <div style={{ marginTop: `800px` }}>
          <Content>
            {/* How It Works*/}
            <Div />

            {/* A Few Featured Images             */}
          
            {/* Testimonials Preview // Provide Credibility, Provide link to full page*/}
            <h2>Testimonials</h2>
            <div style={{ textAlign: `center` }}>
              <p>This was the best day of my life</p>
              <strong>- Connor Jaksik</strong>
            </div>

            {/* FAQ preview and link to full faq page */}
            <h2>Frequently Asked Questions</h2>
            <Section>
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

            </Section>
            {/* Declare Authority in this industry */}
            <Div/>

          </Content>
        </div>

      </Layout>
    </>
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