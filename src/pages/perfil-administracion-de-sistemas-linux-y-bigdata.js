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
          <h3>Requisitos del perfil</h3>
          <ol>
            <li>
              Se requiere experiencia en administración de sistemas Linux
              (SysAdmin) .
            </li>
            <li>
              Se requiere experiencia o conocimientos en plataformas BigData
              (Hadoop y Spark) y herramientas como Airflow, Nifi.
            </li>
            <li>Capacidad de análisis y buena comunicación.</li>
            <li>Ser el catalizador/a del cambio y mejora continua.</li>
            <li>
              Fomentar el trabajo auto gestionado ayudando en la toma de
              decisiones y facilitando la consecución de los objetivos
              establecidos.
            </li>
            <li>
              Velar porque los integrantes del equipo asimilen la nueva
              metodología y su implantación sea la óptima.
            </li>
            <li>
              Aportar mejoras contínuas adaptándose a la cultura y el background
              de cada uno de los equipos.
            </li>
          </ol>
          <h3>Te ofrecemos</h3>
          <ol>
            <li>
              El reto de participar en proyectos innovadores de entornos de
              sistemas y Bigdata para importante cliente
            </li>
            <li>
              Colaborar con equipos multidisciplinares obteniendo una visión 360
              de la compañía y clientes
            </li>
            <li>Certificaciones y formación</li>
            <li>
              Trabajo con grandes profesionales y en equipos multidisciplinares.
            </li>
            <li>Plan de carrera adecuado a tus necesidades.</li>
            <li>
              Contrato estable: por obra y servicio hasta el 01/01/2021 con alta
              probabilidad de renovación tras 5 años con este modelo
            </li>
            <li>
              Algo que seguro no podrás rechazar. Trabajar en la zona sur de
              Madrid (Móstoles), con las ventajas que esto conlleva, posibilidad
              de ir a comer casa, tiempo de transporte al trabajo apenas
              existente.
            </li>
            <li>Remuneración: Según experiencia y conocimietos aportados</li>
          </ol>
          <h3>Envíanos tu CV para participar en esta oportunidad</h3>
        </div>
        <Footer />
      </div>
    )
  }
}

export default EmpleoForm
