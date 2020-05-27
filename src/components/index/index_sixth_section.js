import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "../../styles/index/index_third_section.css"

const IndexSixthSection = () => {
  const data = useStaticQuery(graphql`
    query Images_3 {
      image: file(relativePath: { eq: "d-desarrollo-software-qualoom-2.jpg" }) {
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
        <h1>Desarrollo Software</h1>
        <hr />
        <p>
          Una idea, un nuevo proyecto, un proyecto que no acaba de arrancar
          debido a una deuda tecnológica insalvable. El área de desarrollo de
          Qualoom especialistas en desarrollo backend, frontend y movilidad te
          permitirá alcanzar tus objetivos convirtiendo los problemas en retos y
          el día a día en una motivación de mejora y excelencia.
        </p>

        <button className="descubre">Descubre más</button>
      </div>
    </div>
  )
}

export default IndexSixthSection
