import React, { useState } from "react"
import "../styles/header.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { Helmet } from "react-helmet"
import { withPrefix, Link } from "gatsby"
import logo from "../../static/images/logo_qualoom_blanco.png"

const Header = () => {
  const [drop, setDrop] = useState(false)

  const onClick = () => {
    console.log("onClick")
    setDrop(!drop)
    console.log(drop)
  }
  return (
    <div className="header">
      <nav>
        <div className="toggle">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="menu" id="menu">
            <GiHamburgerMenu onClick={onClick} />
          </div>
        </div>

        <ul id="UL" className={drop ? "active" : ""}>
          <div className="logo_large">
            <img src={logo} />
          </div>
          <li>Consultoría IT</li>
          <li>Servicios Cloud</li>
          <li>Bigdata & Analytics</li>
          <li>Desarrollo software</li>
          <Link to="/empleo">
            <li>Empleo</li>
          </Link>
          <li>Compañía</li>
          <li>Actualidad</li>
          <li>IoT & Robótica software</li>
          <li>Offering!</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
