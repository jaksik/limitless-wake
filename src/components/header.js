import React, { Component } from "react"
import { Link } from "gatsby"
import "./header.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            open: false
        }
    }

    toggle() {
        this.setState(state => ({ open: !state.open }));
    }

    render() {
        return (
            <header
                style={{
                    background: `#343a40`,
                    color: `white`,
                    height: `auto`
                }}
            >
                <div
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `1.45rem 1.0875rem`,
                    }}
                >
                    <h1 style={{}}>
                        <Link
                            href="/"
                            id="header-title"
                            className="nav-title"
                            style={{
                                textDecoration: `none`,
                                margin: 0,
                                color: `white`,
                            }}
                        >
                            {this.props.siteTitle}
                        </Link>
                    </h1>
                    {/* Menu Icon for Mobile Devices */}
                    <div className={'menu-icon ' + (this.state.open ? 'active' : '')} onClick={this.toggle}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    {/* Nav Items For Header */}
                    <div id="nav-items" className={'nav-items ' + (this.state.open ? 'active' : '')}>
                        <Link to="/contact" className="nav-item">Contact</Link>
                        <Link to="/gallery" className="nav-item">Gallery</Link>
                        <Link className="nav-item">
                            Resources
                                <div className="dropdown-content">
                                <Link to="/resources/faq" className="nav-item">faq</Link><br />
                                <Link to="/resources/locations" className="nav-item">locations</Link><br />
                                <Link to="/resources/rentals" className="nav-item">rentals</Link><br />
                                <Link to="/resources/testimonials" className="nav-item">testimonials</Link><br />
                                <Link to="/resources/rates" className="nav-item">Rates</Link><br />
                            </div>
                        </Link>
                        <Link to="/about" className="nav-item">about</Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header