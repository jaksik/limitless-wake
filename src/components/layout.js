/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./navbar"
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
                  position: (props.footer ? `fixed` : `none` ),
                  left: `0`,
                  bottom: `0`,
                  margin: `0 auto`, 
                  textAlign: `center`,
                  background: `#343a40`,
                  color: `white`,
                  width: `100%`
                }}>
            <a href="/contact" className="facebook social"><i className="fa fa-facebook"></i></a>
            <a href="/contact" className="instagram social"><i className="fa fa-instagram"></i></a>
            <br />
            <img src={Brand} width="100%" height="100%" className="navBrand d-inline-block align-top" style={{ maxWidth: `100px`, marginBottom: `0px` }}alt="Limitless Wake Logo" />            © {new Date().getFullYear()}, Limitless Wake Technologies LLC
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
