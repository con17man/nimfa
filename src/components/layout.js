import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import '../utils/fontawesome';

import Header from './header';
import Footer from './footer';
import ContactHeader from './contactHeader';

const Layout = ({ children }) => {

  // TODO: Find a better way of implementing this
  // Sticky Header: https://codesandbox.io/s/react-setstate-from-event-listener-q7to8?file=/src/App.js
  useEffect(() => {

    const headerWrapper = document.querySelector('.js-header-wrapper');
    const header = document.querySelector('.js-header');
    const main = document.querySelector('.js-main-content');
    const topToHeader = headerWrapper.getBoundingClientRect().top; // headerWrapper.offsetTop

    const stickyHeader = () => {

      if (window.scrollY >= topToHeader) {
        // Header on top
        headerWrapper.classList.remove('relative');
        headerWrapper.classList.add('fixed', 'top-0', 'bg-black');
        header.classList.remove('bg-black', 'bg-opacity-50');
        main.classList.add('pt-20');
      } else {
        // Header NOT on top
        headerWrapper.classList.add('relative');
        headerWrapper.classList.remove('fixed', 'top-0', 'bg-black');
        header.classList.add('bg-black', 'bg-opacity-50');
        main.classList.remove('pt-20');
      }
    };

    window.addEventListener('scroll', stickyHeader);

    return () => window.removeEventListener('scroll', stickyHeader);
  }, []);



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
      <Header siteTitle={data.site.siteMetadata.title} />

        <main className="js-main-content">
          {children}
        </main>

      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
