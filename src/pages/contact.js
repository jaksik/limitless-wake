import React from "react"
import Layout from "../components/layout"
import Form from "../components/contact-form"
import SEO from "../components/seo"

import { Button, Row, Col } from 'reactstrap';
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
        {/* <Form /> */}
      </div>
      <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                style={{ width: `80%`, margin: `10px auto`, borderStyle: `ridge`, borderRadius: `25px`, backgroundColor: `#343a40` }}
            >
                {/* Personal Info */}
               
                        <input style={{ display: `none` }} type="text" /><br />
                        <label style={{marginTop: `0px`}} for="name">Name: *</label>
                        <input name="name" placeholder="  First and Last Name" type="text" /><br />
                   
                    <button style={{ margin: `15px auto`, borderRadius: `10px` }}>Submit</button>
            </form>
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
