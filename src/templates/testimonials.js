import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import "../pages/style.css"

export default ({ data }) => {
  console.log(data.markdownRemark.frontmatter.faq)
  return (
    <Layout footer="fixed">
      <Container>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        {/* map through FAQ list */}
        {data.markdownRemark.frontmatter.testimonials.map((faq) => {
          return (
            <div style={{textAlign: `center`}}>
              <p>"{faq.quote}"</p>
              <strong>-{faq.author}</strong>
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
        testimonials {
          quote
          author
        }
      }
   }
  }
`