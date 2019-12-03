import React from "react"
import { graphql } from "gatsby"
import { Container } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../pages/style.css"
import "./style.css"

export default ({ data }) => {
  console.log(data.markdownRemark.frontmatter.faq)
  return (
    <Layout>
      <SEO title="Testimonials" keywords={[`limitless`, `wake`, `chandler`, `crouch`, `testimonials`]} />
      <Container>
        <h1 className="page-title">{data.markdownRemark.frontmatter.title}</h1>
        {data.markdownRemark.frontmatter.testimonials.map((faq) => {
          return (
            <div style={{margin:`30px auto`, textIndent:`50px`, maxWidth:`600px`}}>
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