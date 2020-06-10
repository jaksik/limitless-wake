import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../pages/style.css"
import "./style.css"

export default ({ data }) => {

  return (
    <Layout>
      <SEO title="Boat Rentals" keywords={[`boat`, `rentals`, `wakeboard`, `austin`, `texas`, `lake`, `travis`]} />
      <Container>
        <h1 className="page-title">{data.markdownRemark.frontmatter.title}</h1>

        <div style={{ maxWidth: `700px`, margin: `0 auto` }}>

          <h3 style={{textAlign: `center`}}>We now charter for Water sports! </h3>
          <h5 style={{textAlign: `center`}}>Contact us for times and availability</h5>
          <br/>
          <br/>
          <h5>We Provide:</h5>
          <ul>
            <li>24ft ski boat with a full tank of gas</li>
            <li>Space for up to 9 people</li>
            <li>Life jackets and floats</li>
            <li>Wakesurf and Wakeboard gear</li>
            <li>A professional coach and driver</li>
          </ul>
          <h5>Your Can Expect To:</h5>
          <ul>
            <li>Get picked up at Safe Harbor <a href="https://www.google.com/maps/place/Safe+Harbor+Emerald+Point/@30.4326159,-97.9515691,15z/data=!4m5!3m4!1s0x865b306692189b83:0x25ee620c4ea23919!8m2!3d30.4325977!4d-97.9428357" target="_blank" rel="noopener noreferrer">Emerald Point</a> Marina (behind Just For Fun)</li>
            <li>Spend 4+ hours playing on the water</li>
            <li>Visit attractions like Hippie Hallow and Devils Cove</li>
            <li>Practice water sports with one-on-one coaching</li>
            <li>Grab food at lakeside restaurants</li>
          </ul>
          <h5>Our Prices:</h5>
          <ul>
            <li>Monday - Friday: $225/hour</li>
            <li>Saturday/Sunday: $275/hour</li>
            <li>Minimum: 4 hours</li>
          </ul>
          <p>*We require a 15% down payment to reserve your charter. See our <Link to="/resources/faq">FAQ page</Link> for cancellation and rain check policies.</p>
          
          
          {/* {data.markdownRemark.frontmatter.affiliate.map((affiliate) => {
            return (
              <div style={{ borderBottom: `1px solid black`, marginBottom: `15px` }}>
                <Row>
                  <Col xs="2" className="offset-2 p-0">
                    <img style={{ marginBottom: `0px` }} className="ml-3" src={affiliate.logourl} alt="Boat rental company logo" />
                  </Col>
                  <Col xs="10" className="offset-2">
                    <p><strong>{affiliate.name}, </strong><a href={affiliate.url} target="_blank" rel="noopener noreferrer">{affiliate.url}</a></p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="2">
                    <p> </p>
                  </Col>
                  <Col xs="10" offset={{ xs: 2 }}>
                    <p>Boats for rent: <br />
                      {affiliate.boats}</p>
                  </Col>
                </Row>
              </div>
            )
          })} */}
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