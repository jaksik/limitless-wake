import React from "react"
import { Link } from "gatsby"
import Form from "../components/form"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Contact = () => (
  <Layout id="contactPage">
    <SEO title="Contact" keywords={[`contact`, `book`, `lesson`, `wake`, `austin`, `texas`, `surf`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>Book A Lesson</h1>
    <h5>Lesson Times:</h5>
    <ul>
        <li></li>
    </ul>
    <p></p>
    <p>Now go build something great.</p>
    <Form/>
  </Layout>
)

export default Contact
