import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/blog.css"

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            Title
            Slug
            description
            featuredImage {
              file {
                url
              }
            }
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <Helmet>
        <title>Nuestro Blog - Qualoom</title>
        <meta
          name="description"
          content="Actualidad Qualoom. Todas las noticias y novedades que te pueden resultar de interés y queremos compartir contigo y tu organización"
        />
      </Helmet>
      <div
        className="background-offering"
        style={{
          background: `url(../images/a-qualoom-home.jpg)`,
        }}
      >
        <div className="header_div">
          <Header />
        </div>
        <div className="main">
          <div className="empty"></div>
          <div className="text">
            <h1>Blog Section</h1>

            <p></p>
          </div>
        </div>
      </div>
      <div className="blog-main-page">
        <div className="blog-posts">
          {data.allContentfulBlogPost.edges.map(edge => (
            <Link to={`/blog/${edge.node.Slug}`}>
              <div className="blog-post">
                <div className="blog-post-image">
                  {" "}
                  {edge.node.featuredImage ? (
                    <img
                      src={
                        edge.node.featuredImage.file.url +
                        "?fm=jpg&fl=progressive"
                      }
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="blog-post-title">
                  <h2>{edge.node.Title}</h2>
                  <p style={{ fontStyle: "italic" }}>
                    {edge.node.publishedDate}
                  </p>
                  <p>{edge.node.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
