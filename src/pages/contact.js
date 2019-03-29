import React from "react"
import Form from "../components/formTwo"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `960px`,
        // padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <SEO title="Contact" keywords={[`contact`, `book`, `lesson`, `wake`, `austin`, `texas`, `surf`]} />
     
      <h1>Book A Lesson</h1>
      <h5>3 ways to book a lesson</h5>
      <br/>
      <p><strong>Call: </strong> 512-270-1735</p>
      <p><strong>Email:</strong> limitlesswaketech@gmail.com</p>
      <strong>Or</strong>
      <p>Fill out the evaluation form below and we'll get in contact with you.</p>
      <div className="container" id="form" style={{ maxWidth: `650px`}}>
        <Form />
      </div>
    </div>
  </Layout>
)



export default Contact
