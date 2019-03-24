import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Pricing" keywords={[`wake`, `lessons`, `price`, `austin`, `texas`]} />
    <h1>Lesson Pricing</h1>
    <p>Wake and Surf Lessons begin at $100 per hour of “In-water” time. Up to 3 riders can use the same hour. For example, 3 riders share the hour of 20 minutes each water time. No gear like boards or life jackets are provided.
Upon request, gear can be provided for a total rate of $175 per hour. Gear includes: wakeboard/wakesurf, rope, life jacket(1). </p> <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
