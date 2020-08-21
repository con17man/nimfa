import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => {

  const {siteMap: { navigation, logo } } = useStaticQuery(graphql`
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

        logo {
          childImageSharp {
            fluid(maxWidth: 2000, toFormat: WEBP) {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
    }
  `);

  return(
    <header className="relative w-full text-white z-10 transition duration-500 ease-in-out js-header-wrapper">
      <div className="container h-28 mx-auto flex justify-between content-center bg-black bg-opacity-50 items-center transition duration-500 ease-in-out js-header">
        <div className="header-logo sm:px-4">
          <Link to="/">
            <Img fluid={logo.childImageSharp.fluid} className="w-40" alt={siteTitle} />
          </Link>
        </div>

        {/* NAVBAR */}
        <nav role="navigation" className="header-navbar h-full sm:px-4">
          <ul className="navbar-list table h-full">
            {navigation.map((category, i) => {
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
