import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/style.css"

const Empleo = () => {
  const data = useStaticQuery(graphql`
    query Images_bigdata {
      image: allFile(
        filter: { relativeDirectory: { eq: "bigdata" } }
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
  return (
    <div>
      <Helmet>
        <title>Datos, Bigdata & Analytics - Qualoom</title>
        <meta
          name="description"
          content="El valor del dato es una realidad, pero almacenarlo, explotarlo y ponerlo a disposición en un formato, tiempo y medio adecuado solo está alcance de unos pocos."
        />
      </Helmet>
      <BackgroundImage fluid={data.image.nodes[3].childImageSharp.fluid}>
        <div className="background-bigdata">
          <div className="header_div">
            <Header />
          </div>
          <div className="main">
            <div className="empty"></div>
            <div className="text">
              <h1>Bigdata & Analytics</h1>
              <p>
                El valor del dato es una realidad, pero almacenarlo, explotarlo
                y ponerlo a disposición en un formato, tiempo y medio adecuado
                solo está alcance de unos pocos. Nuestros servicios te
                permitirán identificar todos aquellos KPIs que hasta el momento
                han pasado desapercibidos, preocupándote solo de mejorar tu
                servicio. Nosotros, de garantizar que tienes los medios.
              </p>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <div className="empleo-content">
        <div className="empleo-image">
          <Img
            fluid={data.image.nodes[1].childImageSharp.fluid}
            className="data-image"
          />
        </div>
        <div className="empleo-text">
          <h2>Diseño e implementación de arquicteturas Big data</h2>
          <p>
            Diseñamos y ayudamos a poner en funcionamiento su plataforma de
            analítica BigData en AWS haciendo uso de las tecnologías más
            innovadoras del sector para la implementación de Datalakes y
            Datawarehouses, todo ello con un coste operacional adaptado al
            tamaño de sus datos y otorgando la máxima flexibilidad posible para
            la implementación de nuevos flujos de analítica empresarial.
          </p>
        </div>
      </div>
      <div className="empleo-content">
        <div className="empleo-image">
          <Img
            fluid={data.image.nodes[2].childImageSharp.fluid}
            className="data-image"
          />
        </div>
        <div className="empleo-text">
          <h2>Ingesta, almacenamiento y procesamiento de datos</h2>
          <p>
            Nuestros ingenieros le ayudarán a implementar los procedimientos
            óptimos para la importación y optimización de sus datos.
            Importaciones de datos masivos, pasarelas de almacenamiento para
            sistemas OnPremise, procesos de ingesta incremental, streaming, IoT…
            nuestro equipo se encargará de coordinar e implementar todos los
            procesos de infraestructura necesarios. Optimice y prepare sus datos
            automáticamente para poder ejecutar consultas avanzadas. Nuestros
            ingenieros le ayudarán a definir su catálogo de datos, implementar
            rastreadores para descubrimiento automático de esquemas en datos no
            estructurados, e implementar transformaciones y optimizaciones que
            permitan una ejecución óptima de sus procesos de consulta y
            visualización.
          </p>
        </div>
      </div>
      <div className="empleo-content">
        <div className="empleo-image">
          <Img
            fluid={data.image.nodes[0].childImageSharp.fluid}
            className="data-image"
          />
        </div>
        <div className="empleo-text">
          <h2>Análisis avanzado de datos</h2>
          <p>
            Proporcione a sus científicos de datos entornos de trabajo con la
            potencia y funcionalidad que necesiten. Desde Qualoom le ayudaremos
            a elegir la tecnología adecuada que se ajuste a sus necesidades sin
            por ello incurrir en un coste operacional fuera de su presupuesto.
            Despliegue clusters Hadoop/Spark a la escala que requieran sus
            equipos de trabajo para el procesamiento avanzado con frameworks de
            análisis estadístico, deep learning y machine learning, dotándoles
            de la infraestructura de procesamiento que estos requieran:
            Procesamiento en GPU, almacenamiento y redes de alto rendimiento o
            cargas intensivas en memoria. Nuestro equipo de ingenieros le
            ayudará a elegir la infraestructura adecuada a sus necesidades.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Empleo
