import React from "react"

import Layout from "../components/layout"
import DivOne from "../components/divOne"
import DivTwo from "../components/divTwo"
import Button from "../components/button"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      id="backgroundOne"
      className="background">
      <h1 style={{ color: `white`, fontSize: `7rem`, margin: `0px` }}>Learn<br />To<br />Ride</h1>
      <p style={{ color: `white`, fontSize: `1rem` }}>Wake board and wake surf lessons by<br />Chandler Crouch in Austin Texas</p>
      <Button />
    </div>
    <DivOne />
    <div
      id="backgroundTwo"
      className="background">
      <h1 id="backTwoHeading" style={{ color: `white`, fontSize: `5rem`, margin: `0px auto` }}>Learn<br /> On Your Boat<br /> With <br /> Your Friends</h1>
    </div>
    <DivTwo />
    <div id="backgroundThree" className="background">
      <div className="overlay">
        <div className="container" style={{ maxWidth: `700px` }}>
          <h1>FAQ</h1>
          <h5>Q: “Does Limitless provide a boat?”</h5><br />
          <p>No, only lessons. But we can help you book a boat rental and lesson package through our affiliates.</p>
          <br/>
          <h5>Q: “How long is a lesson?”</h5><br />
          <p>Lessons are 1 hour minimum of in water time. There is no saving 20 minutes. You pay for the hour. We suggest filling the hour with up to 3 different riders as most folks do begin to get tired after 20 minutes of wakesurfing or wakeboarding.</p>
          <br/>
          <h5>Q: “Why should we use limitless for our next lake day?”</h5><br />
          <p>If you are new to watersports, proper instruction can make or break the experience. With Limitless, we are determined that anyone can learn to ride and we will prove it.</p>
          <br/>
          <h5>Q: “Are there rainchecks?”</h5><br />
          <p>Limitless will provide a voucher for your lesson if you are unable to complete it due to weather circumstances.</p>
          <br/>
          <h5>Q: “What if I have to cancel my lesson?”</h5><br />
          <p>The cancelation policy is as follows: cancelation notice 24 hours or more before your lesson receives a 100% refund. Less than 24 hour cancelation notice receives 85% refund.</p>
          <br/>
          <h5>Q:  “Will limitless captain our boat?”</h5><br />
          <p>Lessons with Limitless is a per hour basis. Afterwards, if you wish to have your captain your boat while you enjoy the lake that rate is an additional $55.00 per hour.</p>
        </div>
        <Button/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
