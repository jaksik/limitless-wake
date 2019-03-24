import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "./button"

const BackgroundSection = ({ className, height }) => (
    console.log("Classname", className, height),
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "cover-img.jpg" }) {
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
       const imageData = data.desktop.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
                           backgroundColor={`#040e18`}
                           position={`fixed`}
                        //    style={{height: `850px`}}
          >
            <h1 style={{ color:`white`, fontSize:`7rem`}}>Learn To Ride</h1>
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