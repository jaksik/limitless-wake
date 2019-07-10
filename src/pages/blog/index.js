import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from '../../components/layout'
import "../style.css"

export default ({ data }) => {
    const props = data.allMarkdownRemark

    return (
        <Layout>
            <section className="section">
                <div className="container">
                    <div className="content">

                        <h1>Blog</h1>

                        {/* <p>Total Count: {props.totalCount}</p> */}

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
