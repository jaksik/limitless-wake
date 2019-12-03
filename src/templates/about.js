import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Container } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../pages/style.css"
import "./style.css"

export default ({ data }) => {
  const info = data.markdownRemark
  const [width, setWidth] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  });
  return (
    <Layout>
      <SEO title="About" keywords={[ `about`, `limitless`, `wake`, `chandler`, `crouch`]} />
      <Container>

        <h1 className="page-title">{info.frontmatter.title}</h1>

        <div style={{ textIndent: `50px`, marginBottom: `150px` }}>
          <div dangerouslySetInnerHTML={{ __html: info.html }} />
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title  
      }
    }
  }
`