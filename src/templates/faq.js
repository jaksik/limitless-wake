import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Collapsible from "../components/collapse-item"
import Container from "../components/container"
import "../pages/style.css"

export default ({ data }) => {
  console.log(data.markdownRemark.frontmatter.faq)
  return (
    <Layout>
      <Container>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        {/* map through FAQ list */}
        {data.markdownRemark.frontmatter.faq.map((faq) => {
          return (
            <div style={{textAlign: `center`}}>
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