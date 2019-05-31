import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import Image from "../components/image"
import SEO from "../components/seo"
import "../pages/style.css"

export default ({ data }) => {

  return (
    <Layout>
        <SEO keywords={[`gatsby`, `application`, `react`]} />
      <Container>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div style={{ maxWidth: `50%`, margin: `0 auto`}}>
          <Image/>
        </div>
        {data.markdownRemark.html}
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