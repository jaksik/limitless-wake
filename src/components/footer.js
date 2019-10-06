import React from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'reactstrap';
import './footer.css'
import Brand from "../images/limitless-logo.png"

const Footer = ({ blogPosts }) => {
    return (
    <footer style={{background:`#477ebf`, paddingTop: `40px`, color:`white`}}>
        <Row className="no-gutters">
            <Col xs="12" sm="5" md="4" lg="4" className="offset-sm-1 offset-lg-0">
                <Row className="no-gutters justify-content-center">
                    <p style={{fontWeight:`bold`, color:`#d4dcf1`}}>CONNECT WITH US</p>
                    <div className="w-100"></div>
                    <a  href="https://www.instagram.com/limitlesswake/" target="_blank" rel="noopener noreferrer" style={{marginRight:`20px`}}>
                        <img style={{maxWidth:`30px`}} src="https://cdn2.iconfinder.com/data/icons/harmonicons-04/64/instagram-512.png"/>
                    </a>      
                    <a  href="https://www.facebook.com/ATXLakeLessons/" target="_blank" rel="noopener noreferrer">
                    <img style={{maxWidth:`30px`}} src="https://image.flaticon.com/icons/png/512/33/33702.png"/>                    </a>                      
                  
                    <div className="w-100"></div>
                    <img src={Brand} className="footer-image"/>
                </Row>
                
            </Col>
            <Col xs="11" sm="5" md="5" lg="4" className="offset-1 offset-md-2 offset-lg-0">
                <p style={{fontWeight:`bold`, color:`#d4dcf1`}}>LATEST BLOG POSTS</p>
                    <div className="w-100"></div>  
                {blogPosts.map((post, index) => (
                    <>
                        <div className="w-100"></div>
                        <Link to={post.node.fields.slug} key={index}>
                            <p style={{color:`white`}}>{post.node.frontmatter.title}</p>
                        </Link>
                    </>
                ))}
            </Col>
            <Col xs="11" sm="5" md="4" lg="4" className="offset-1 offset-sm-2 offset-lg-0">
                <p style={{fontWeight:`bold`, color:`#d4dcf1`}}>CONTACT US</p>
                <p>Limitless Wake</p>
                <p>Austin, Texas</p>
                <p>512-270-1735</p>
                <p>limitlesswaketech@gmail.com</p>
            </Col>
        </Row>
        <div style={{textAlign:`center`, color:`#d4dcf1`, padding:`50px`}}>
            © {new Date().getFullYear()}, Limitless Wake Technologies LLC All Rights Reserved
            <div style={{ fontSize: `10px`}} >
            Website Built By
                {` `}
                <a  href="https://connorjaksik.com" target="_blank" rel="noopener noreferrer" style={{color: `white`}}>Connor Jaksik</a>
          </div>
        </div>
    </footer>
)}

export default Footer