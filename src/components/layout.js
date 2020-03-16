import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

import Img from "gatsby-image"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      avatar: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      twitter: file(relativePath: { eq: "social/twitter.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      in: file(relativePath: { eq: "social/in.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      mail: file(relativePath: { eq: "social/mail.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      github: file(relativePath: { eq: "social/github.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const [active, setActive] = useState(["active", "", ""])

  return (
    <>
      <Helmet>
        <meta
          name="google-site-verification"
          content="f7vZ7b-yhgOcB6H4OwtD1rrU7r46UE_6ith2cEKPtRI"
        />
      </Helmet>
      <div className="container">
        <div className="profile">
          <div className="avatar">
            <Img fluid={data.avatar.childImageSharp.fluid} />
          </div>
          <span>Achraf ASH</span>
        </div>
        <ul className="social">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/AchrafAsh3"
            >
              <Img fluid={data.twitter.childImageSharp.fluid} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/achraf-aitsidihammou/"
            >
              <Img fluid={data.in.childImageSharp.fluid} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/achrafash/"
            >
              <Img fluid={data.github.childImageSharp.fluid} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:aitsidihammou.achraf@gmail.com?subject=Hello!"
            >
              <Img fluid={data.mail.childImageSharp.fluid} />
            </a>
          </li>
        </ul>
        <main>{children}</main>
        <nav className="navigation">
          <ul>
            <li onClick={() => setActive(["active", "", ""])} id="active">
              <Link to="/">About</Link>
            </li>
            <li onClick={() => setActive(["", "active", ""])}>
              <Link to="/services">Services</Link>
            </li>
            <li onClick={() => setActive(["", "", "active"])}>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
      </div>
      <footer>
        <small>
          © {new Date().getFullYear()} - Built with{` `}
          <a target="_blank" href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </small>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
