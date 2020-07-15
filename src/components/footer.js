import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';
import './footer.css'
import Brand from "../images/limitless-logo.png"
import Img from 'gatsby-image'

const Footer = ({ blogPosts, logo }) => {
    console.log("logo: ", logo)
    return (
        <footer style={{ background: `#477ebf`, paddingTop: `40px`, color: `white` }}>
            <Container>
                <Row>
                    <Col xs="12" sm="5" md="4" lg="4" className="offset-sm-1 offset-lg-0 mt-lg-0">
                        <Row className="justify-content-center">
                            <h6 className="footer-title">CONNECT WITH US</h6>
                            <div className="w-100"></div>
                            <a href="https://www.instagram.com/limitlesswake/" target="_blank" rel="noopener noreferrer" style={{ marginRight: `20px` }}>
                                <img style={{ maxWidth: `30px` }} src="https://cdn2.iconfinder.com/data/icons/harmonicons-04/64/instagram-512.png" />
                            </a>
                            <a href="https://www.facebook.com/ATXLakeLessons/" target="_blank" rel="noopener noreferrer">
                                <img style={{ maxWidth: `30px` }} src="https://image.flaticon.com/icons/png/512/33/33702.png" />
                            </a>
                            <div className="w-100"></div>
                            <Col xs="5" sm="8" md="9" lg="7" xl="6">
                                <Img fluid={logo.childImageSharp.fluid} />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="11" sm="5" md="5" lg="4" className="offset-1 offset-md-2 offset-lg-0 mt-5 mt-sm-0">
                        <h6 className="footer-title">LATEST BLOG POSTS</h6>
                        <div className="w-100"></div>
                        {blogPosts.map((post, index) => (
                            <>
                                <div className="w-100"></div>
                                <Link to={post.node.fields.slug} key={index}>
                                    <p style={{ color: `white` }}>{post.node.frontmatter.title}</p>
                                </Link>
                            </>
                        ))}
                    </Col>
                    <Col xs="11" sm="5" md="5" lg="4" className="offset-1 offset-lg-0 mt-5 mt-lg-0">
                        <h6 className="footer-title">CONTACT US</h6>
                        <p>Limitless Wake</p>
                        <p>Austin, Texas</p>
                        <p>512-270-1735</p>
                        <p>limitlesswaketech@gmail.com</p>
                    </Col>
                </Row>
                <div style={{ textAlign: `center`, color: `#d4dcf1`, padding: `20px 0px` }}>
                    © {new Date().getFullYear()}, Limitless Wake Technologies LLC All Rights Reserved
              
                </div>
            </Container>
        </footer>
    )
}

export default Footer