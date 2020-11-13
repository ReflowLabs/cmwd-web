import { Link } from "gatsby"
import React from "react"

const apikey = "AIzaSyA3J7_uMT9v0nqxoFcyHSv4ykmPrP82Ick"

const Map = ({ location }) => (
  <div className="map">
    Join us @{" "}
    <Link target="_blank" to={`https://www.google.com/maps/search/${location}`}>
      {location}
    </Link>
    <div className="map-iframe">
      <iframe
        frameborder="0"
        style={{ border: 0, width: "100%", height: "100%" }}
        src={`https://www.google.com/maps/embed/v1/place?key=${apikey}&q=${location ||
          "Yello Coworking, Chiang Mai"}`}
      />
    </div>
  </div>
)

export default Map
