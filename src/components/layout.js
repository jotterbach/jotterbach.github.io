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
  <header style={{ marginBottom: `1.5rem` }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline-block` }}>Johannes Otterbach</h3>
    </Link>

    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/professional/">Professional</ListLink>
    </ul>
  </header>
)

const Footer = () => (
  <footer className="Footer">
    <ul style={{ listStyle: `none`, textAlign: `center` }}>
      <li className="FooterLink">
        <a href="https://linkedin.com/in/jotterbach" alt="linkedin">
          <FontAwesomeIcon icon={faLinkedinIn} size={`2x`} color={`#606060`} />
        </a>
      </li>
      <li className="FooterLink">
        <a href="https://www.github.com/jotterbach" alt="github">
          <FontAwesomeIcon icon={faGithub} size={`2x`} color={`#606060`} />
        </a>
      </li>
      <li className="FooterLink">
        <a href="https://www.twitter.com/jsotterbach" alt="twitter">
          <FontAwesomeIcon icon={faTwitter} size={`2x`} color={`#606060`} />
        </a>
      </li>
    </ul>
  </footer>
)

export default ({ children }) => (
  <div className="Layout">
    <div>
      <Header />
    </div>
    <div>{children}</div>
    <div>
      <Footer />
    </div>
  </div>
)
