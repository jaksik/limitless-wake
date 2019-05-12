const path = require(`path`)
//You want to use each markdown file name to create the page slug.
//So pandas-and-bananas.md will become /pandas-and-bananas/.

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

//the steps to programmatically creating pages are:
//Query data with GraphQL & Map the query results to pages

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    return graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/static-page.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
    })
  }