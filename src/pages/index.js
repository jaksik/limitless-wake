import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./style.css"

const IndexPage = () => (
  <>
  <Layout>
    <SEO title="Home" />
    <div
      id="backgroundOne"
      className="background">
      <h1 style={{ color: `white`, fontSize: `7rem`, margin: `0px` }}>Learn<br />To<br />Ride</h1>
      <p id="subHeading" style={{ fontSize: `1.5rem`, textAlign: `center` }}>Wakeboard and Wakesurf lessons by<br />Chandler Crouch in Austin, Texas</p>
      <button style={{ margin: `0 auto`}}>Book A Lesson</button>
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
  </>
)

export default IndexPage
