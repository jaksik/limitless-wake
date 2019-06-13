import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import Gallery from "../components/gallery"
import "../pages/style.css"

export default ({ data }) => {
  return (
    <Layout>
      <Container>

        {/* Gallery Page Title */}
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        
        <Gallery/>
       
      </Container>
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