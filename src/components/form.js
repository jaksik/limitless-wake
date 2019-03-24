import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        style={{ width: `80%`, margin: `10px auto`}}
      >
        <input name="name" placeholder="Your First and Last Name" type="text" /><br/>
        <input name="email" placeholder="Your Email" type="email" /><br/>
        <input name="email" placeholder="Your Phone Number" type="email" /><br/>
        <input name="message" placeholder="Your Message" type="textarea" /><br/>
        <button>Submit</button>
      </form>
    )
  }
}

export default Form