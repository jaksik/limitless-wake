import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {Container} from "reactstrap"
import SEO from "../components/seo"
import "../pages/style.css"

export default ({ data }) => {
  console.log(data.markdownRemark.frontmatter.faq)
  return (
    <Layout>
      <SEO title="Limitless Wake Testimonials" keywords={[`wakeboard`, `lessons`, `austin`, `texas`, `lake`, `travis`, `limitless`, `wake`, `chandler`, `crouch`, `testimonials`]} />
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <Container>
        {data.markdownRemark.frontmatter.testimonials.map((faq) => {
          return (
            <div style={{margin:`30px auto`}}>
              <p style={{textAlign: `center`}}>"{faq.quote}"</p>
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