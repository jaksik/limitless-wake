import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image';
import Layout from "../components/layout"
import {Container, Row} from "reactstrap"
import SEO from "../components/seo"
import "../pages/style.css"

export default ({ data }) => {
  const info = data.markdownRemark
  console.log("info: ", data.markdownRemark.frontmatter.tags);

  return (
    <Layout>
      <SEO title="About Limitless Wake" keywords={info.frontmatter.tags} />
      {/* About Page Photo */}
        {/* <div style={{ maxWidth: `50%`, margin: `25px auto` }}>
          <Img fluid={info.frontmatter.image.childImageSharp.fluid} />
        </div> */}

        {/* About Page Title */}
       <div style={{ margin: `50px`}}>
       <h1>{info.frontmatter.title}</h1>
        <h5>{info.frontmatter.description}</h5>
       </div>
      
      <Container>
          <div dangerouslySetInnerHTML={{ __html: info.html }} />
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
        description
        tags
      }
    }
  }
`