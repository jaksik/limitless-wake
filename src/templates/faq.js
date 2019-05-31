import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Collapsible from "../components/collapse-item"
import Section from "../components/section"

export default ({ data }) => {
  console.log(data.markdownRemark.frontmatter.faq)
  return (
    <Layout>
      <Section>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        {/* map through FAQ list */}
        {data.markdownRemark.frontmatter.faq.map((faq) => {
          return (
            <div style={{textAlign: `center`}}>
              <Collapsible
              button={faq.question}
              content={faq.answer}
              />
            </div>
          )
        })}

      </Section>
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