/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="w-full bg-black text-white">
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>

        <main>{children}</main>

        <footer>
          <p>Made with <span role="img" aria-label="love">❤️</span> in Bucharest</p>
          <p>{new Date().getFullYear()}</p>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
