import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image';
import Image from "../components/image"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import "../pages/style.css"

export default ({ data }) => {
  // const thumbnail =
  // data.markdownRemark.frontmatter.image &&
  // data.markdownRemark.frontmatter.image.childImageSharp.resize.src

  return (
    <Layout>
        <SEO keywords={[`gatsby`, `application`, `react`]} />
      <Container>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div style={{ maxWidth: `50%`, margin: `0 auto`}}>
        {/* {thumbnail && <Img fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid} />} */}
        <Image/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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