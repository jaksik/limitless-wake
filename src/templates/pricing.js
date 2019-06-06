import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import Button from "../components/button"
import SEO from "../components/seo"
import "../pages/style.css"

export default ({ data }) => {

  return (
    <Layout footer="fixed">
      <Container>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <SEO title="Pricing" keywords={[`wake`, `lessons`, `price`, `austin`, `texas`]} />
        <div style={{ marginTop: `20px`, textAlign: `center`}}>
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
  }
`