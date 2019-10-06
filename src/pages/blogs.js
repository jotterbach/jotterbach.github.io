import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const BlogItem = styled.div`
  padding: 10px;
  a {
    color: darkblue;
    text-decoration: none;
  }
`

const Title = styled.div`
  font-weight: bold;
  font-size: 1.3em;
`

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>
          Amazing Pandas Eating Things
        </h1>
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

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC },
         filter: {frontmatter: {type: {eq: "post"}}}) {
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
