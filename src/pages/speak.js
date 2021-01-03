import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const SpeakPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const [{ loading, error, success }, setState] = useState({})

  async function handleSubmit(e) {
    setState(s => ({ ...s, loading: true, error: null }))
    e.preventDefault()
    const formData = new FormData(e.target)
    const body = new URLSearchParams(formData).toString()
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      })
      console.log(res)
      if (res.status != 200) {
        throw new Error("There was an error")
      }
      setState({ success: true })
    } catch (e) {
      setState({ error: e.message })
    }
    //   alert(error))
  }

  return (
    <Layout title={siteTitle} location={location}>
      <SEO title="Become a Speaker" />
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Become a Speaker
          </h2>
          <p>
            It's scientifically proven that knowledge sharing leads to warm
            fuzzy feelings of purpose and satisfaction. Get your fix by becoming
            a speaker at Chiang Mai Web Developer Meetup!
          </p>
          <p>
            CMWD, like Web Development, is not *just* about writing code. We're
            interested in anything that people who help create web experiences
            might find interesting, be it graphics, tooling, web scraping, SEO,
            security, plain old app development, or other topics. We welcome all
            skill levels.
          </p>
          <p>
            If you are interested in sharing your web knowledge, please submit
            the form below and we'll get back to you.
          </p>
          <hr />
          <p style={{ textAlign: "center" }}>
            <i>Infomration submitted will remain confidential.</i>
          </p>
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="post"
            action="/speak/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="row gtr-uniform">
              <div className="col-12 col-12-xsmall">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-12 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Contact"
                  required
                />
              </div>

              <div className="col-12 col-12-xsmall">
                <input
                  type="text"
                  name="social"
                  id="social"
                  placeholder="Github / Website / Portfolio"
                />
              </div>
              <br />
              <br />
              <br />
              <div className="col-12 col-12-xsmall">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Presentation Title"
                  required
                />
              </div>

              <div className="col-12">
                <select name="topic" id="topic">
                  <option value>Presentation Topic</option>
                  <option value="Frameworks">Framework</option>
                  <option value="Design">Design</option>
                  <option value="SEO">SEO</option>
                  <option value="Devops">Devops</option>
                  <option value="Security">Security</option>
                  <option value="Languages">Languages</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-12">
                <textarea
                  name="description"
                  id="description"
                  placeholder="Please briefly describe your talk, your experience on this topic, and why you find it interesting"
                  rows={6}
                  required
                />
              </div>
              <div
                className="col-12 col-12-small"
                style={{ textAlign: "center" }}
              >
                Your level of experience on this topic:
              </div>
              <div className="col-3 col-6-small">
                <input
                  type="radio"
                  id="skill-level-noob"
                  name="skill-level-noob"
                />
                <label htmlFor="skill-level-noob">n00b</label>
              </div>
              <div className="col-3 col-6-small">
                <input
                  type="radio"
                  id="skill-level-casual"
                  name="skill-level-casual"
                />
                <label htmlFor="skill-level-casual">Casual</label>
              </div>
              <div className="col-3 col-6-small">
                <input
                  type="radio"
                  id="skill-level-pro"
                  name="skill-level-pro"
                />
                <label htmlFor="skill-level-pro">Pro</label>
              </div>
              <div className="col-3 col-6-small">
                <input
                  type="radio"
                  id="skill-level-elite"
                  name="skill-level-elite"
                />
                <label htmlFor="skill-level-elite">1337</label>
              </div>
              <br />
              <br />
              <br />
              <div className="col-6 col-12-small">
                <input type="checkbox" id="am-human" name="am-human" required />
                <label htmlFor="am-human">I am a human</label>
              </div>
              <div className="col-12 col-12-small">
                <input type="checkbox" id="in-person" name="in-person" />
                <label htmlFor="in-person">I am able to attend in-person</label>
              </div>
              <br />
              <br />
              <br />
              <div className="col-12" style={{ textAlign: "center" }}>
                {loading && `📨 Submitting...`}
                {success && (
                  <>
                    😎 Submitted! Thanks for your interest.
                    <br />
                    <br />
                    If you don't hear from us you can poke us at{" "}
                    <a href="mailto:speak@cmwd.io">speak@cmwd.io</a>
                  </>
                )}
                {!loading && !success && (
                  <input
                    type="submit"
                    defaultValue="Send Message"
                    className="primary"
                  />
                )}
                {error && (
                  <>
                    <br />
                    <br />
                    ⚠️ {error}
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <SpeakPage location={props.location} data={data} {...props} />
    )}
  />
)
