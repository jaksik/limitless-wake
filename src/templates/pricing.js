import React from "react"
import { graphql } from "gatsby"
import { Container } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../pages/style.css"
import "./style.css"

export default ({ data }) => {

  return (
    <Layout>
      <SEO title="Wakeboard Lesson Rates" keywords={[ `rates`, `wakeboard`, `lessons`, `austin`, `texas`, `lake`, `travis`, `limitless`, `wake`, `chandler`, `crouch`]} />
      <Container>
        <h1 className="page-title">{data.markdownRemark.frontmatter.title}</h1>

        <div style={{ marginTop: `20px`, textAlign: `center` }}>
          <strong>Lessons Start at $100/hour</strong><br />
          <strong>Lessons + Gear Start At $175/hour</strong>
          <br />
          <p style={{ marginTop: `20px` }}>
            3 riders? We suggest 1-2 hours<br />
            4 riders? We suggest 2-3 hours<br />
            4+ riders?” We suggest 3+ hours
          </p>
        </div>
        <br />
        <div style={{ textAlign: `left`, maxWidth: `960px`, padding: `20px`, margin: `0 auto` }}>
          <p>*An hour booked is an hour in the water.</p>
          <p>*We accept paypal, venmo, and cash at the day of your lesson.</p>
          <p>*Hours can be sppt between up to 3 riders. For example an hour sppt between 3 riders will give each rider 20 minutes "in the water" lesson time.</p>
          <p>*Lessons purchased with gear will include wakeboard/wakesurf, rope, and a jacket (1).</p>
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
      }
    }
    airImage: file(relativePath: { eq: "air.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`