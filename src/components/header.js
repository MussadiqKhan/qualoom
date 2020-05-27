import React from "react"
import "../styles/header.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { Helmet } from "react-helmet"
import { withPrefix, Link } from "gatsby"
import logo from "../../static/images/logo_qualoom_blanco.png"

const Header = () => {
  return (
    <div className="header">
      <Helmet>
        <script src={withPrefix("script.js")} type="text/javascript" />
      </Helmet>
      <nav>
        <div className="toggle">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="menu" id="menu">
            <GiHamburgerMenu />
          </div>
        </div>

        <ul id="UL">
          <div className="logo_large">
            <img src={logo} />
          </div>
          <li>Consultoría IT</li>
          <li>Servicios Cloud</li>
          <li>Bigdata & Analytics</li>
          <li>Desarrollo software</li>
          <li>Empleo</li>

          <li>IoT & Robótica software</li>
          <li>Offering!</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
