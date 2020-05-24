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
    <div className="relative w-full text-white z-10 transition duration-500 ease-in-out js-header-wrapper"> {/* add: fixed z-10 */}
      <header className="container h-20 sm:px-4 lg:p-4 mx-auto flex justify-between content-center bg-black bg-opacity-50 items-center transition duration-500 ease-in-out js-header">
        <div className="header-logo">
          <Link to="/">
            <img src={Logo} className="h-12" alt={siteTitle} />
          </Link>
        </div>

        {/* NAVBAR */}
        <div className="header-navbar divide-x-2 divide-white">
            {NAVBAR_CATEGORIES.map((category, i) => {
                return <Link to={category.url} activeClassName="text-red" key={i+1}
                  className="pr-2 pl-3 uppercase hover:text-red font-bold">
                    {category.name}
                </Link>
            })}
        </div>
      </header>
    </div>
  );
};



Header.propTypes = {
  siteTitle: PropTypes.string,
};


Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
