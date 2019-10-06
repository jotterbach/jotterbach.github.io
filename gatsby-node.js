const path = require(`path`)
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

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
        edges {
          node {
            fields {
              slug
            }
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // Using Gatsby v2 prevents you from using StaticQueries in the template
    // files. Hence use the PageQuery to gather all data to hand to the 
    // template as compile time.
    // See https://www.gatsbyjs.org/docs/using-gatsby-without-graphql/ 
    // and https://github.com/gatsbyjs/gatsby/issues/15977
    const slug = node.fields.slug
    createPage({
      path: slug,
      component: path.resolve(`./src/pages/blog-template.js`),
      context: {
        html: node.html,
        title: node.frontmatter.title
      },
    })
  })
}
