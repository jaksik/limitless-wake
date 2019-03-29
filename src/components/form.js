import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        style={{ width: `80%`, margin: `10px auto` }}
      >
        <input name="name" placeholder="Your First and Last Name" type="text" /><br />
        <input name="email" placeholder="Your Email" type="email" /><br />
        <input name="phone" placeholder="Your Phone Number" type="number" /><br />

        <label for="meeting-time">Preffered lesson day and time:</label>

        <input type="datetime-local"
          id="meeting-time"
          name="meeting-time" value=""
          min="2019-01-03T00:00"
          max="2020-31-31T00:00" />

        

        <input name="message" placeholder="Your Message" type="textarea" /><br />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form