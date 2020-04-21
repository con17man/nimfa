import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
        <SEO title={frontmatter.title} />

        <div className="blog-post-container">
            <div className="blog-post">
                <span>Posted @{frontmatter.date}</span>
                <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>

        <Link to="/">Back Home</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`