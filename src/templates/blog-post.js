import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"
import PostCard from "../components/postCard"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <header className="post-header">
          <PostCard node={post} noLinks />
        </header>
        <article className={`post-content`}>
          {/* <header className="post-content-header">
            <h1 className="post-content-title">{post.frontmatter.title}</h1>
            {post.frontmatter.description && (
              <p className="post-content-excerpt">
                {post.frontmatter.description}
              </p>
            )}
            <h3 className="post-content-info">
              {post.frontmatter.date} @ {post.frontmatter.time} -{" "}
              {post.frontmatter.location}
            </h3>
          </header> */}
          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <hr />
          <Map location={post.frontmatter.location} />
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        description
        color
        tags
        special
        number
        location
        time
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
