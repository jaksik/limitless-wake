import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Collapsible from "../components/coll"
import Container from "../components/container"
import "../pages/style.css"

export default ({ data }) => {
  return (
    <Layout footer="fixed">
      <Container>

        {/* FAQ Page Title */}
        <h1>{data.markdownRemark.frontmatter.title}</h1>

        {/* Map Through FAQ Entries */}
        <div className="collapse-container">
          {data.markdownRemark.frontmatter.faq.map((faq) => {
            return (
              <Collapsible
                button={faq.question}
                content={faq.answer}
              />
            )
          })}
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title  
        faq {
          question
          answer
        }
      }
   }
  }
`