import React from 'react'
import { graphql, Link } from "gatsby"
import { Container, Row } from "reactstrap"
import Layout from '../../components/layout'

export default ({ data }) => {
    const props = data.allMarkdownRemark
    return (
        <Layout>
            <Container>
                <Row className="no-gutters justify-content-center align-items-center" style={{height:`100%`, marginTop:`40px`}}>
                    <div className="row no-gutters justify-content-center">
                        <h6 style={{fontWeight:`bold`, color:`orange`}}>BLOG</h6>
                            <div class="w-100"></div>
                        <h1>The Wake</h1>
                            <div class="w-100"></div>
                        <p style={{fontWeight:`bold`, textAlign:`center`}}>Pro tips and tricks about everything wake.</p>
                            <div class="w-100"></div>
                            <div style={{ display: (props.totalCount > 0 ? `block` : `none`) }}>
                                <p>Total Count: {props.totalCount}</p>
                            </div>
                            <div style={{ display: (props.totalCount > 0 ? `none` : `block`) }}>
                                <h3>Blog posts coming soon!</h3>
                            </div>
                    </div>     
                </Row>                     
                <Row>
                    {props.edges.map(({ node }) => {
                        console.log(node)
                        return (
                            <Link
                                to={node.fields.slug}
                                className="link"
                                style={{ marginBottom: `30px` }}
                            >
                                <div className="post-list">

                                    <h3 style={{ paddingBottom: `0px` }}>{node.frontmatter.title}</h3>

                                    <strong style={{}}>{node.frontmatter.date}</strong><br />

                                    <p style={{ textIndent: `50px`, paddingTop: `15px` }}>{node.excerpt}</p>

                                </div>
                            </Link>
                        )
                    })}
                </Row>
            </Container>
        </Layout>
    )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "\/blog/"}}
    ) {
        totalCount
        edges {
            node {
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                }
            }
        }
    }
  }
`
