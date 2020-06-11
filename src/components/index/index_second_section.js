import React from "react"
import { Link } from "gatsby"
import "../../styles/index/index_second_section.css"

const IndexSecondSection = () => {
  return (
    <div className="main_second">
      <h1>Consultoría IT</h1>
      <p>
        Consultoría, asesoramiento y soluciones orientadas a garantizar las
        necesidades tecnológicas de tu organización, disponiendo de un trato
        personalizado.
      </p>
      <Link to="/consultoria-it">
        <button className="descubre">Descubre más</button>
      </Link>
    </div>
  )
}

export default IndexSecondSection
