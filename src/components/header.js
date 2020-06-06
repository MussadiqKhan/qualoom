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
          <Link to="/consultoria-it">
            <li>Consultoría IT</li>
          </Link>
          <Link to="/servicios-cloud">
            <li>Servicios Cloud</li>
          </Link>
          <Link to="/bigdata-analytics/">
            <li>Bigdata & Analytics</li>
          </Link>
          <Link to="/desarrollo-software">
            <li>Desarrollo software</li>
          </Link>
          <Link to="/empleo">
            <li>Empleo</li>
          </Link>
          <Link to="/compania">
            <li>Compañía</li>
          </Link>
          <li>Actualidad</li>
          <Link to="/iot-robotica">
            <li>IoT & Robótica software</li>
          </Link>
          <Link to="/offering">
            <li>Offering!</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
