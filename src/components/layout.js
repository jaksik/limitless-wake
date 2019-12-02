import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, ...props }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        siteLogo: file(relativePath: { eq: "limitless-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        allMarkdownRemark(filter: { fileAbsolutePath: {regex: "\/blog/"}}) {
          edges {
            node {
              fields {
                  slug
              }
              frontmatter {
                  title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto 50px`,
            paddingTop: 0,
            minHeight: `80vh`,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer blogPosts={data.allMarkdownRemark.edges} logo={data.siteLogo}/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
