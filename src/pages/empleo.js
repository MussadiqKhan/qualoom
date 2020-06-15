import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/style.css"

const Empleo = () => {
  const data = useStaticQuery(graphql`
    query Images_empleo {
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
      <Helmet>
        <title>Trabaja con nosotros en Qualoom</title>
        <meta
          name="description"
          content="Trabaja en Qualoom - Ofrecemos un entorno de trabajo saludable, flexible, con desarrollo personal y profesional. Echa un vistazo a nuestras oportunidades"
        />
      </Helmet>
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
            <h1>¿Te gustaría trabajar con </h1>
            <h1>nuestro equipo?</h1>
            <p>
              Si disfrutas con los grandes retos, deseas desarrollar tu carrera
              profesional en el sector de la tecnología/consultoría en un
              entorno innovador y en colaboración con equipos altamente
              cualificados, este es tu lugar. Ofrecemos un entorno de trabajo
              saludable, flexible, con desarrollo personal y profesional. ¡Echa
              un vistazo a nuestras oportunidades!
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
