import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Collapsible from "../components/collapsible"
import Container from "../components/container"
import SEO from "../components/seo"
import "../pages/style.css"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Frequently Asked Questions" keywords={[`wakeboard`, `lessons`, `austin`, `texas`, `lake`, `travis`, `limitless`, `wake`, `chandler`, `crouch`]} />
      <Container>

        {/* FAQ Page Title */}
        <h1>{data.markdownRemark.frontmatter.title}</h1>

        {/* Map Through FAQ Entries */}
        <div className="collapse-container"style={{ boxShadow: `0 -1px 4px #343a40` }}>
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