import React from "react"
import { graphql } from "gatsby"
import { Container } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LightBox from "../components/light-box"
import "../pages/style.css"

export default ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>
      <SEO title="Gallery" keywords={[ `images`, `wakeboard`, `austin`, `texas`, `lake`, `travis`, `limitless`, `wake`, `chandler`, `crouch` ]} />
      <Container>
        <h1 className="page-title">{data.markdownRemark.frontmatter.title}</h1>
        <LightBox images={data.galleryImages.edges} />
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
    galleryImages: allFile(filter: {sourceInstanceName: { eq: "gallery" }}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth:400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`