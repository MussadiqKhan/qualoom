import React, { Component } from "react"
import Header from "../components/header"
import Footer from "../components/footer"

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
        <div className="job">
          <h3>Descripción del puesto</h3>
          <ol>
            <li>
              Ofrecemos la oportunidad de crecer profesionalmente en proyectos
              innovadores y tecnológicamente complejos
            </li>
            <li>
              El candidato formará parte del equipo que administra y opera los
              sistemas de información de un importante cliente a nivel nacional
            </li>
            <li>
              Desarrollará las tareas de administración de plataformas Linux,
              Windows y sistemas de Bigdata Hadoop y Spark, aplicando la mejor
              estrategia de gestión de sistemas y tratamiento de entornos de
              grandes volúmenes de datos.
            </li>
            <li>
              Además tendrá la oportunida de aprender y abordar infinidad de
              restos tecnológicos a nivel formativo y profesional dado que al
              ofrecer este servicio de operación se trabaja mano a mano con
              multitud de áreas del cliente (ingenieros de datos, equipos de
              automatización, capa de negocio)
            </li>
            <li>
              Se realizará un seguimiento personalizado de su evolución,
              atendiendo a nuevas necesidades tecnológicas del mercado y a
              capacidades propias para adquirir y reforzar su conocimiento
              permitiendo su crecimiento profesional y personal.
            </li>
          </ol>
        </div>
        <Footer />
      </div>
    )
  }
}

export default EmpleoForm
