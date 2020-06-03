import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/style.css"

const Empleo = () => {
  const data = useStaticQuery(graphql`
    query Images_bigdata {
      image: allFile(filter: { relativeDirectory: { eq: "bigdata" } }) {
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
        className="background-bigdata"
        style={{
          background: `url(../images/big-data-analytcis-qualoom.jpg)`,
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
          <Img
            fluid={data.image.nodes[2].childImageSharp.fluid}
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
            fluid={data.image.nodes[1].childImageSharp.fluid}
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
