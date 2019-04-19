import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import { Container, Row, Col } from 'reactstrap';
import SEO from "../components/seo"

const IndexPage = () => (
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
      <h1>Lesson Locations</h1>
      <Container>
        <Row>
          <Col xs="12" md="4" style={{ margin: `auto`}}>
        <strong>Lake Travis</strong><br/>
        <strong>Lake Austin</strong><br/>
        <strong>Lake LBJ</strong><br/>
        <strong>Canyon Lake</strong><br/>
        <br/>
        <p>**Specific meeting locations are flexible</p>
        <br/>
          </Col>
          <Col xs="12" md="8">
          <iframe title="lesson locations map" style={{ maxWidth: `100%`, maxHeight: `60%` }} src="https://www.google.com/maps/d/embed?mid=1JJfYAg2K--y6U6e0bfiHRSPSH_x6yHg9&hl=en" width="640" height="480"></iframe>

          </Col>
        </Row>
      </Container>
     
    </div>
    <Button />
  </Layout>
)

export default IndexPage
