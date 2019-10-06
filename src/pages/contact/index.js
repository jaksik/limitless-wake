import React from "react"
import { Button } from 'reactstrap';
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import waiver from "../../data/waiver.pdf"
import "../../components/style.css"

const Contact = () => (
  <Layout>

    <SEO title="Book A Lesson" keywords={[`wakeboard`, `lessons`, `austin`, `texas`, `lake`, `travis`, `limitless`, `wake`, `chandler`, `crouch`]} />
    
    <h1 style={{ margin: `50px 0`, textAlign: `center`, padding: `0` }}>Book A Lesson</h1>

    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      style={{ width: `80%`, margin: `0 auto`}}
    >
      <input type="hidden" name="bot-field" />

      <input type="hidden" name="form-name" value="contact" />

      <input style={{display: `none`}} type="text" /><br />

      <input required className="form-input" name="name" placeholder="First and Last Name*" type="text" /><br />

      <input required className="form-input" name="email" placeholder="Email*" type="email" /><br />

      <input className="form-input" name="phone" placeholder="Phone Number" type="number" /><br />

      <select className="form-input" required name="prefered-lake">
        <option disabled>Prefered lake for lesson</option>
        <option value="Lake-Austin">Lake Austin</option>
        <option value="Lake-Travis">Lake Travis</option>
        <option value="Lake-LBJ">Lake LBJ</option>
        <option value="Canyon-Lake">Canyon Lake</option>
      </select><br />

      <select className="form-input" required name="boat">
        <option disabled>Boat for lesson</option>
        <option value="Private-Owner">Private Owner</option>
        <option value="Boat-Club">Boat Club</option>
        <option value="Boar-Rental">Boat Rental</option>
      </select><br />
     
      <select className="form-input" required name="experience-level">
        <option disabled>Your experience level</option>
        <option value="Never stood up">Have never successfully stood up</option>
        <option value="Can stand up, little maneuvering">Can stand up, little or basic maneuvering</option>
        <option value="Ready for advanced">Comfortable manurvering, ready for advanced practice</option>
      </select>

      <input type="date"
        placeholder="Preffered day:"
        className="form-input"
        name="meeting-time"
        min="2019-01-03T00:00"
        max="2020-31-31T00:00"/>
      <br />
      <br/>

      <textarea className="form-input" name="message" placeholder="  Anything else we should know before your lesson?" type="textarea" /><br />

      <button className="submit-button">Send It!</button>

    </form>

    <br />
   
        <a style={{ textDecoration: `none` }} href={waiver} download>
          <Button color="info" size="lg" style={{ margin: `25px auto`, minWidth: `25%`, maxWidth: `80%` }} block outline id="waiver-button">Download The Waiver</Button>
        </a>
      
    <div style={{ textAlign: `center`, margin: `100px auto` }}>

      <h5>Have Questions?</h5>

      <p>Always feel free to give us a call or send us an email.</p>

      <p><strong>Phone: </strong> 512-270-1735</p>

      <p><strong>Email:</strong> limitlesswaketech@gmail.com</p>

    </div>

  </Layout>
)



export default Contact
