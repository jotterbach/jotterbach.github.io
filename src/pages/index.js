import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"


export default ({ data }) => (
  <Layout>
    <div style={{ width: `400px` }}>
      <Img
        fluid={data.file.childImageSharp.fluid}
        fadeIn={true}
        alt="Gatsby Docs are awesome"
      />
    </div>

    <div
      dangerouslySetInnerHTML={{
        __html: data.allMarkdownRemark.edges[0].node.html,
      }}
    />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "About" } } }) {
      edges {
        node {
          html
        }
      }
    }
    file(relativePath: { eq: "johannes2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
