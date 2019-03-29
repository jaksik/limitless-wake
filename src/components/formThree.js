    
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
        <select name="preffered-lake">
          <option> </option>
          <option value="Austin">Lake Austin</option>
          <option value="Travis">Lake Travis</option>
          <option value="LBJ">Lake LBJ</option>
          <option value="Canyon">Canyon Lake</option>
        </select>
        <input type="datetime-local"
          id="meeting-time"
          name="meeting-time" value=""
          min="2019-01-03T00:00"
          max="2020-31-31T00:00" />
          <br/>
        <input name="message" placeholder="Your Message" type="textarea" /><br />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form