import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/blog.css"

export default function PostList(props) {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : (currentPage - 1).toString()
  const nextPage = "/blog/" + (currentPage + 1).toString()
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
        <div className="blog-posts">
          {props.data.allContentfulBlogPost.edges.map(edge => (
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
        <div className="pagination">
          <div className="first">
            {!isFirst && (
              <Link to={prevPage} rel="prev" style={{ color: "black" }}>
                ← Previous Page
              </Link>
            )}
          </div>
          <div className="first">
            {!isLast && (
              <Link to={nextPage} rel="next" style={{ color: "black" }}>
                Next Page →
              </Link>
            )}
          </div>
          {Array.from({ length: numPages }, (_, i) => (
            <div className="pagination-number">
              <Link
                key={`pagination-number${i + 1}`}
                to={`/blog/${i === 0 ? "" : i + 1}`}
                style={{ color: "black" }}
                activeClassName="active"
              >
                {i + 1}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: publishedDate, order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
`
