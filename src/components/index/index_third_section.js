import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import "../../styles/index/index_third_section.css"

const IndexThirdSection = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "soluciones-cloud-qualoom.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className="main_third">
      <div className="image_wrapper">
        <Img fluid={data.image.childImageSharp.fluid} />
      </div>
      <div className="content_wrapper">
        <h1>Soluciones Cloud</h1>
        <hr />
        <p>
          Advance Consulting Partner de Amazon Web Services con más de 7 años de
          experiencia en proyectos de migración a la gran nube, Reseller AWS y
          miembro del programa de competencias: Digital Customer Experience
          Competence y Migration/DevOps Competence permiten que cientos de
          clientes hayan confiado en nosotros para impulsar, asegurar y
          evolucionar sus servicios.
        </p>

        <Link to="/servicios-cloud">
          <button className="descubre">Descubre más</button>
        </Link>
      </div>
    </div>
  )
}

export default IndexThirdSection
