import React from "react"

import Layout from "../components/layout"
import Background from "../components/background"
import BackgroundTwo from "../components/backgroundTwo"
import DivOne from "../components/divOne"
import DivTwo from "../components/divTwo"
import Button from "../components/button"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <Background 
    className="backgroundImage"
    height="300px"
    />
    <DivOne />
    <BackgroundTwo />
    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36627.897239373626!2d-97.90143736052029!3d30.438644256096122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b316dde65868d%3A0x56ac6b2ed6b24924!2sHippie+Hollow+Park!5e0!3m2!1sen!2sus!4v1553697541987" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
    <DivTwo />
    <div className="container">
    <h2>FAQ</h2>
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
    <Button/>
  </Layout>
)

export default IndexPage
