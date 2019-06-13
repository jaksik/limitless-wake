import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import "../pages/style.css"

export default ({ data }) => {

  return (
    <Layout footer="fixed">
      <SEO title="Wakeboard Boat Rentals" keywords={[ `boat`, `rentals`, `wakeboard`, `lessons`, `austin`, `texas`, `lake`, `travis`, `limitless`, `wake`, `chandler`, `crouch`]} />
      <Container>

        {/* Boat Rentals Page Title */}
        <h1>{data.markdownRemark.frontmatter.title}</h1>

        {/* Map Through Rental Location List*/}
        {data.markdownRemark.frontmatter.affiliate.map((faq) => {
          return (
            <Row>
              <Col sm="10">
                <p><strong>{faq.name},</strong>{faq.url}</p>
              </Col>
              <Col sm="2">
                <img src="https://laketravis.com/listify/wp-content/uploads/2017/02/LOGO-lake-travis-newest.png" />
              </Col>
              <Col sm="12">
                <p>Boats for rent:{faq.boats}</p>
              </Col>
            </Row>
          )
        })}
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
        affiliate {
          name
          url
        }
      }
   }
  }
`