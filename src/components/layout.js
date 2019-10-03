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
import Footer from "./footer"
import Brand from "../images/limitless-logo.png"
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
      }
    `}
    render={data => (
      <>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
         
        </div>
        {/* <footer style={{ 
                  textAlign: `center`,
                  background: `#343a40`,
                  color: `white`,
                  width: `100%`,
                  padding: `15px`,
                }}>
            <a href="/contact" className="facebook social"><i className="fa fa-facebook"></i></a>
            <a href="/contact" className="instagram social"><i className="fa fa-instagram"></i></a>
            <img src={Brand} width="100%" height="100%" className="navBrand d-inline-block align-top" style={{ maxWidth: `100px`, marginBottom: `0px` }}alt="Limitless Wake Logo" /> 
            © {new Date().getFullYear()}, Limitless Wake Technologies LLC
          <div style={{ fontSize: `10px`}} >
          Website Built By
            {` `}
            <a  href="https://connorjaksik.com" target="_blank" rel="noopener noreferrer">Connor Jaksik</a>
         
          </div>
            </footer> */}
            <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
