import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/style.css"

const Empleo = () => {
  const data = useStaticQuery(graphql`
    query Images_servicios {
      image: file(relativePath: { eq: "icono-empleo.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <div
        className="background-servicios"
        style={{
          background: `url(../images/servicios-cloud-qualoom.jpg)`,
        }}
      >
        <div className="header_div">
          <Header />
        </div>
        <div className="main">
          <div className="empty"></div>
          <div className="text">
            <h1>Servicios Cloud</h1>
            <p>
              Advance Consulting Partner de Amazon Web Services con más de 7
              años de experiencia en proyectos de migración a la gran nube,
              Reseller AWS y miembro del programa de competencias: Digital
              Customer Experience Competence y Migration/DevOps Competence
              permiten que cientos de clientes hayan confiado en nosotros para
              impulsar, asegurar y evolucionar sus servicios.​
            </p>
          </div>
        </div>
      </div>
      <div className="empleo-content">
        <div className="empleo-image">
          <Img
            fluid={data.image.childImageSharp.fluid}
            className="data-image"
          />
        </div>
        <div className="empleo-text">
          <h2>Perfil Junior Administración de sistemas Línux y BigData</h2>
          <p>
            Con una de las infraestructuras Big data más importantes para el
            análisis de datos, Qualoom se ha convertido en el equipo de
            administración y operaciones que permite la explotación de tan
            exigente y dinámica infraestructura. Con tecnología Hadoop,
            proyectos de explotación de datos e integración con múltiples
            aplicaciones de terceros, Qualoom realiza la monitorización,
            alarmado, administración y evolución de los servicios estrella de la
            compañia española.
          </p>
          <button className="oprtunidad">Ver oportunidad</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Empleo
