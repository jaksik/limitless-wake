import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import Carousel from "../components/carousel"
import info from "../data/info.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const IndexPage = ({ data }) => {
  const [width, setWidth] = useState(1);
  console.log("data: ", data)
  useEffect(() => 
  {
    setWidth(window.innerWidth);
  });
  const { edges: galleryImages} = data.galleryImages;
  console.log("images", galleryImages)
  return (
    <Layout>
      <SEO title="Wakeboard Lessons Austin Texas" keywords={[`wakeboard`, `lessons`, `austin`, `texas`, `lake`, `travis`, `limitless`, `wake`, `chandler`, `crouch`]} />

      {/* <div className="overlay">
        <div className="video">
          <video id="myVid" autoPlay muted loop poster>
            <source src={clip} type="video/mp4" />
            Your browser does not support HTML5 video.
                  </video>
        </div>
      </div> */}

      <PageHeader data={data}/>
      <Link to="/contact">
          <Button color="primary" size="lg" style={{ width: `55%`, margin: `-15vh auto`, zIndex: 16, top: `10px` }} block id="cover-button">Book A Lesson</Button>
        </Link>

      <div style={{width:`100%`, background:`white`}}>
      <Container>
        <div style={{ marginTop: `20vh` }}>
            <h3 style={{fontWeight:`bold`, padding:`50px 0 0px`, textAlign: `center`}}>Limitless Wake</h3>
            <p style={{maxWidth:`650px`, margin:`10px auto`, textAlign:`center`, textIndent:`0px`}}>Founded and opperated by life-long wake enthusiast and Collegiate National Champion Chandler Crouch, Limitless Wake is dedicated to providing you with the information and coaching you need to help you reach your wakeboard/surf goals.</p>
            <Row style={{background:`white`}}>
                <Col xs="12">
                    <h5 style={{textAlign:`center`}}>{info[1].title}</h5>
                </Col>
                {info[1].data.map((item) => {
                    return (
                        <Col xs="12" md="4">
                            <p style={{textAlign:`center`, fontWeight:`bold`}}>{item.title}</p>
                            <p className="home-div-item" style={{ textAlign: `center`, textIndent:`0`}}>{item.info}</p>                         
                        </Col>
                    )
                })}
                
            </Row>
            <Row className="no-gutters justify-content-center">
                  <Link to="/about/">
                    <Button color="info" style={{margin:`10px auto 70px`}}>Learn More</Button>
                  </Link> 
                </Row>
            <div style={{maxHeight:`400px`, overflow: `hidden`}}>
              <Carousel/>
            </div>
            <Row style={{background:`white`}}>
                <Col xs="12">
                    <h1 style={{margin:`80px auto 0px`, textAlign:`center`, fontWeight:`bold`}}>How It Works</h1>
                </Col>
                <Col xs="12" md="4" style={{padding:`10px 30px`}}>
                    <Img fluid={data.pencil.childImageSharp.fluid} style={{width:'70px', height:`70px`, margin:`20px auto`}}/>
                    <h4 style={{textAlign:`center`}}>1. Fill Out the Evaluation Form</h4>
                    <p className="home-div-item" style={{ textAlign: `center`, textIndent:`0`}}>Tell us a little about yourself as well as your preferred lesson day, time, and location.</p>                         
                </Col>
                <Col xs="12" md="4" style={{padding:`10px 30px`}}>
                    <Img fluid={data.checkBox.childImageSharp.fluid} style={{maxWidth:'70px',  height:`70px`, margin:`20px auto`}}/>
                    <h4 style={{textAlign:`center`}}>2. Lesson Confirmation</h4>
                    <p className="home-div-item" style={{ textAlign: `center`, textIndent:`0`}}>After filling out the evaluation, we'll get in contact with you through phone or email to confirm your lesson.</p>                         
                </Col>
                <Col xs="12" md="4" style={{padding:`10px 30px`}}>
                    <Img fluid={data.mapLocation.childImageSharp.fluid} style={{maxWidth:'70px',  height:`70px`, margin:`20px auto`}}/>
                    <h4 style={{textAlign:`center`}}>3. We Come To You</h4>
                    <p className="home-div-item" style={{ textAlign: `center`, textIndent:`0`}}>We'll meet you any where in the Austin, Texas area. If you don't have a boat check out our rental affiliates page for popular rental locations.</p>                         
                </Col>
            </Row>
        </div>
      </Container>
      </div>

      <div className="google-maps" name="google-maps">
        <iframe title="lesson locations map" frameborder="100" scrolling="no" src="https://www.google.com/maps/d/embed?mid=1JJfYAg2K--y6U6e0bfiHRSPSH_x6yHg9&hl=en" width="100%" height="360px" className="map-iframe"></iframe>
      </div>        

        {/* <Link style={{ display: (width < 700 ? `block` : `none`)}} to="/contact">
          <Button color="primary" size="lg" style={{ width: `80%`, margin: `0 auto` }} block >Book A Lesson</Button>
        </Link> */}

      

      <div style={{width:`100%`, background:`white`, paddingBottom: `40px`}}>
        <Container>
        <Row className="justify-content-center">
          
        </Row>
          <Row>
            <Col xs="12" md="4">
              <Row className="no-gutters justify-content-center align-items-center" style={{height:`100%`}}>
                <div className="row no-gutters justify-content-center">
                  <h6 style={{fontWeight:`bold`, color:`orange`}}>BLOG</h6>
                  <div class="w-100"></div>
                  <h2>The Wake</h2>
                  <div class="w-100"></div>
                  <p style={{fontWeight:`bold`, textAlign:`center`}}>Pro tips and tricks about everything wake.</p>
                  <div class="w-100"></div>
                  <Link to="/blog/">
                  <Button color="info">Our Blog</Button>
                  </Link>
                </div>
              </Row>
            </Col>

            {data.allMarkdownRemark.edges.map((blogPost, index) => {
              const image = galleryImages.find(n => {
                return n.node.relativePath === blogPost.node.frontmatter.image;
              });
              const imageSizes = image.node.childImageSharp.fluid;
              return (
                <Col xs="12" sm={(index === 0 ? `12` : `6`)} md={(index === 0 ? `8` : `4`)}>
                  <div className={(index === 0 ? `first-card blog-card` : `blog-card`)}>
                    <Img fluid={imageSizes} style={{ position:`absolute`, width:`100%`, height:`100%`}}/>
                    <div className="card-overlay">
                      <div className="card-text">
                        <Link to={blogPost.node.fields.slug}>
                          <h6 style={{fontWeight:`bold`, color:`orange`}}>BLOG</h6>
                          <h4 style={{fontWeight:`bold`, color:`white`}}>{blogPost.node.frontmatter.title}</h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
        </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark (filter: { frontmatter: {templateKey: {regex: "/blog/"}}} sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        fields{
          slug
        }
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "MMMM Do YYYY")
          title
          image
        }
      }
    }
  }
  galleryImages: allFile(filter: {sourceInstanceName: { eq: "gallery" }}) {
    edges {
      node {
        relativePath
        name
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  pencil: file(relativePath: { eq: "evaluation.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 200, quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  checkBox: file(relativePath: { eq: "check-box.png" }) {
    childImageSharp {
      fluid(maxWidth: 200, quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  mapLocation: file(relativePath: { eq: "map.png" }) {
    childImageSharp {
      fluid(maxWidth: 800, quality: 40) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  coverImage: file(relativePath: { eq: "air.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1800, quality: 40) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  waveImage: file(relativePath: { eq: "wave.png" }) {
    childImageSharp {
      fluid(maxWidth: 800, quality: 40) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`