import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/style.css"

const Empleo = () => {
  const data = useStaticQuery(graphql`
    query Images_software {
      image: allFile(
        filter: { relativeDirectory: { eq: "software" } }
        sort: { fields: size, order: ASC }
      ) {
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
        <title>Desarrollo Software - Qualoom</title>
        <meta
          name="description"
          content="El área de desarrollo de Qualoom especialista en desarrollo backend, frontend y movilidad te permitirá alcanzar tus objetivos"
        />
      </Helmet>
      <BackgroundImage fluid={data.image.nodes[1].childImageSharp.fluid}>
        <div className="background-software">
          <div className="header_div">
            <Header />
          </div>
          <div className="main">
            <div className="empty"></div>
            <div className="text">
              <h1>Desarrollo Software</h1>

              <h1></h1>
              <p>
                Una idea, un nuevo proyecto, un proyecto que no acaba de
                arrancar debido a una deuda tecnológica insalvable. El área de
                desarrollo de Qualoom especialistas en desarrollo backend,
                frontend y movilidad te permitirá alcanzar tus objetivos
                conviertiendo los problemas en retos y el día a día en una
                motivación de mejora y excelencia.
              </p>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <div className="casos-content-main">
        <div className="casos-content">
          <div className="casos-text">
            <h2 style={{ marginBottom: "20px" }}>
              Diseño de aplicaciones móviles
            </h2>
            <p style={{ marginBottom: "20px" }}>
              Diseñamos, desarrollamos y desplegamos aplicaciones móviles como
              solución a tus ideas y proyectos con las últimas tecnología para
              las plataformas Android e iOS.
            </p>
          </div>
        </div>
        <div className="casos-image" style={{ marginLeft: "50px" }}>
          <Img fluid={data.image.nodes[0].childImageSharp.fluid} />
        </div>
      </div>
      <div className="casos-content-main reverse">
        <div className="casos-image" style={{ marginRight: "50px" }}>
          <Img fluid={data.image.nodes[1].childImageSharp.fluid} />
        </div>
        <div className="casos-content casos-content-mobile">
          <div className="casos-text">
            <h2 style={{ marginBottom: "20px" }}>
              Desarrollo de aplicaciones de servidor
            </h2>
            <p style={{ marginBottom: "20px" }}>
              Detras de una gran aplicación hay un gran backend. Con esta máxima
              y gracias a nuestro equipo de desarroladores te ofrecemos la
              posbilidad de construir y evoluciones aplicaciones backend en los
              ecosistemas más importantes: java, C# .Net, C, Ruby, Python
            </p>
          </div>
        </div>
      </div>
      <div className="casos-content-main">
        <div className="casos-content">
          <div className="casos-text">
            <h2 style={{ marginBottom: "20px" }}>
              Optimización y mantenimiento de aplicaciones
            </h2>
            <p style={{ marginBottom: "20px" }}>
              ¿Problemas de rendimiento? ¿Innumerables anomalías tras poner el
              sistema en producción?. Qualoom te ofrece la posibilidad de
              analizar tus aplicaciones para ofrecer soluciones a problemas de
              rendimiento a través de un completo dossier de pruebas funcionales
              y de estress.
            </p>
          </div>
        </div>
        <div className="casos-image" style={{ marginLeft: "50px" }}>
          <Img fluid={data.image.nodes[2].childImageSharp.fluid} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Empleo
