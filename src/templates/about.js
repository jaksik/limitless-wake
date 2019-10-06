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

  useEffect(() => 
  {
    setWidth(window.innerWidth);
  });
  return (
    <Layout>
      <SEO title="About Limitless Wake" keywords={[`wakeboard`, `lessons`, `austin`, `texas`, `lake`, `travis`, `limitless`, `wake`, `chandler`, `crouch`]} />
      <Container>

        {/* About Page Title */}
        <h1 className="page-title">{info.frontmatter.title}</h1>

        {/* About Page Photo */}
        {/* <div style={{ maxWidth: (width < 700 ? `85%` : `50%`), margin: `25px auto` }}>
          <Img fluid={info.frontmatter.image.childImageSharp.fluid} />
        </div> */}

        {/* About Page Body Text */}
        <div style={{ textIndent: `50px`, marginBottom:`150px` }}>
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