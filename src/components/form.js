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
        <label for="exampleEmail">Your Name:</label>
        <input name="name" placeholder="Your First and Last Name" type="text" /><br />
        <label for="exampleEmail">Email:</label>
        <input name="email" placeholder="Your Email" type="email" /><br />
        <label for="phone">Phone Number:</label>
        <input name="phone" placeholder="Your Phone Number" type="number" /><br />
        <label for="exampleSelect">Select a Lake for your Lesson</label>
        <select name="preffered-lake">
          <option> </option>
          <option value="Austin">Lake Austin</option>
          <option value="Travis">Lake Travis</option>
          <option value="LBJ">Lake LBJ</option>
          <option value="Canyon">Canyon Lake</option>
        </select>
        <label for="meeting-time">Preffered lesson day and time:</label>
        <input
          type="datetime-local"
          id="meeting-time"
          name="meeting-time"
        />
        <label for="exampleSelect">Your current experience level:</label>
        <select name="experience-level">
          <option> </option>
          <option value="1. never stood up">1. Have never successfully stood up</option>
          <option value="2. can stand up, little maneuvering">2. Can stand up, little or basic maneuvering</option>
          <option value="3. ready for advanced">3. Comfortable manurvering, ready for advanced practice</option>
        </select>
        <label for="exampleText">Additional Notes</label>
        <input type="textarea" name="text" id="exampleText" placeholder="Any thing else we should know before your lesson?" />
        {/* <label for="meeting-time">Preffered lesson day and time:</label>
        <input type="datetime-local"
          id="meeting-time"
          name="meeting-time" value=""
          min="2019-01-03T00:00"
          max="2020-31-31T00:00" /> */}
        {/* <input name="message" placeholder="Your Message" type="textarea" /><br /> */}
        <button>Submit</button>
      </form>
    )
  }
}

export default Form