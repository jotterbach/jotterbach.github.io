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

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline-block` }}>JohannesOtterbach</h3>
      </Link>

      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/professional/">Professional</ListLink>
      </ul>
    </header>
    {children}

    <footer style={{ marginTop: `2.5rem` }}>
      <ul style={{ listStyle: `none`, textAlign: `center` }}>
        <li className="FooterLink">
          <a href="https://linkedin.com/in/jotterbach" alt="linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} size={`2x`} color={`#606060`}/>
          </a>
        </li>
        <li className="FooterLink">
          <a href="https://www.github.com/jotterbach" alt="github">
            <FontAwesomeIcon icon={faGithub} size={`2x`} color={`#606060`}/>
          </a>
        </li>
        <li className="FooterLink">
          <a href="https://www.twitter.com/jsotterbach" alt="twitter">
            <FontAwesomeIcon icon={faTwitter} size={`2x`} color={`#606060`}/>
          </a>
        </li>
      </ul>
    </footer>
  </div>
)
