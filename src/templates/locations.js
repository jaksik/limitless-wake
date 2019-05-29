import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {

  return (
    <Layout>
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        {data.markdownRemark.frontmatter.locations.map((faq) => {
          return (
            <div style={{textAlign: `center`}}>
              <strong>{faq.location}</strong>
            </div>
          )
        })}
        <iframe title="lesson locations map" style={{ maxWidth: `100%`, maxHeight: `60%` }} src="https://www.google.com/maps/d/embed?mid=1JJfYAg2K--y6U6e0bfiHRSPSH_x6yHg9&hl=en" width="640" height="480"></iframe>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        locations {
          location
        }    
      }
   }
  }
`