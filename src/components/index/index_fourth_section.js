import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "../../styles/index/index_fourth_section.css"

const IndexFourthSection = () => {
  const data = useStaticQuery(graphql`
    query Images_1 {
      image: file(relativePath: { eq: "c-Dashboard-BigData.png" }) {
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
    <div className="main_fourth">
      <div className="content_wrapper_right">
        <h1>Bigdata & Analystics</h1>
        <hr />
        <p>
          El valor del dato es una realidad, pero almacenarlo, explotarlo y
          ponerlo a disposición en un formato, tiempo y medio adecuado solo está
          alcance de unos pocos. Nuestros servicios te permitirán identificar
          todos aquellos KPIs que hasta el momento han pasado desapercibidos,
          preocupándote solo de mejorar tu servicio. Nosotros, de garantizar que
          tienes los medios.
        </p>

        <button className="descubre">Descubre más</button>
      </div>
      <div className="image_wrapper_right">
        <Img fluid={data.image.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default IndexFourthSection
