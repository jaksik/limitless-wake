import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#343a40`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, textAlign: `left` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link to="/contact" className="nav-item">Contact</Link>
      <Link to="/gallery" className="nav-item">Gallery</Link>
      {/* Create Dropdown Menu for Resources */}
      <Link className="nav-item">
        Resources
        <div className="dropdown-content">
          <Link to="/resources/faq" className="nav-item">faq</Link><br/>
          <Link to="/resources/locations" className="nav-item">locations</Link><br/>
          <Link to="/resources/rentals" className="nav-item">rentals</Link><br/>
          <Link to="/resources/testimonials" className="nav-item">testimonials</Link><br/>
          <Link to="/resources/rates" className="nav-item">Rates</Link><br/>
        </div>
      </Link>
      <Link to="/about" className="nav-item">about</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
