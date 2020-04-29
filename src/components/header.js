import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Navbar from './Navbar';

const Header = ({ siteTitle }) => (
  <header className="container h-20 sm:px-4 lg:px-0 mx-auto flex justify-between content-center items-center">
    <div className="header-logo">
      <Link to="/">
        <img src="../static/images/gatsby-icon.png" alt={siteTitle} />
      </Link>
    </div>

    <Navbar />
  </header>
);



Header.propTypes = {
  siteTitle: PropTypes.string,
};


Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
