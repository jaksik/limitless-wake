import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "./button"

const BackgroundSection = ({ className, height }) => (
        <StaticQuery query={graphql`
        query {
          desktop: file(relativePath: { eq: "cover-img.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    `}
     render={data => {
       // Set ImageData.
      //  let screenHeight = window.innerHeight * .8;
      //  console.log("screenheigh:", screenHeight)
       return (
          <BackgroundImage 
            fluid={data.desktop.childImageSharp.fluid}                                  
          >
            <h1 style={{ color:`white`, fontSize:`7rem`}}>Learn<br/>To<br/>Ride</h1>
            <p style={{ color: `white`, fontSize: `1.5rem`}}>Wake board and wake surf lessons by Chandler Crouch in Austin Texas</p>
            <br/>
            <br/>
            <Button/>
          </BackgroundImage>
       )
     }
     }
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-repeat: repeat-y;
  background-position: center; 

`

export default StyledBackgroundSection