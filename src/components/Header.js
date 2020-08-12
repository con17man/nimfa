import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import PropTypes from 'prop-types';

import Logo from '../assets/images/gatsby-icon.png';

const Header = ({ siteTitle }) => {

  const navigationNodesQuery = useStaticQuery(graphql`
    query NavigationNodesQuery {
      siteMap {
        navigation {
          name
          url
          children {
            name
            url
            children {
              name
              url
            }
          }
        }
      }
    }
  `);

  const NAVBAR_CATEGORIES = navigationNodesQuery.siteMap.navigation;

  return(
    <header className="relative w-full text-white z-10 transition duration-500 ease-in-out js-header-wrapper">
      <div className="container h-28 mx-auto flex justify-between content-center bg-black bg-opacity-50 items-center transition duration-500 ease-in-out js-header">
        <div className="header-logo sm:px-4">
          <Link to="/">
            <img src={Logo} className="h-12" alt={siteTitle} />
          </Link>
        </div>

        {/* NAVBAR */}
        <nav role="navigation" className="header-navbar h-full sm:px-4">
          <ul className="navbar-list table h-full">
            {NAVBAR_CATEGORIES.map((category, i) => {
                return <li className="navbar-list-item" key={`L0_node_${i+1}`}>
                  <Link to={category.url} activeClassName="text-orange">
                      {category.name}
                  </Link>
                  {/* sub-menu */}
                  {category.children && <ul className="navbar-list-item-dropdown">
                    {category.children.map((child, i) => {
                        return <li className="navbar-list-item-dropdown-item" key={`L1_node_${i+1}`}>
                          <Link to={child.url}>{child.name}</Link>
                        </li>
                    })}
                  </ul>}
                </li>
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};



Header.propTypes = {
  siteTitle: PropTypes.string,
};


Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
