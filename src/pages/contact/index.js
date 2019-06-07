import React from "react"
import Layout from "../../components/layout"
import Form from "../../components/contact-form"
import SEO from "../../components/seo"

import { Button } from 'reactstrap';
import waiver from "../../data/waiver.pdf"

const Contact = () => (
  <Layout>
    <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                style={{ width: `80%`, margin: `10px auto`, borderStyle: `ridge`, borderRadius: `25px`, backgroundColor: `#343a40` }}
            >
                <input style={{ display: `none` }} type="text"/><br/>
                <h4 style={{ color: `white` }}>Lesson Booking Form</h4>
                <label for="name">Name: *</label>
                <input name="name" placeholder="  First and Last Name" type="text" /><br />
                <label for="email">Email: *</label>
                <input name="email" placeholder="  Email" type="email" /><br />
                <label for="phone">Phone: *</label>
                <input name="phone" placeholder="  Phone Number" type="number" /><br />
                <label for="preffered-lake">Select a lake for your lesson:</label><br/>
                <select name="preffered-lake">
                    <option> </option>
                    <option value="Lake-Austin">Lake Austin</option>
                    <option value="Lake-Travis">Lake Travis</option>
                    <option value="Lake-LBJ">Lake LBJ</option>
                    <option value="Canyon-Lake">Canyon Lake</option>
                </select><br/>
                <label for="meeting-time">Preferred lesson day and time:</label>
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
                <label for="message">Additional Notes:</label>
                <textarea name="message" placeholder="  Anything else we should know before your lesson?" type="textarea" /><br />
                <button style={{ margin: `15px auto`, borderRadius: `10px`}}>Submit</button>
            </form>
  </Layout>
)



export default Contact
