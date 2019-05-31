import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Button from "../components/button"
import { Container, Row, Col } from 'reactstrap';
import SEO from "../components/seo"
import "../pages/style.css"

export default ({ data }) => {

  return (
    <Layout>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <SEO title="Locations" keywords={[`about`, `strongmitless`, `wake`, `lessons`, `austin`, `texas`]} />

        <Container>
          <Row>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          </Row>
          <Row>
            <Col xs="12" md="4" style={{ margin: `auto` }}>
              {data.markdownRemark.frontmatter.locations.map((faq) => {
                return (
                  <div style={{ textAlign: `center` }}>
                    <strong>{faq.location}</strong>
                  </div>
                )
              })}
            </Col>
            <Col xs="12" md="8">
              <iframe title="lesson locations map" style={{ maxWidth: `100%`, maxHeight: `60%` }} src="https://www.google.com/maps/d/embed?mid=1JJfYAg2K--y6U6e0bfiHRSPSH_x6yHg9&hl=en" width="640" height="480"></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        locations {
          location
        }    
      }
   }
  }
`