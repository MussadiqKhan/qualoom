import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "../../styles/index/index_fifth_section.css"

const IndexFifthSection = () => {
  const data = useStaticQuery(graphql`
    query Images_2 {
      image: allFile(filter: { relativeDirectory: { eq: "logo" } }) {
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
  console.log(data)
  return (
    <div className="main_fifth">
      <div className="logo_content">
        <h2>Nuestros principales clientes y socios</h2>
        <p>
          Nuestra mejor carta de presentación con nuestros clientes y su
          confianza
        </p>
      </div>
      <div className="clients_logo">
        {data.image.nodes.map(img => (
          <div className="child">
            <Img fluid={img.childImageSharp.fluid} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default IndexFifthSection
