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
    query Images_compania {
      image: allFile(filter: { relativeDirectory: { eq: "compania" } }) {
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
  console.log(data.image.nodes[0].childImageSharp.fluid)
  return (
    <div>
      <Helmet>
        <title>Nuestra Empresa - Qualoom</title>
        <meta
          name="description"
          content="Qualoom es una compañía española TI con más de 10 años de experiencia en Soluciones Cloud, BigData & Analytics, Desarrollo de Software, IoT & Robótica."
        />
      </Helmet>
      <BackgroundImage fluid={data.image.nodes[3].childImageSharp.fluid}>
        <div className="background-compania">
          <div className="header_div">
            <Header />
          </div>
          <div className="main">
            <div className="empty"></div>
            <div className="text">
              <h1>Descubre una nueva manera de innovar</h1>

              <h1></h1>
              <p>
                Qualoom Expertise Technology es una compañía española del sector
                de las tecnologías de la información con más de 10 años de
                experiencia que desarrolla su actividad en el ámbito de la
                Consultoría IT, Soluciones Cloud, BigData & Analytics,
                Desarrollo de Software, IoT & Robótica Software.
              </p>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <div className="casos-content-main">
        <div className="casos-content">
          <div className="casos-text">
            <h2 style={{ marginBottom: "20px" }}>Compañía</h2>
            <p style={{ marginBottom: "20px" }}>
              Una compañía capaz de ayudar a más de 200 empresas a impulsar su
              negocio con nuestras soluciones de valor: DevOps, SysOps,
              SysAdmin, Infraestructuras altamente esclables y altamente
              disponibles, proyectos de migración a la nube, Cloud hibrida,
              planes de recuperación ante desastres, Desarrollo Software,
              BigData, Analisis de datos y nuestro nuevo equipo de IoT, nos
              permiten estar en la liga de las compañías más demandas de
              servicios IT de valor añadido y pertenecer a la red de socios de
              empresas de empresas como Amazon Web Services como{" "}
              <b>Partner Advance AWS y Microsoft</b>.
            </p>
          </div>
        </div>
        <div className="casos-image" style={{ marginLeft: "50px" }}>
          <Img fluid={data.image.nodes[2].childImageSharp.fluid} />
        </div>
      </div>
      <div className="casos-content-main reverse">
        <div className="casos-image" style={{ marginRight: "50px" }}>
          <Img fluid={data.image.nodes[0].childImageSharp.fluid} />
        </div>
        <div className="casos-content casos-content-mobile">
          <div className="casos-text">
            <h2 style={{ marginBottom: "20px" }}>Nuestro equipo</h2>
            <p style={{ marginBottom: "20px" }}>
              Un equipo comprometido con la excelencia y orientado a resultados.
              Ponemos a disposición de nuestros socios y clientes el
              conocimiento y experiencia de más de 10 años en un sector tan
              dinámico como el de las tecnologías de la información avalado por
              certificaciones oficiales de los proveedores más importantes como
              AWS, Microsoft, DELL, HP, CISCO. <br /> Un equipo con los mejores
              profesionales en constante formación, investigación y desarrollo
              gracias a programas I+d+i que nos permiten estar en el momento y
              sitio adecuado.
            </p>
          </div>
        </div>
      </div>
      <div className="casos-content-main">
        <div className="casos-content">
          <div className="casos-text">
            <h2 style={{ marginBottom: "20px" }}>
              Seguridad y Certificaciones
            </h2>
            <p style={{ marginBottom: "20px" }}>
              Toda nuestra actividad se realiza bajo estrictias medidas de
              seguridad y cumplimento de los estándares internacionales tales
              como PCI DSS, ISO 27001 o la RGPD. Además, implementamos métodos y
              procedimientos de caracter interno para que nuestros equipos de
              trabajo desarrollen su actividad en entornos ágiles que permitan
              una interacción segura, confidencial y consistente con nuestra red
              de socios y clientes.
            </p>
          </div>
        </div>
        <div className="casos-image" style={{ marginLeft: "50px" }}>
          <Img fluid={data.image.nodes[1].childImageSharp.fluid} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Empleo
