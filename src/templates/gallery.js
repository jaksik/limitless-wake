import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image";
import Container from "../components/container"
import { Row, Col } from 'reactstrap'

import "../pages/style.css"

export default ({ data }) => {
  console.log(data.markdownRemark.frontmatter.images)
  return (
    <Layout>
      <Container>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        {/* map through gallery images*/}
        {/* {photoData.map(photo => {
                            const image = projectImgs.find(n => {
                                return n.node.relativePath === `photography/${photo.file}`;
                            });
                            const imageSizes = image.node.childImageSharp.sizes;

                            return (
                                <Col xs="12" sm="6" md="4">
                                    <Img
                                        title="photography"
                                        alt="Screenshot of Project"
                                        sizes={imageSizes}
                                        className="card-img_src center-block photography-img"
                                    />
                                    {/* <a href={"../images/photography/" + photo.file} download><button>DownLoad Image</button></a> */}
        {/*modal will go here to enlarge imge*/}
        {/* </Col>
                            )
                        })} */}

        {/* <Row>
          {data.galleryImages.edges.map(image => (
            <Col xs="12" sm="6" md="4">
              <div style={{ maxWidth: `300px`, maxHeight: `300px`, margin: `10px` }}>
                <Img
                  key={image.node.childImageSharp.fluid.src}
                  fluid={image.node.childImageSharp.fluid}
                />
              </div>
            </Col>
          ))}
        </Row> */}
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
        images {
          image
        }   
      }
   }
  }
`