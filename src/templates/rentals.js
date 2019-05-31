import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../pages/style.css"

export default ({ data }) => {

  return (
    <Layout>
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        {/* map through FAQ list */}
        {data.markdownRemark.frontmatter.affiliate.map((faq) => {
          return (
            <div style={{textAlign: `center`}}>
              <p><strong>{faq.name},</strong>{faq.url}</p>
              
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        affiliate {
          name
          url
        }
      }
   }
  }
`