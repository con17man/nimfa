import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import '../utils/fontawesome';

import Header from './header';
import Footer from './footer';
import ContactHeader from './contactHeader';

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
      <ContactHeader />

      <div className="w-full bg-black text-white"> {/* add: fixed z-10 */}
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>

        <main> {/*add: className="pt-20" */}
          {children}
        </main>

      <footer className="bg-raisin py-20">
        <Footer />
      </footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
