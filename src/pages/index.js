import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        width: `100%`,
        alignItems: `center`,
      }}
    >
      <div>
        <h1>
          Hello, I'm <span style={{ color: `#634c9c` }}>Anjali Dube</span>.
        </h1>
        <h3>I'm a Frontend developer.</h3>
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
