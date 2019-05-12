import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image';
import SEO from "../components/seo"


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <SEO title={post.frontmatter.title} description={post.frontmatter.description} keywords={[`gatsby`, `application`, `react`]} />
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div style={{ maxWidth: `50%`, margin: `0 auto`}}>
          <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
          </div>
          <div
            style={{ textAlign: `left`, textIndent: `50px` }}
            dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
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
        description
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`