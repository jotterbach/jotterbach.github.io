import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const BlogItem = styled.div`
  padding: 10px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 1.3em;
`

const Blog_FN = ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogItem>
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <Title>
                  {node.frontmatter.title}{" "}
                </Title>
              </Link>
              {node.frontmatter.date}
            </div>
          </BlogItem>
        ))}
      </div>
    </Layout>
  )
}

export default Blog_FN

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {type: {eq: "post"}}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
