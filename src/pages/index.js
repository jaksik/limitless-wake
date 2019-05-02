import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import SEO from "../components/seo"
import FaqContainer from "../components/faqContainer"
import PageDiv from "../components/page-div"
import data from "../data/div-info"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      id="backgroundOne"
      className="background">
      <h1 style={{ color: `white`, fontSize: `7rem`, margin: `0px` }}>Learn<br />To<br />Ride</h1>
      <p id="subHeading" style={{ fontSize: `1.5rem` }}>Wakeboard and Wakesurf lessons by<br />Chandler Crouch in Austin, Texas</p>
      <Button />
    </div>
    <PageDiv data={data[0]}/>
    <div
      id="backgroundTwo"
      className="background">
      <h1 id="backTwoHeading" style={{ color: `white`, fontSize: `5rem`, margin: `0px auto` }}>Learn<br />On Your Boat<br />With<br />Your Friends</h1>
    </div>
    <PageDiv data={data[1]}/>
    <div id="backgroundThree" className="background" style={{ padding: '50px'}}>
      <FaqContainer />
      <Button />
    </div>
  </Layout>
)

export default IndexPage
