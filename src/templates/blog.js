import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/blog.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql, useStaticQuery, Link } from "gatsby"
export const query = graphql`
  query($Slug: String!) {
    contentfulBlogPost(Slug: { eq: $Slug }) {
      Title
      description
      featuredImage {
        file {
          url
        }
      }
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`
const Post = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url =
          node.data.target.fields.file["en-US"].url + "?fm=jpg&fl=progressive"
        return (
          <img
            alt={alt}
            src={url}
            style={{ width: "300px", height: "300px" }}
          />
        )
      },
    },
  }

  return (
    <div>
      <Helmet>
        <title>{props.data.contentfulBlogPost.Title}</title>
        <meta
          name="description"
          content={props.data.contentfulBlogPost.description}
        />
      </Helmet>
      <div
        className="background-post"
        style={{
          background: `url(${props.data.contentfulBlogPost.featuredImage.file.url})`,
        }}
      >
        <div className="header_div">
          <Header />
        </div>
        <div className="main">
          <div className="empty"></div>
          <div className="text">
            <h1>{props.data.contentfulBlogPost.Title}</h1>
            <p style={{ textAlign: "left !important", justifyContent: "none" }}>
              {props.data.contentfulBlogPost.publishedDate}
            </p>
          </div>
        </div>
      </div>
      <div className="post">
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Post
