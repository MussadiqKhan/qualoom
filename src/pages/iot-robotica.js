import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/style.css"

const Empleo = () => {
  const data = useStaticQuery(graphql`
    query Images_robotica {
      image: allFile(filter: { relativeDirectory: { eq: "robotica" } }) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <Helmet>
        <title>IoT & Robótica software - Qualoom</title>
        <meta
          name="description"
          content="A través de nuestro equipo de IoT y Robótica desarrollamos proyectos profesionales a medida."
        />
      </Helmet>
      <div
        className="background-robotica"
        style={{
          background: `url(../images/iot-robotica-software-1.jpg)`,
        }}
      >
        <div className="header_div">
          <Header />
        </div>
        <div className="main">
          <div className="empty"></div>
          <div className="text">
            <h1>IoT & Robótica software</h1>
            <p>
              El futuro ya es presente y uno de nuestros objetivos es ser
              protagonistas. A través de nuestro equipo de IoT y Robótica
              participamos en la nueva revolución industrial gracias a las
              herramientas disponibles en la gran nube (Amazon Web Services y
              Microsoft) así como en desarrollos profesionales a medida.
            </p>
          </div>
        </div>
      </div>

      <div className="empleo-content">
        <div className="empleo-image">
          <Img
            fluid={data.image.nodes[1].childImageSharp.fluid}
            className="robotica-image"
          />
        </div>
        <div className="empleo-text">
          <h2>Soluciones IoT</h2>
          <p>
            En un entorno global e interconectado con cientos de dispositivos
            tanto en el ámbito doméstico como el industrial, el Internet de las
            Cosas (IoT) es una realidad y desde Qualoom queremos poner a
            disposición de compañías y particulares este nuevo ecosistema, de
            una manera gestionada y segura.
          </p>
        </div>
      </div>
      <div className="empleo-content">
        <div className="empleo-image">
          <Img
            fluid={data.image.nodes[0].childImageSharp.fluid}
            className="robotica-image"
          />
        </div>
        <div className="empleo-text">
          <h2>Robótica software</h2>
          <p>
            Te ayudamos a diseñar y construir robots y sistemas inteligentes en
            en el ámbito de proyectos del sector industrial, educativo y
            particular a partir de un equipo con una gran base de conocimientos,
            fundamentos y habilidades teórico-prácticas en disciplinas como el
            Desarrollo de Software Avanzado, la Inteligencia Artificial, la
            Electrónica, la Automática, el Control y la Robótica.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Empleo
