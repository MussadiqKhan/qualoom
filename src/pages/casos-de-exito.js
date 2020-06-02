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
            <Img fluid={data.image.nodes[0].childImageSharp.fluid} />
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
            <button className="descubre">Descubre más</button>
          </div>
        </div>
        <div className="casos-image">
          <Img fluid={data.image.nodes[3].childImageSharp.fluid} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Empleo
