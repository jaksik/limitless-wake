import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Your Name" type="text" /><br/>
        <input name="email" placeholder="Your Email" type="email" /><br/>
        <input name="message" placeholder="Your Message" type="textarea" /><br/>
        <button>Book A Lesson</button>
      </form>
    )
  }
}

export default Form