import React from "react"
import Layout from "../components/layout"
import DivOne from "../components/divOne"
import DivTwo from "../components/divTwo"
import Button from "../components/button"
import SEO from "../components/seo"
import FaqContainer from "../components/faqContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      id="backgroundOne"
      className="background">
      <h1 style={{ color: `white`, fontSize: `7rem`, margin: `0px` }}>Learn<br />To<br />Ride</h1>
      <p style={{ color: `white`, fontSize: `1rem` }}>Wakeboard and Wakesurf lessons by<br />Chandler Crouch in Austin, Texas</p>
      <Button />
    </div>
    <DivOne />
    <div
      id="backgroundTwo"
      className="background">
      <h1 id="backTwoHeading" style={{ color: `white`, fontSize: `5rem`, margin: `0px auto` }}>Learn<br />On Your Boat<br />With<br />Your Friends</h1>
    </div>
    <DivTwo />
    <div id="backgroundThree" className="background" style={{ padding: '50px'}}>
      <FaqContainer />
      <Button />
    </div>
  </Layout>
)

export default IndexPage
