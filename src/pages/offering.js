import React from "react"
import { graphql, useStaticQuery, withPrefix } from "gatsby"
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
        <div className="text-acc">
          <h2>En qué podemos ayudarte</h2>
          <p>
            Podemos ayudar a tu proyecto de diferentes formas. Te exponemos unos
            ejemplos.
          </p>
        </div>
        <div className="acc">
          <Accordion allowZeroExpanded="true" className="accordion-main">
            <AccordionItem className="accordion__item">
              <AccordionItemHeading>
                <AccordionItemButton>
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel aria-expanded="false">
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <button className="contacta">CONTACTA CON NOSOTROS</button>
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
      <Footer />
    </div>
  )
}

export default Offering
