import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { SEO } from "../components/seo"


const Container = styled.div`
  display: flex;
  min-height: 0vh;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Aligner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const ItemTop = styled.div`
  align-self: flex-start;
`

const Item = styled.div`
  min-width: 400px;
  max-width: 400px;
  flex-basis: auto;
  flex-grow: 2;
`

const ItemBottom = styled.div`
  align-self: flex-end;
`

const ItemContent = styled.div`
  max-width: 100%;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
`


const ProfileImg = styled(GatsbyImage)`
  border-radius: 10px;
`

const Index_FN = ({ data }) => (
  <Layout>
    <Container>
      <Aligner>
        <ItemTop/>
        <Item>
          <ItemContent>
            <ProfileImg
              image={getImage(data.file)}
              fadeIn={true}
              alt="Image of me"
            />
          </ItemContent>
        </Item>
        <ItemBottom/>
      </Aligner>

      <Aligner>
        <ItemTop/>
        <Item>
          <ItemContent
            dangerouslySetInnerHTML={{
              __html: data.allMarkdownRemark.edges[0].node.html,
            }}
          />
        </Item>
        <ItemBottom/>
      </Aligner>
    </Container>
  </Layout>
)

export default Index_FN

export const Head = () => (
  <SEO />
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
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
