import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "./index.css"

export default ({ data }) => (
  <Layout>
    <div className="Container">
      <div className="Aligner">
        <div className="Item-top" />
        <div className="Item">
          <div className="Item-content">
            <Img className='ProfileImg'
              fluid={data.file.childImageSharp.fluid}
              fadeIn={true}
              alt="Gatsby Docs are awesome"
            />
          </div>
          <div className="Item-bottom" />
        </div>
      </div>

      <div className="Aligner">
        <div className="Item-top" />
        <div className="Item">
          <div
            className="Item-content"
            dangerouslySetInnerHTML={{
              __html: data.allMarkdownRemark.edges[0].node.html,
            }}
          />
        </div>
        <div className="Item-bottom" />
      </div>
    </div>
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
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
