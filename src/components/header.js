import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `center`,
      }}
    >
      <a
        href="https://twitter.com/anjalidube22"
        style={{
          color: `#1ea1f1`,
          textDecoration: `none`,
          marginRight: `15px`,
        }}
      >
        Twitter
      </a>
      <a
        href="https://github.com/Anjali2210/"
        style={{
          color: `#000`,
          textDecoration: `none`,
          marginRight: `15px`,
        }}
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/anjali-dube-a796b434/"
        style={{
          color: `#273e4a`,
          textDecoration: `none`,
          marginRight: `15px`,
        }}
      >
        Linkedin
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
