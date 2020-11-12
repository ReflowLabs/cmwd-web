import React from "react"
import { Link } from "gatsby"

const Logo = ({ title }) => (
  <Link title={title} className="site-head-logo" to={`/`}>
    {`<CMWD/>`}
  </Link>
)

export default Logo
