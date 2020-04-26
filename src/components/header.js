import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Navbar from './Navbar';

const Header = ({ siteTitle }) => (
  <header className="header container">
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
