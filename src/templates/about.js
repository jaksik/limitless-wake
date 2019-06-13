import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image';
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import "../pages/style.css"

export default ({ data }) => {
  const info = data.markdownRemark
  console.log("info: ", info)
  return (
    <Layout>
      <SEO title="About Limitless Wake" keywords={[`wakeboard`, `lessons`, `austin`, `texas`, `lake`, `travis`, `limitless`, `wake`, `chandler`, `crouch`]} />
      <Container>

        {/* About Page Title */}
        <h1>{info.frontmatter.title}</h1>

        {/* About Page Photo */}
        <div style={{ maxWidth: `50%`, margin: `25px auto` }}>
          <Img fluid={info.frontmatter.image.childImageSharp.fluid} />
        </div>

        {/* About Page Body Text */}
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
        image {
          childImageSharp {
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`