import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import "./layout.css"

const ListLink = props => (
  <li className="NavBarLink">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => (
  <header className="Header">
    <div>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline-block` }}>Johannes Otterbach</h3>
      </Link>
    </div>
    <div>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/blog-list">Blog</ListLink>
        <ListLink to="/professional/">Professional</ListLink>
      </ul>
    </div>
  </header>
)

const Footer = () => (
  <footer className="Footer">
    <div className="FooterLink">
      <a href="https://linkedin.com/in/jotterbach" alt="linkedin">
        <FontAwesomeIcon icon={faLinkedinIn} size={`2x`} color={`#606060`} />
      </a>
    </div>
    <div className="FooterLink">
      <a href="https://www.github.com/jotterbach" alt="github">
        <FontAwesomeIcon icon={faGithub} size={`2x`} color={`#606060`} />
      </a>
    </div>
    <div className="FooterLink">
      <a href="https://www.twitter.com/jsotterbach" alt="twitter">
        <FontAwesomeIcon icon={faTwitter} size={`2x`} color={`#606060`} />
      </a>
    </div>
  </footer>
)

export default ({ children }) => (
  <div className="Layout">
    <div>
      <Header />
    </div>
    <div className="Content">{children}</div>
    <div>
      <Footer />
    </div>
  </div>
)
