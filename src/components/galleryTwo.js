import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'reactstrap'
import Img from 'gatsby-image'

const Gallery = () => (
    <StaticQuery
        query={graphql`
      query {
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
    `}
        render={data => (
            <div>
                <Row>
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
                </Row>
            </div>
        )}
    />
);
export default Gallery;