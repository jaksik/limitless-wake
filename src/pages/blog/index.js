import React from 'react'
import { graphql, Link } from "gatsby"
import Container from "../../components/container"
import Layout from '../../components/layout'
import "../style.css"

export default ({ data }) => {
    const props = data.allMarkdownRemark
    return (
        <Layout>
      <Container className="short-page">
            <section className="section">
                <div className="container">
                    <div className="content">

                        <h1>Blog</h1>

                        {/* If there are blog posts it will display the toal count if not it will say posts coming soon */}
                        <div style={{display: (props.totalCount > 0 ? `block` : `none`)}}>
                            <p>Total Count: {props.totalCount}</p>
                        </div>

                        <div style={{display: (props.totalCount > 0 ? `none` : `block`)}}>
                            <h3>Blog posts coming soon!</h3>
                        </div>

                        <div className="row">

                            {props.edges.map(({ node }) => {
                                console.log(node)
                                return (
                                        <Link
                                            to={node.fields.slug}
                                            className="link"
                                            style={{ marginBottom: `30px`}}
                                        >
                                            <div className="post-list">

                                                <h3 style={{ paddingBottom: `0px`}}>{node.frontmatter.title}</h3>

                                                <strong style={{}}>{node.frontmatter.date}</strong><br />

                                                <p style={{ textIndent: `50px`, paddingTop: `15px` }}>{node.excerpt}</p>

                                            </div>
                                        </Link>
                                )
                            })}
                            
                        </div>
                    </div>
                </div>
            </section>
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
