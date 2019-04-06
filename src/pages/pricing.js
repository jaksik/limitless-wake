import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Pricing" keywords={[`wake`, `lessons`, `price`, `austin`, `texas`]} />
    <h1>Lesson Pricing</h1>
    
      <strong>Lessons Start at $100/hour</strong><br/>
      <strong>Lessons + Gear Start At $175/hour</strong>
      <br/>
      <br/>
      <p>*An hour booked is an hour in the water.</p>
      <p>*We accept paypal, venmo, and cash at the day of your lesson.</p>
      <p>*Hours can be split between up to 3 riders.<br/>For example an hour split between 3 riders will give each rider 20 minutes "in the water" lesson time.</p>
      <p>*Lessons purchased with gear will include wakeboard/wakesurf, rope, and a jacket(1).</p>
  
    <Button/>
  </Layout>
)

export default IndexPage
