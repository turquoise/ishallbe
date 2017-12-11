const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
// creates the slugs
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: 'pages'})
    //const fileNode = getNode(node.parent)
    //console.log(`\n`, fileNode.relativePath)
    //console.log(createFilePath({ node, getNode, basePath: 'pages'}))
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

// creates the pages
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise( (resolve, reject) => {
    graphql(`
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
      `)
      .then( result => {
        //console.log(JSON.stringify(result, null, 4))
        // create forwards and back
        // const posts = result.data.allMarkdownRemark.edges
        // posts.forEach( ({node}, index) => {
        //   createPage({
        //     path: node.fields.slug,
        //     component: path.resolve(`./src/templates/blog-post.js`),
        //     context: {
        //       prev: index === 0 ? null : posts[index - 1].node,
        //       next: index === (posts.length - 1) ? null : posts[index + 1].node,
        //     }
        //   })
        // })
        // create slug
        result.data.allMarkdownRemark.edges.map( ({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              slug: node.fields.slug,
            },
          })
        })
        resolve()
      })
  })
}
