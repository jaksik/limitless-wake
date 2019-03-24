import React from "react"

import Layout from "../components/layout"
import Background from "../components/background"
import BackgroundTwo from "../components/backgroundTwo"
import DivOne from "../components/divOne"
import Form from "../components/form"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Background 
    className="backgroundImage"
    height="300px"
    />
    <DivOne />
    <BackgroundTwo />
    <DivOne />
    <div style={{ height: `400px`, backgroundColor: `royalblue`}}>
      <Form style={{ margin: `0px auto` }} />
    </div>
  </Layout>
)

export default IndexPage
