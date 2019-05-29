import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"
import image from "../../static/img/air.jpg"
import Pic from "../components/image"
import clip from "../images/limitless.mp4"
import "./style.css"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />

      {/* // cover video */}

      <div className="overlay">
        <div className="video">
          <video id="myVid" autoPlay muted loop poster={image}>
            <source src={clip} type="video/mp4" />
            Your browser does not support HTML5 video.
                </video>
        </div>
      </div>


      <div className="cover-text" style={{ maxWidth: 960, margin: `auto`, textAlign: `center` }}>
            <h1 style={{ color: `white`, fontSize: `7rem` }}>Learn To Ride</h1>
              <button className="contact-button">Book A Lesson</button>
      </div>


      <Content>
        <p>This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                 This is filler text. This is filler text. This is filler text.
        </p>
        <Pic/>
        <p>This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text.
        </p>

        <p>This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text. This is filler text.
                   This is filler text. This is filler text. This is filler text.
        </p>
      </Content>

    </Layout>
  </>
)

export default IndexPage
