import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Pricing" keywords={[`wake`, `lessons`, `price`, `austin`, `texas`]} />
    <h1>Lesson Pricing</h1>
    <br/>
    <br/>
      <strong>Lessons Start at $100/hour</strong><br/>
      <strong>Lessons + Gear Start At $175/hour</strong>
      <br/>
      <br/>
      <p>*An hour booked is an hour in the water</p>
      <p>*Hours can be split between up to 3 riders.<br/>For example an hour split between 3 riders will give<br/> each rider 20 minutes "in the water" lesson time.</p>
      <p>*Lessons purchased with gear will include wakeboard/wakesurf, rope, and a jacket(1)</p>

    <div style={{ marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button/>
  </Layout>
)

export default IndexPage
