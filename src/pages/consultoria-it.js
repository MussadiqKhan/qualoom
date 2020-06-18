import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/style.css"

const Empleo = () => {
  const data = useStaticQuery(graphql`
    query Images_consultoria {
      image: allFile(filter: { relativeDirectory: { eq: "consultia" } }) {
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
        <title>Consultoría IT - Qualoom</title>
        <meta
          name="description"
          content="Transformación TI. Diseño de arquitecturas escalables y con alta disponibilidad. DevOps, SysOps y SysAdmin. Planes de contigencia y continuidad ante desastres"
        />
      </Helmet>
      <BackgroundImage fluid={data.image.nodes[9].childImageSharp.fluid}>
        <div className="background-consultia">
          <div className="header_div">
            <Header />
          </div>
          <div className="main">
            <div className="empty"></div>
            <div className="text">
              <h1>Consultoría IT</h1>

              <h1></h1>
              <p>
                El área de las tecnologías de la información es nuestro
                ecosistema nativo. Podemos ayudarte a alcanzar los retos que tu
                organización estableza y siempre con un trato personalizado.
              </p>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <div className="consultia-main">
        <div className="consultia-content">
          <div className="consultia-section-1">
            <div className="consultia-images">
              <Img fluid={data.image.nodes[1].childImageSharp.fluid} />
            </div>
            <div className="consultia-text">
              <h3>Asesoramiento en procesos de transformación IT</h3>
              <p>
                Qualoom puede ayudarte en el proceso de transformación digital
                de tu organización y siempre desde un enfoque clave, un equipo
                involucrado con una cultura de la emprea, ágil, innovador y
                eficiente. A través de la implantación de Metologías ágiles,
                nuestro equipo PMP y el diseño e implementación de procesos a la
                medida de tu organización serán la vía para alcanzar los
                objetivos de transformación.
              </p>
            </div>
          </div>
          <div className="consultia-section-1">
            <div className="consultia-images">
              <Img fluid={data.image.nodes[5].childImageSharp.fluid} />
            </div>
            <div className="consultia-text">
              <h3>Optimización de infraestructuras y aplicaciones</h3>
              <p>
                Problemas de estabilidad, rendimiento o escalabilidad serán
                resueltos tanto si tiene una arquitectura en la nube, híbrida o
                tradicional a través del análisis de su arquitectura. Ajustamos
                todos los componentens de su sistema para que funcionen con la
                mayor precisión y con el menor coste posible.
              </p>
            </div>
          </div>
        </div>
        <div className="consultia-content">
          <div className="consultia-section-1">
            <div className="consultia-images">
              <Img fluid={data.image.nodes[0].childImageSharp.fluid} />
            </div>
            <div className="consultia-text">
              <h3>
                Diseño de arquitecturas altamente escalables y en alta
                disponibilidad
              </h3>
              <p>
                Un servicio global y disponbile las 24 horas del día los 365
                días del año puede requerir el aseguramento de la calidad del
                mismo con independiencia del número de usuarios que la utilicen.
                Nuestro equipo de especialistas diseñanarán una arquitectura
                capaz de resisitir un número ilimitado de usuarios, así como una
                arquitectutra tolerante a fallos con el menor coste posible.
              </p>
            </div>
          </div>
          <div className="consultia-section-1">
            <div className="consultia-images">
              <Img fluid={data.image.nodes[7].childImageSharp.fluid} />
            </div>
            <div className="consultia-text">
              <h3>Pruebas de estrés y tolerancia a fallos</h3>
              <p>
                ¿Cónoce los límites de su sistema? Es capaz de soportar el uso
                masivo de usuarios en horas concretas del día o de manera
                sostenida en el tiempo. ¿Sabe a partir de qué momento el sistema
                dejaría de estar operativo y de ofrecer un correcto nivel de
                servicio? A través de la definición de planes de prueba y de
                estrés desvelaremos todas estas incóginitas para mejorar la
                satisfacción de sus clientes y dimensionar sus sistema de la
                manera más adecuada.
              </p>
            </div>
          </div>
        </div>
        <div className="consultia-content">
          <div className="consultia-section-1">
            <div className="consultia-images">
              <Img fluid={data.image.nodes[3].childImageSharp.fluid} />
            </div>
            <div className="consultia-text">
              <h3>DevOps, SysOps y SysAdmin</h3>
              <p>
                Un equipo especializado certificado en DevOps, SysOps y SysAdmin
                con más de 10 años de experiencia es la garantía para liderar
                los proyectos más exigentes.
              </p>
            </div>
          </div>
          <div className="consultia-section-1">
            <div className="consultia-images">
              <Img fluid={data.image.nodes[6].childImageSharp.fluid} />
            </div>
            <div className="consultia-text">
              <h3>Diseño planes de contigencia y continuidad ante desastres</h3>
              <p>
                La definición de planes de contingencia y de recuperación ante
                desastres es clave para el correcto funcionamiento de una
                organización. A través del análisis de sus sistemas y su nivel
                de criticidad, le asesoramos en su diseño e implantación con el
                objetivo de disponer siempre de un Plan B.
              </p>
            </div>
          </div>
        </div>
        <div className="consultia-content">
          <div className="consultia-section-1">
            <div className="consultia-images">
              <Img fluid={data.image.nodes[2].childImageSharp.fluid} />
            </div>
            <div className="consultia-text">
              <h3>Auditoría de sistemas</h3>
              <p>
                La revisión y certificación de su sistema de información en base
                a organismos certificadores, auditorías de seguridad y de
                sistemas de información, permiten a la organización mantener el
                nivel de exigencia, estandarización e innovación adecuados.
              </p>
            </div>
          </div>
          <div className="consultia-section-1">
            <div className="consultia-images">
              <Img fluid={data.image.nodes[8].childImageSharp.fluid} />
            </div>
            <div className="consultia-text">
              <h3>Tiempo de respuesta inferior a 1 hora. SLAs</h3>
              <p>
                Qualoom puede ayudarte en el proceso de transformación digital
                de tu organización y siempre desde un enfoque clave, un equipo
                involucrado con una cultura de la emprea, ágil, innovador y
                eficiente. A través de la implantación de Metologías ágiles,
                nuestro equipo PMP y el diseño e implementación de procesos a la
                medida de tu organización serán la vía para alcanzar los
                objetivos de transformación.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Empleo
