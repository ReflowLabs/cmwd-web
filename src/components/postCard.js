import React, { Component } from "react"
import { Link } from "gatsby"
import Tags from "./tag"

function padNumber(num) {
  return `000${num}`.slice(-3)
}

export default props => (
  <article className={`post-card ${props.postClass}`}>
    <div
      className="post-card-image"
      style={{
        backgroundImage: `url(${props.node.frontmatter.thumbnail.childImageSharp.fluid.src})`,
      }}
    />
    <div
      className="post-card-color"
      style={{
        backgroundImage: `
        url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' fill='${props.node.frontmatter.color}'><path d='M0 64 L48 64 L64 0 L0 16 Z'/></svg>")`,
      }}
    />
    <Content props={props} />
  </article>
)

class Content extends Component {
  render() {
    const { props } = this.props
    const title = (
      <h2 className="post-card-title">
        {props.node.frontmatter.title || props.node.fields.slug}
      </h2>
    )

    return (
      <div className="post-card-content">
        <div className="post-card-info">
          EVENT {padNumber(props.node.frontmatter.number)}
          {" | "}
          <Tags tags={props.node.frontmatter.tags} />
        </div>
        <div>
          {props.noLinks ? (
            title
          ) : (
            <Link to={props.node.fields.slug} className="post-card-link">
              {title}
            </Link>
          )}
        </div>
        <div className="post-card-date">
          {props.node.frontmatter.date}, {props.node.frontmatter.time}
        </div>
        <div className="post-card-body">
          {props.node.frontmatter.description || props.node.excerpt}
        </div>
        {!props.noLinks && (
          <div>
            <Link
              to={props.node.fields.slug}
              className="post-card-link post-card-readmore"
            >
              {props.node.frontmatter.description || props.node.excerpt
                ? "Read More >>"
                : null}
            </Link>
          </div>
        )}
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
