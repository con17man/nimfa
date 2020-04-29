import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Acasa" />

    <div className="w-full bg-white">
      <h1>Hello</h1>
    </div>
    <div className="w-full bg-grey h-64 p-4">
      <h1>Hello world!</h1>
    </div>

  </Layout>
)

export default IndexPage
