import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <div
      dangerouslySetInnerHTML={{
        __html: data.allMarkdownRemark.edges[0].node.html,
      }}
    />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "Professional" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          excerpt
          timeToRead
          html
        }
      }
    }
  }
`
