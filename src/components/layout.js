/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Logo from "./logo"
import "./layout.css"
import "./style.css"

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
        <Navbar />
        <div
          style={{
            width: `100%`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer style={{ margin: `15px auto` }}>
            <a href="/contact" className="facebook social"><i className="fa fa-facebook"></i></a>
            <a href="/contact" className="instagram social"><i className="fa fa-instagram"></i></a>
            <br />
            <Logo />
            © {new Date().getFullYear()}, Limitless Wake Technologies LLC
          <br/>
          <div style={{ fontSize: `10px`}} >
          Web Site Built By
            {` `}
            <a  href="https://connorjaksik.com">Jaksik Web Development</a>
         
          </div>
            </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
