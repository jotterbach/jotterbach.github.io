import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"


const Layout = styled.div`
  margin: 3rem auto;
  max-width: 900px;
  padding: 0 1rem;

  display: flex;
  min-height: 0vh;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  // font-family: "Arial", sans-serif;
  a {
    color: darkblue;
    text-decoration: none;
  }
`

const Head = styled.header`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-items: center;

`

const NavBarLink = styled.li`
  display: inline-block;
  margin-right: 1rem;
`

const FooterLink = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  text-align: "center";
`

const Foot = styled.footer`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-items: center;
  flex-wrap: wrap;
`

const ListLink = props => (
  <NavBarLink>
    <Link to={props.to}>{props.children}</Link>
  </NavBarLink>
)

const Header = () => (
  <Head>
    <div>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline-block` }}>Johannes Otterbach</h3>
      </Link>
    </div>
    <div>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/blogs">Blog</ListLink>
        <ListLink to="/professional/">Professional</ListLink>
      </ul>
    </div>
  </Head>
)

const Footer = () => (
  <Foot>
    <FooterLink>
      <a href="https://linkedin.com/in/jotterbach" alt="linkedin">
        <FontAwesomeIcon icon={faLinkedinIn} size={`2x`} color={`#606060`} />
      </a>
    </FooterLink>
    <FooterLink>
      <a href="https://www.github.com/jotterbach" alt="github">
        <FontAwesomeIcon icon={faGithub} size={`2x`} color={`#606060`} />
      </a>
    </FooterLink>
    <FooterLink>
      <a href="https://www.twitter.com/jsotterbach" alt="twitter">
        <FontAwesomeIcon icon={faTwitter} size={`2x`} color={`#606060`} />
      </a>
    </FooterLink>
  </Foot>
)

export default ({ children }) => (
  <Layout>
    <div>
      <Header />
    </div>
    <div className="Content">{children}</div>
    <div>
      <Footer />
    </div>
  </Layout>
)
