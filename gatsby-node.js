/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  // sends all traffic from https://examplesite14960.gatsbyjs.io/it to https://italiansite.gatsbyjs.io/it/
  // using a pathPrefix may prevent the need for this proxy
  createRedirect({
    fromPath: `/it/`,
    toPath: `https://italiansite.gatsbyjs.io/it/`,
    statusCode: 200,
  })
  // sends all traffic from https://examplesite14960.gatsbyjs.io/it/* to https://italiansite.gatsbyjs.io/it/*
  createRedirect({
    fromPath: `/it/*`,
    toPath: `https://italiansite.gatsbyjs.io/it/*`,
    statusCode: 200,
  })
}
