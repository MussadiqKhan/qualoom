import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/style.css"

const Empleo = () => {
  const data = useStaticQuery(graphql`
    query Images_casos {
      image: allFile(filter: { relativeDirectory: { eq: "casos" } }) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <div
        className="background-casos"
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
            <h1>Casos de éxito. Nuestra mejor</h1>
            <h1>carta de presentación son</h1>
            <h1>nuestros clientes</h1>
            <p>
              Somos una empresa que invierte muy poco en publicidad y
              posicionamiento. La confianza de nuestros socios y clientes, así
              como la recomendación de nuestra marca es la mejor carta de
              presentación.
            </p>
          </div>
        </div>
      </div>
      <div className="empleo-content">
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
        <div className="empleo-image"></div>
      </div>
      <Footer />
    </div>
  )
}

export default Empleo
