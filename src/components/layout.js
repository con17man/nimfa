import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className="w-full bg-black text-white fixed z-10">
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>

        <main className="pt-20">
          {children}
        </main>

      <footer className="bg-raisin py-16">
        <Footer />
      </footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
