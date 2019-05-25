import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {

  return (
    <Layout>
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        {/* map through FAQ list */}
        
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
      }
   }
  }
`