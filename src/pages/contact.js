import React from "react"
import Form from "../components/form"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `960px`,
        paddingTop: 0,
      }}
    >
      <SEO title="Contact" keywords={[`contact`, `book`, `lesson`, `limitless`, `wake`, `austin`, `texas`, `surf`]} />
      <h1 style={{ marginBottom:`0px`}}>Book A Lesson</h1>
      <h5 style={{ marginBottom:`40px` }}>with Limitless Wake Tech</h5>
      <div className="" id="form" style={{ maxWidth: `650px`, margin: `0 auto`}}>
        <Form/>
      </div>
      <br/>
      <h5>Have Questions?</h5>
      <p>Always feel free to give us a call or send us an email.</p>
      <p><strong>Phone: </strong> 512-270-1735</p>
      <p><strong>Email:</strong> limitlesswaketech@gmail.com</p>
    </div>
  </Layout>
)



export default Contact
