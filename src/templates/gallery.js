import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image";
import Section from "../components/section"


export default ({ data }) => {

  return (
    <Layout>
      <Section>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        {/* map through gallery images*/}
        {photoData.map(photo => {
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
                                </Col>
                            )
                        })}
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