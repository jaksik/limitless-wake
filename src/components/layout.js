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
            margin: `0 auto 100px`,
            paddingTop: 0,
            minHeight: `80vh`,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer blogPosts={data.allMarkdownRemark.edges}/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
