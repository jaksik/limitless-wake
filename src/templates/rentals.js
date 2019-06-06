import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import { Row, Col } from 'reactstrap'
import "../pages/style.css"

export default ({ data }) => {

  return (
    <Layout footer="fixed">
        <Container>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        {/* map through FAQ list */}
        {data.markdownRemark.frontmatter.affiliate.map((faq) => {
          return (
            <Row>
                <Col sm="10">
                <p><strong>{faq.name},</strong>{faq.url}</p>
                </Col>
                <Col sm="2">
                <img src="https://laketravis.com/listify/wp-content/uploads/2017/02/LOGO-lake-travis-newest.png"/>
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