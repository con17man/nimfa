import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Acasa" />
    <h1>Acasa</h1>
    <div style={{ maxWidth: `300px`, margin: `1em auto`, }}>
      <Image />
    </div>

    <Link to="/blog/my-first-post/">Go to My first post</Link>

  </Layout>
)

export default IndexPage
