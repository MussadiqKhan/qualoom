import React from "react"
import "../../styles/index/index_first_section.css"
import Header from "../header"

const IndexFirstSection = () => {
  return (
    <div>
      <div
        className="background"
        style={{
          background: `url(../images/a-qualoom-home.jpg)`,
        }}
      >
        <div className="header_div">
          <Header />
        </div>
        <div className="main">
          <div className="empty"></div>
          <div className="text">
            <h1>Innovación tecnológica </h1>
            <h1>Basada en la excelencia</h1>
            <p>
              Partner Advance de Amazon Web Services, servicios especializados
              de DevOps, SysOps, SysAdmin, infraestructuras altamente escalables
              y disponibles, proyectos de migración a la nube, Cloud híbrida,
              planes de recuperación ante desastres, desarrollo Software,
              BigData, Análisis de datos y nuestro nuevo equipo de IoT &
              Robótica Software, te esperan para construir un futuro realmente
              emocionante.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexFirstSection
