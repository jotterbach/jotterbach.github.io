import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"

const Professional = styled.div`
  padding: 10px;
  a {
    color: darkblue;
    text-decoration: none;
  }
`

const Professional_FN = ({ data }) => (
  <Layout>
    <Professional
      dangerouslySetInnerHTML={{
        __html: data.allMarkdownRemark.edges[0].node.html,
      }}
    />
  </Layout>
)

export default Professional_FN

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
          html
        }
      }
    }
  }
`
