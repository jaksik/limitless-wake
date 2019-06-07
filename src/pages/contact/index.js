import React from "react"
import Layout from "../components/layout"
import Form from "../components/contact-form"
import SEO from "../components/seo"

import { Button } from 'reactstrap';
import waiver from "../data/waiver.pdf"

const Contact = () => (
  <Layout>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `960px`,
        paddingTop: 0,
      }}
    >
      <SEO title="Contact" keywords={[`wakeboard`, `lessons`, `austin`, `texas`, `limitless`, `wake`, `lake`, `travis`, `surf`]} />
      <h1 style={{ margin: `30px 0`, textAlign: `center` }}>Book A Lesson</h1>

      <div className="" id="form" style={{ margin: `0 auto` }}>
        <Form />
      </div>
      <br />
      <a href={waiver} download>
        <Button color="primary" size="lg" style={{ width: `55%`, margin: `5px auto`, zIndex: `1` }} block id="cover-button">Download The Waiver</Button>
      </a>
      <div style={{ textAlign: `center` }}>
        <h5>Have Questions?</h5>
        <p>Always feel free to give us a call or send us an email.</p>
        <p><strong>Phone: </strong> 512-270-1735</p>
        <p><strong>Email:</strong> limitlesswaketech@gmail.com</p>
      </div>
    </div>
  </Layout>
)



export default Contact
