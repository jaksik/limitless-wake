import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "./button"

const BackgroundSection = ({ className, height }) => (
        <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "mobile-back-two.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid;
      //  let screenHeight = window.innerHeight * .8;
      //  console.log("screenheigh:", screenHeight)
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
                           backgroundColor={`#040e18`}
                           position={`fixed`}
                           style={{ minHeight: `600px` }}
          >
            <h1 style={{ color:`black`, fontSize:`7rem`}}>Learn To Ride</h1>
            <Button
    />
          </BackgroundImage>
       )
     }
     }
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-repeat: repeat-y;
`

export default StyledBackgroundSection