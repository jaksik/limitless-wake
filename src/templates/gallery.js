import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {

  return (
    <Layout>
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <h3>Description:</h3>
        <h4>Demo link for the code being explained in this post:</h4>
        <h4>GitHub link to library repo of source code for the code discussed in this post:</h4>
        <h4>Youtube video link to video that walks through this post:</h4>
        
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