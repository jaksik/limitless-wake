import React from "react"
import { graphql, Link } from "gatsby"
import { Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import "../pages/style.css"

export default ({ data }) => {

  return (
    <Layout>
      <SEO title="Wakeboard Boat Rentals" keywords={[`boat`, `rentals`, `wakeboard`, `lessons`, `austin`, `texas`, `lake`, `travis`, `limitless`, `wake`, `chandler`, `crouch`]} />
      <Container>

        {/* Boat Rentals Page Title */}
        <h1>{data.markdownRemark.frontmatter.title}</h1>

        {/* Map Through Rental Location List*/}
        <div style={{ maxWidth: `700px`, margin: `0 auto`}}>
          {data.markdownRemark.frontmatter.affiliate.map((affiliate) => {
            return (
              <div style={{ borderBottom: `1px solid black`, marginBottom: `15px`}}>
                <Row>
                  <Col xs="2" style={{ padding: 0}}>
                    <img style={{ marginBottom: `0px` }} src={affiliate.logourl} />
                  </Col>
                  <Col xs="10">
                    <p><strong>{affiliate.name}, </strong><a href={affiliate.url}>{affiliate.url}</a></p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="2">
                    <p> </p>
                  </Col>
                  <Col xs="10" offset={{ xs: 2 }}>
                    <p>Boats for rent: {affiliate.boats}</p>
                  </Col>
                </Row>
              </div>
            )
          })}
        </div>
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
          boats
          logourl
        }
      }
   }
  }
`