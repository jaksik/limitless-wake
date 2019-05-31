import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"

export default ({ data }) => {

  return (
    <Layout>
      <Section>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        {data.markdownRemark.html}
      </Section>
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