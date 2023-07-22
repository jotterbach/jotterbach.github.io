import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const BlogItem = styled.div`
  padding: 10px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 1em;
`

const BlogsList = styled.div`

`

const Foreword = styled.div`
max-width: 80%;
margin-left: 10px;
margin-right: 10px;
margin-top: 5px;
margin-bottom: 100px;
align-items: center;
`

const Blog_FN = ({ data }) => {
  return (
    <Layout>
      <Foreword dangerouslySetInnerHTML={{
              __html: data.content.edges[0].node.html,
            }}/>
      <BlogsList>
        {data.posts.edges.map(({ node }) => (
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
      </BlogsList>
    </Layout>
  )
}

export default Blog_FN

export const query = graphql`
query {
  content: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Blog" } } }) {
    edges {
      node {
        html
      }
    }
  }
posts: allMarkdownRemark(
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
