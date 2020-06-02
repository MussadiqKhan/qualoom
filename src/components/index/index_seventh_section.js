import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "../../styles/index/index_fourth_section.css"

const IndexSeventhSection = () => {
  const data = useStaticQuery(graphql`
    query Images_4 {
      image: file(relativePath: { eq: "e-iot-robotica-software.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="main_fourth">
      <div className="content_wrapper_right">
        <h1>IoT & Robótica Software</h1>
        <hr />
        <p>
          Nuestro área especializada en IoT & Robótica te permitirá liderar los
          proyectos más innovadores con las últimas tecnologías. Expertos en
          electrónica y conocedores de los mejores proveedores de servicios IoT
          así como empresas líder en el diseño de soluciones de robótica
          software, ponemos a tu disposición soluciones de formación y
          productivas para entornos domésticos, comerciales e industriales.
        </p>

        <button className="descubre">Descubre más</button>
      </div>
      <div className="image_wrapper_right">
        <Img fluid={data.image.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default IndexSeventhSection
