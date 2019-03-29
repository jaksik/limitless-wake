import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import Image from "../components/image-chandler"
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
    <SEO title="Abput" keywords={[`about`, `limitless`, `wake`, `lessons`, `austin`, `texas`]} />
    <h1>Frequently Asked Questions</h1>
    
      <div className="container">
    <strong>Q: “Does Limitless provide a boat?”</strong><br/>
    <p>A: No, only lessons. But we can help you book a boat rental and lesson package through our affiliates.</p>
    <strong>Q: “How long is a lesson?”</strong><br/>
    <p>Lessons are 1 hour minimum of in water time. There is no saving 20 minutes. You pay for the hour. We suggest filling the hour with up to 3 different riders as most folks do begin to get tired after 20 minutes of wakesurfing or wakeboarding.</p>
    <strong>Q: “Why should we use limitless for our next lake day?”</strong><br/>
    <p>If you are new to watersports, proper instruction can make or break the experience. With Limitless, we are determined that anyone can learn to ride and we will prove it.</p>
    <strong>Q: “Are there rainchecks?”</strong><br/>
    <p>Limitless will provide a voucher for your lesson if you are unable to complete it due to weather circumstances.</p>
    <strong>Q: “What if I have to cancel my lesson?”</strong><br/>
    <p>The cancelation policy is as follows: cancelation notice 24 hours or more before your lesson receives a 100% refund. Less than 24 hour cancelation notice receives 85% refund.</p>
    <strong>Q:  “Will limitless captain our boat?”</strong><br/>
    <p>Lessons with Limitless is a per hour basis. Afterwards, if you wish to have your captain your boat while you enjoy the lake that rate is an additional $55.00 per hour.</p>
    </div>
    </div>
    <Button/>
  </Layout>
)

export default IndexPage
