import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Navbar from './Navbar';

import '../scss/components/Header.scss';


const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header--logo">
      <Link to="/">
        <img src="../images/gatsby-icon.png" alt={siteTitle} />
      </Link>
    </div>

    <div className="header--navbar">
      <Navbar />
    </div>

  </header>
);



Header.propTypes = {
  siteTitle: PropTypes.string,
};


Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
