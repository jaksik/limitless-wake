/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
// import Logo from "./logo"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
         
        </div>
        <footer style={{ 
                  margin: `0 auto`, 
                  textAlign: `center`,
                  background: `#343a40`,
                  color: `white`,
                }}>
            <a href="/contact" className="facebook social"><i className="fa fa-facebook"></i></a>
            <a href="/contact" className="instagram social"><i className="fa fa-instagram"></i></a>
            <br />
            {/* <Logo /> */}
            © {new Date().getFullYear()}, Limitless Wake Technologies LLC
          <br/>
          <div style={{ fontSize: `10px`}} >
          Web Site Built By
            {` `}
            <a  href="https://connorjaksik.com">Jaksik Web Development</a>
         
          </div>
            </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
