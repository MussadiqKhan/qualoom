import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery, withPrefix, Link } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/style.css"
import "react-accessible-accordion/dist/fancy-example.css"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const Offering = () => {
  const data = useStaticQuery(graphql`
    query Images_offering {
      image: allFile(filter: { relativeDirectory: { eq: "offering" } }) {
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
        <title>Servicio de asesoramiento gratuito - Qualoom</title>
        <meta
          name="description"
          content="Qualoom te ofrece una primera consulta para orientar tu idea, proyecto o migración a la nube. Aprovecha nuestro servicio de asesoramiento gratuito."
        />
      </Helmet>
      <div
        className="background-offering"
        style={{
          background: `url(../images/seguridad-y-certificaiciones-qualoom.png)`,
        }}
      >
        <div className="header_div">
          <Header />
        </div>
        <div className="main">
          <div className="empty"></div>
          <div className="text">
            <h1>Servicio de asesoramiento gratuito</h1>
            <p>
              Necesitas una primera consulta para conocer la mejor orientación a
              tu idea o proyecto. Estás pensando en realizar una migración a la
              nube y no tiene clara la estrategía ni los activos de tu
              organización que se verán afectados. Aprovéchate de nuestro
              servicio de asesoramiento gratuito destinado al arranque de este
              tipo de proyectos.
            </p>
          </div>
        </div>
      </div>
      <div className="servicios-content">
        <div>
          <div className="servicios-text">
            <h3>Siempre es bueno saber por dónde empezar</h3>
            <p style={{ marginTop: "50px" }}>
              Un buen comienzo siempre facilita la continuidad de un proyecto,
              por eso si estás pensando en dar el primer paso, te invitamos a
              que nos contactes con independencia del tipo de proyecto y sin
              copromiso. Ponemos a tu disposición la oportunidad de contactar
              con nuestro equipo de especialistas con el fin de dar los primeros
              pasos y resolver las principales dudas así como planteanimientos
              generales.
            </p>
            <br />
            <p>
              Con nuestra valoración obtendrás información crítica de cuáles son
              tus debilidades y fortalezas, identificarás los puntos en los que
              deberías poner especial atención y todo ello desde las diferentes
              puntos de vista legal, negocio y tecnológico.
            </p>
          </div>
        </div>
        <div className="servicios-image-container">
          <Img
            fluid={data.image.nodes[1].childImageSharp.fluid}
            className="servicios-image mobile"
          />
        </div>
      </div>
      <div className="accordion1">
        <div className="text-acc" style={{ marginRight: "50px" }}>
          <h2>En qué podemos ayudarte</h2>
          <p>
            Podemos ayudar a tu proyecto de diferentes formas.
            <br /> Te exponemos unos ejemplos.
          </p>
        </div>
        <div className="acc">
          <Accordion allowZeroExpanded="true" className="accordion-main">
            <AccordionItem className="accordion__item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  MIGRACIÓN AL CLOUD AWS
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel aria-expanded="false">
                <p>
                  Como expertos en la materia y{" "}
                  <b>Partner Advance de Amazon Web Services</b> desde hace más
                  de 10 años, te invitamos a sacar partido de nuestro de
                  servicio de offering para adentrarte en un mundo apasionante y
                  que reducirá tus costes de infraestructura notablemente además
                  de tener a tu disposición un conjunto de productos y
                  herramientas que darán a tu negocio la dimensión que necesita.
                  Consúltanos potenciales plazos, costes estimados de AWs y de
                  ejecución del proyecto, resolución de potenciales escenarios,
                  otros
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  DISEÑO Y DESPLIEGUE DE ARQUITECTURA BIG DATA{" "}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  ¿El modelo de ingesta de datos es el correcto? ¿Las etapas de
                  explotación de datos es la más eficiente? ¿El tipo de servidor
                  utilizado y el rendimiento me permitirán procesar los datos en
                  el momento en el que los necesito tener disponible? ¿Cuándo
                  tiempo podría requerir el diseño y despliegue de un dashboard?
                  ¿En qué consiste la integración con otros sistemas?
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <Link to="/contacto">
            {" "}
            <button className="contacta">CONTACTA CON NOSOTROS</button>
          </Link>
        </div>
      </div>
      <div className="text-cards">
        <h2>¿Por qué escogernos?</h2>
        <p>
          Sencillo. Por la confianza, solidez, seguridad y sobretodo
          transparencia durante todas las etapas del proyecto. Pero no lo
          decimos nosotros, lo avalan nuestros clientes y socios
        </p>
      </div>
      <div className="cards-parent">
        <div className="card">
          <Img
            fluid={data.image.nodes[3].childImageSharp.fluid}
            className="card-image"
          />
          <p className="card-heading">
            <b>RELACIÓN DE CONFIANZA</b>
          </p>
          <p className="card-text">
            A través de nuestra metología y seguimiento de proyectos, juto con
            nuestro equipo en todas sus dispondrás del mejor aliado.
          </p>
        </div>
        <div className="card">
          <Img
            fluid={data.image.nodes[0].childImageSharp.fluid}
            className="card-image"
          />
          <p className="card-heading">
            <b>GARANTÍA DE SATISFACCIÓN</b>
          </p>
          <p className="card-text">
            odas nuestras acciones van encaminadas a la consecución de los
            objetivos del proyecto junto con la satisfacción de sus
            participantes y los usuarios finales.
          </p>
        </div>
        <div className="card">
          <Img
            fluid={data.image.nodes[4].childImageSharp.fluid}
            className="card-image"
          />
          <p className="card-heading">
            <b>CERTIFICACIÓN Y VALIDACIÓN</b>
          </p>
          <p className="card-text">
            Todos nuestros servicios se ofrecen bajo estrictos niveles de
            certificación y validación para disponer de una correcta
            trazabilidad, mejorando la ejecución y manteninimiento posterior de
            los sistemas.
          </p>
        </div>
        <div className="card">
          <Img
            fluid={data.image.nodes[2].childImageSharp.fluid}
            className="card-image"
          />
          <p className="card-heading">
            <b>AYUDAMOS A OPTIMIZAR LOS COSTES</b>
          </p>
          <p className="card-text">
            Todos nuestros diseños van encaminados a la reducción y contención
            de costes sin que ello implique una pérdida en la calidad del
            servicio
          </p>
        </div>
      </div>
      <div className="text-cards">
        <h2>Testimonios</h2>
      </div>
      <div className="cards-parent review-parent">
        <div className="card review">
          <h3 className="card-heading">
            <b>Interflora</b>
          </h3>
          <p className="card-text" style={{ textAlign: "left" }}>
            Nuestra experiencia en Interflora con Qualoom fue altamente
            gratificante. Antes de contratar sus servicios nuestra
            infraestructura era realmente deficiente y un verdadero lastre para
            el desarrollo de la empresa, comparar lo que teníamos con lo que
            tenemos actualmente, es como comparar la noche con el día.
            <br />
            Actualmente gracias a Qualoom todos aquellos problemas han quedado
            en el olvido y ello supone mantener un desarrollo eficaz para
            nuestra empresa, siempre con la confianza y la seguridad de saber
            que en caso de ocurrir cualquier problema, por pequeño que sea, los
            chicos de Qualoom lo solventarán en el menor tiempo posible. <br />{" "}
            Más allá de contratar un servicio magnífico, también contratamos en
            función de saber que nos proporcionan un trato personalizado,
            generando una confianza que dentro de este sector, es lo que nos
            genera más valor.
            <br />
            <br />
            <i>Gustavo Fernández, CIO</i>
            <br />
            <i style={{ color: "blue" }}>https://www.interflora.es/</i>
          </p>
        </div>
        <div className="card review">
          <h3 className="card-heading">
            <b>Boston Servicios</b>
          </h3>
          <p className="card-text" style={{ textAlign: "left" }}>
            Boston Medical Group se caracteriza por dar un servicio atento y
            distinguido a nuestros clientes, un trato altamente personalizado,
            por ello depositamos en Qualoom el proceso de integrar nuestra
            infraestructura en la nube. <br /> Consideramos que nuestra
            asociación con Qualoom fue un paso adelante en nuestro desarrollo y
            nuestras ambiciones, consolidando nuestra infraestructura en todas
            las zonas geográficas donde estamos presentes, y siempre con Qualoom
            como soporte y seguridad de nuestro desarrollo.
            <br /> <br />
            <i>Manuel Cerezo, CIO</i>
            <br />
            <i style={{ color: "blue" }}>
              http://www.bostonserviciosmedicos.es/
            </i>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Offering
