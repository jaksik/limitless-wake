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
    <DivTwo />
    {/* <h2>Lets Get In Contact</h2> */}
    {/* <div style={{ height: `400px`, backgroundColor: `white`}}>
      <Form style={{ marginTop: `100px` }} />
    </div> */}
    <Button/>
  </Layout>
)

export default IndexPage
