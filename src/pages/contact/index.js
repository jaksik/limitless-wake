import React from "react"
import Layout from "../../components/layout"
import Form from "../../components/contact-form"
import SEO from "../../components/seo"

import { Button } from 'reactstrap';
import waiver from "../../data/waiver.pdf"

const Contact = () => (
  <Layout>

      <SEO title="Contact" keywords={[`wakeboard`, `lessons`, `austin`, `texas`, `limitless`, `wake`, `lake`, `travis`, `surf`]} />
      <h1 style={{ margin: `30px 0`, textAlign: `center` }}>Book A Lesson</h1>
      <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                style={{ width: `80%`, margin: `10px auto`, borderStyle: `ridge`, borderRadius: `25px`, backgroundColor: `#343a40` }}
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />  
                    <h4 style={{ color: `white`, textAlign: `center`, paddingBottom: `0px` }}>Lesson Booking Form</h4>
                        <input style={{ display: `none` }} type="text" /><br />
                        <label style={{marginTop: `0px`}} for="name">Name: *</label>
                        <input name="name" placeholder="  First and Last Name" type="text" /><br />
                        <label for="email">Email: *</label>
                        <input name="email" placeholder="  Email" type="email" /><br />
                        <label for="phone">Phone: *</label>
                        <input name="phone" placeholder="  Phone Number" type="number" /><br />
                        <label for="message">Additional Notes:</label>
                        <textarea name="message" placeholder="  Anything else we should know before your lesson?" type="textarea" /><br />
                    {/* Lesson Information */}
                        <label for="preffered-lake">Select a lake for your lesson:</label><br />
                        <select name="preffered-lake">
                            <option> </option>
                            <option value="Lake-Austin">Lake Austin</option>
                            <option value="Lake-Travis">Lake Travis</option>
                            <option value="Lake-LBJ">Lake LBJ</option>
                            <option value="Canyon-Lake">Canyon Lake</option>
                        </select><br />
                        <label for="preffered-lake">What Kind Of Boat Will You Be Using?:</label><br />
                        <select name="boat">
                            <option> </option>
                            <option value="Private-Owner">Private Owner</option>
                            <option value="Boat-Club">Boat Club</option>
                            <option value="Boar-Rental">Boat Rental</option>
                        </select><br />
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
  </Layout>
)



export default Contact
