import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  console.log(data.image.nodes[2].childImageSharp.fluid)
  return (
    <div>
      <Helmet>
        <title>Casos de éxito - Qualoom</title>
        <meta
          name="description"
          content="Nuestra mejor carta de presentación son nuestros clientes: Interflora, Vocento,La Liga o Telefonica entre otros, nuestra marca en quién confiar."
        />
      </Helmet>
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
      <div className="casos-content-main">
        <div className="casos-content">
          <div className="casos-logo">
            <Img fluid={data.image.nodes[2].childImageSharp.fluid} />
          </div>

          <div className="casos-text">
            <p style={{ marginBottom: "20px" }}>
              Qualoom ha sido el partner español de Amazon Web Services (AWS)
              seleccionado por Fleurop Interflora España S.A. para realizar la
              migración de su infraestructura a la nube y dar soporte continuado
              una vez en producción. Interflora es el líder en el negocio de la
              gestión de encargos florales y plantas naturales en España y una
              de las divisiones más significativas de la red global de Fleurop
              Inc.
            </p>
            <Link to="/caso-de-exito-interflora">
              <button className="descubre">Descubre más</button>
            </Link>
          </div>
        </div>
        <div className="casos-image" style={{ marginLeft: "50px" }}>
          <Img fluid={data.image.nodes[5].childImageSharp.fluid} />
        </div>
      </div>
      <div className="casos-content-main reverse">
        <div className="casos-image" style={{ marginRight: "50px" }}>
          <Img fluid={data.image.nodes[4].childImageSharp.fluid} />
        </div>
        <div className="casos-content casos-content-mobile">
          <div className="casos-logo">
            <Img fluid={data.image.nodes[1].childImageSharp.fluid} />
          </div>

          <div className="casos-text">
            <p style={{ marginBottom: "20px" }}>
              La Liga Fantasy, un fenómeno nacional e internacional al que se
              suman cada día miles de usuarios con la posibilidad de diseñar sus
              equipo y competir por ganar una de las ligas de futbol más
              importantes del mundo. Nuestro reto, operar y administrar la
              infraestructura 24x7x365 días al año con una disponibilidad del
              99.99% a través de nuestro equipo de DevOps, SysOps en Amazon Web
              Services.
            </p>
          </div>
        </div>
      </div>
      <div className="casos-content-main">
        <div className="casos-content">
          <div className="casos-logo">
            <Img fluid={data.image.nodes[3].childImageSharp.fluid} />
          </div>

          <div className="casos-text ">
            <p style={{ marginBottom: "20px" }}>
              Qualoom ha sido el partner español de Amazon Web Services (AWS)
              seleccionado por Fleurop Interflora España S.A. para realizar la
              migración de su infraestructura a la nube y dar soporte continuado
              una vez en producción. Interflora es el líder en el negocio de la
              gestión de encargos florales y plantas naturales en España y una
              de las divisiones más significativas de la red global de Fleurop
              Inc.
            </p>
          </div>
        </div>
        <div className="casos-image" style={{ marginLeft: "50px" }}>
          <Img fluid={data.image.nodes[0].childImageSharp.fluid} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Empleo
