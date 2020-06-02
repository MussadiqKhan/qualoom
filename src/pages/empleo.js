import React from "react"
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
          <Img fluid={data.image.childImageSharp.fluid} />
        </div>
        <div className="empleo-text">
          <h2>Perfil Junior Administración de sistemas Línux y BigData</h2>
          <p>
            Qualoom busca incorporar a su equipo perfiles con o sin experiencia
            técnica en ecosistemas Linux y Big Data, tecnologías Spark y Scala
            con ganas de aprender y capacidad de desarrollar su carrera en una
            empresa estable y puntura en nuevas tecnologías.
          </p>
          <button className="oprtunidad">Ver oportunidad</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Empleo
