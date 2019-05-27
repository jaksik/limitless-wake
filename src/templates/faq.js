import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data.markdownRemark.frontmatter.faq)
  return (
    <Layout>
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        {/* map through FAQ list */}
        {data.markdownRemark.frontmatter.faq.map((faq) => {
          return (
            <div style={{textAlign: `center`}}>
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </div>
          )
        })}

      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title  
        faq {
          question
          answer
        }
      }
   }
  }
`