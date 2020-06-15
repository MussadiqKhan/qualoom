import React, { Component } from "react"
import Header from "../components/header"

class EmpleoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        {" "}
        <div
          className="background-empleo"
          style={{
            background: `url(../images/cabecera-empleo.jpg)`,
          }}
        >
          <div className="header_div">
            <Header />
          </div>
          <div className="main">
            <div className="empty"></div>
            <div className="text">
              <h1>Perfil Administración de</h1>
              <h1>sistemas Línux y BigData</h1>
              <p>
                Qualoom busca incorporar a su equipo perfiles con experiencia
                técnica en ecosistemas Linux y Big Data, tecnologías Spark,
                Hadoop (Cloudera) con ganas de seguir aprendiendo y con
                capacidad de desarrollar su carrera en una empresa estable y
                puntura en nuevas tecnologías para importante cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EmpleoForm
