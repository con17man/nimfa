import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import '../utils/fontawesome';

// Fix Fontawesome glitch
// https://medium.com/@fabianterh/fixing-flashing-huge-font-awesome-icons-on-a-gatsby-static-site-787e1cfb3a18
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  config.autoAddCss = false;

  // TODO: Find a better way of implementing this
  // Sticky Header: https://codesandbox.io/s/react-setstate-from-event-listener-q7to8?file=/src/App.js
  useEffect(() => {

    const headerWrapper = document.querySelector('.js-header-wrapper');
    const header = document.querySelector('.js-header');
    const main = document.querySelector('.js-main-content');
    const wideLogo = document.querySelector('.js-wideLogo');
    const scrollLogo = document.querySelector('.js-scrollLogo');
    const subMenus = Array.from(document.querySelectorAll('.js-nav-dropdown'));
    const topToHeader = headerWrapper.getBoundingClientRect().top; // headerWrapper.offsetTop

    const stickyHeader = () => {

      if (window.scrollY >= topToHeader) {
        // Header on top
        headerWrapper.classList.remove('relative');
        headerWrapper.classList.add('fixed', 'top-0', 'bg-black');
        header.classList.remove('bg-black', 'bg-opacity-50', 'h-28');
        header.classList.add('h-16');
        main.classList.add('pt-28');
        wideLogo.classList.add('hidden');
        scrollLogo.classList.remove('hidden');
        subMenus.forEach(menu => {
          menu.classList.add('mt-6');
          menu.classList.remove('mt-12');
        });
      } else {
        // Header NOT on top
        headerWrapper.classList.add('relative');
        headerWrapper.classList.remove('fixed', 'top-0', 'bg-black');
        header.classList.remove('h-16');
        header.classList.add('bg-black', 'bg-opacity-50', 'h-28');
        main.classList.remove('pt-28');
        wideLogo.classList.remove('hidden');
        scrollLogo.classList.add('hidden');
        subMenus.forEach(menu => {
          menu.classList.remove('mt-6');
          menu.classList.add('mt-12');
        });
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
