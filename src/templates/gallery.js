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
      <SEO title="Wakeboard Images Lake Travis" keywords={[ `images`, `wakeboard`, `lessons`, `austin`, `texas`, `lake`, `travis`, `limitless`, `wake`, `chandler`, `crouch`]} />
      <Container>
        <h1 className="page-title">{data.markdownRemark.frontmatter.title}</h1>
        {/* Mapping Through the Gallery Images */}
        {/* <Row>
          {data.galleryImages.edges.map(image => (
            <Col xs="12" sm="6" md="4">
              <div style={{ maxWidth: `300px`, maxHeight: `300px`, margin: `10px`, overflow: `hidden` }}>
                <Img
                  key={image.node.childImageSharp.fluid.src}
                  fluid={image.node.childImageSharp.fluid}
                />
              </div>
            </Col>
          ))}
        </Row> */}
      <LightBox images={data.galleryImages.edges}/>
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