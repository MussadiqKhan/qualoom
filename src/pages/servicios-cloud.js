import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/style.css"

const Empleo = () => {
  const data = useStaticQuery(graphql`
    query Images_servicios {
      image: allFile(filter: { relativeDirectory: { eq: "servicios" } }) {
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
      <div className="servicios-content">
        <div>
          <div className="servicios-text">
            <h3>Advance Consulting Parnter Amazon Web Services</h3>
            <p style={{ marginTop: "50px" }}>
              La administración, gestión, provisión y continuidad de un centro
              de datos tradicional en determinadas ocasiones es una orientación
              que puede no encajar con el valor de su organizacicón y estar
              alejado de los nuevos paradigmas tecnológicos.
            </p>
            <br />
            <p>
              <b>Qualoom Expertise Technology</b> es <b>Partner Advance</b> con
              más de 7 años de experiencia en el diseño, implantación y
              mantenimiento de infraestructuras Cloud en Amazon Web Services.
            </p>
          </div>
          <div className="servicios-image">
            <Img fluid={data.image.nodes[0].childImageSharp.fluid} />
          </div>
        </div>
        <div className="servicios-image-container">
          <Img
            fluid={data.image.nodes[2].childImageSharp.fluid}
            className="servicios-image"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Empleo
