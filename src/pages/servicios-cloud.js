import React from "react"
import { Helmet } from "react-helmet"
import BackgroundImage from "gatsby-background-image"
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
      <Helmet>
        <title>Soluciones y Servicios Cloud - Qualoom</title>
        <meta
          name="description"
          content="Advance Consulting Partner de AWS con competencias DCX Digital Customer Experience Competence, Migration/DevOps Competence y Public Sector (Sector Público)"
        />
      </Helmet>
      <BackgroundImage fluid={data.image.nodes[4].childImageSharp.fluid}>
        <div className="background-servicios">
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
      </BackgroundImage>
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
            <Img fluid={data.image.nodes[3].childImageSharp.fluid} />
          </div>
        </div>
        <div className="servicios-image-container">
          <Img
            fluid={data.image.nodes[0].childImageSharp.fluid}
            className="servicios-image mobile"
          />
        </div>
      </div>
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>
        Consulta nuestra oferta de servcicios
      </h1>
      <div className="servicios-main">
        <div className="consultia-content">
          <div className="consultia-section-1">
            <div className="consultia-images">
              <Img fluid={data.image.nodes[1].childImageSharp.fluid} />
            </div>
            <div className="consultia-text">
              <h3>Diseño e implementación de arquitetura en Cloud</h3>
              <p style={{ marginBottom: "20px" }}>
                Diseñamos y adaptamos la arquitectura de sus aplicaciones de
                negocio para ayudarle a obtener la máxima disponibilidad y
                escalabilidad en el menor tiempo posible, tanto si se trata de
                infraestructuras tradicionales como si ha decidido dar el salto
                a la nube de Amazon Web Services.
              </p>
            </div>
          </div>
          <div className="consultia-section-1">
            <div className="consultia-images">
              <Img fluid={data.image.nodes[2].childImageSharp.fluid} />
            </div>
            <div className="consultia-text">
              <h3>Migración y mantenimiento de infraestructuras híbridas</h3>
              <p>
                Le ayudamos a desarrollar y ejecutar el plan de migración más
                adecuado las necesidades de su orgnaizacón, un plan sólido,
                consistente y sin riesgos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="video-main">
        <div className="video-1">
          <iframe
            width="470"
            height="265"
            src="https://www.youtube.com/embed/bHUwOuxmYIc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="video-2">
          <iframe
            width="470"
            height="265"
            src="https://www.youtube.com/embed/4Vbtvc5OXz8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Empleo
