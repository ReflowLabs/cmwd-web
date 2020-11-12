import React, { Component } from "react"
import { Link } from "gatsby"
import Tags from "./tag"

export default props => (
  <article
    className={`post-card no-image ${props.postClass}`}
    style={
      props.node.frontmatter.thumbnail
        ? {
            backgroundImage: `
        url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' fill='${props.node.frontmatter.color}'><path d='M0 64 L48 64 L64 0 L0 16 Z'/></svg>"),
        url(${props.node.frontmatter.thumbnail.childImageSharp.fluid.src})`,
          }
        : {
            background: `${props.node.frontmatter.color || "#ffaee2"}`,
          }
    }
  >
    <Content props={props} />
  </article>
)

class Content extends Component {
  render() {
    const { props } = this.props
    return (
      <div className="post-card-content">
        <div>
          <Tags tags={props.node.frontmatter.tags} />
        </div>
        <div>
          <Link to={props.node.fields.slug} className="post-card-link">
            <h2 className="post-card-title">
              {props.node.frontmatter.title || props.node.fields.slug}
            </h2>
          </Link>
        </div>
        <div className="post-card-date">{props.node.frontmatter.date}</div>
        <div className="post-card-body">
          {props.node.frontmatter.description || props.node.excerpt}
        </div>
        <div>
          <Link
            to={props.node.fields.slug}
            className="post-card-link post-card-readmore"
          >
            {props.node.frontmatter.description || props.node.excerpt
              ? "Read more"
              : null}
          </Link>
        </div>
      </div>
    )
  }
}

// class ContentWithImage extends Component {
//   render() {
//     const { props } = this.props
//     return (
//       <Link to={props.node.fields.slug} className="post-card-link">
//         <div className="post-card-content">
//           <h2 className="post-card-title">
//             {props.node.frontmatter.title || props.node.fields.slug}
//           </h2>
//         </div>
//       </Link>
//     )
//   }
// }
