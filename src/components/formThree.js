
import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                style={{ width: `80%`, margin: `10px auto`, borderStyle: `ridge`, borderRadius: `25px` }}
            >
                <h5>Lesson Booking Form</h5>
                <label for="student-name">Your Name:  </label><br/>
                <input name="student-name" placeholder="First and Last Name" type="text"/><br />
                <label for="student-email">Email:  </label><br/>
                <input name="student-email" placeholder="Email" type="email"/><br/>
                <label for="student-phone">Phone Number:  </label>
                <input name="student-phone" placeholder="Phone Number" type="number"/><br/>
                <label for="preffered-lake">Sellect a lake for your lesson:</label>
                <select name="preffered-lake">
                    <option> </option>
                    <option value="Lake-Austin">Lake Austin</option>
                    <option value="Lake-Travis">Lake Travis</option>
                    <option value="Lake-LBJ">Lake LBJ</option>
                    <option value="Canyon-Lake">Canyon Lake</option>
                </select>
                <label for="meeting-time">Preffered lesson day and time:</label>
                <input type="datetime-local"
                    id="meeting-time"
                    name="meeting-time"
                    min="2019-01-03T00:00"
                    max="2020-31-31T00:00" />
                <br />
                <label for="experience-level">Your current experience level:</label>
                <select name="experience-level">
                    <option> </option>
                    <option value="1. never stood up">1. Have never successfully stood up</option>
                    <option value="2. can stand up, little maneuvering">2. Can stand up, little or basic maneuvering</option>
                    <option value="3. ready for advanced">3. Comfortable manurvering, ready for advanced practice</option>
                </select>
                <input name="message" placeholder="Your Message" type="textarea" /><br />
                <button>Submit</button>
            </form>
        )
    }
}

export default Form