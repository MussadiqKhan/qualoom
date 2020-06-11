import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
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
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <div
        className="background-casos"
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
        <ol className="blog-posts">
          {data.allContentfulBlogPost.edges.map(edge => (
            <Link to={`/blog/${edge.node.Slug}`}>
              <li>
                <h2>{edge.node.Title}</h2>
                <p style={{ fontStyle: "italic" }}>{edge.node.publishedDate}</p>
              </li>
            </Link>
          ))}
        </ol>
      </div>

      <Footer />
    </div>
  )
}
