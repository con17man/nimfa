import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { ProductsGrid } from '../pages/produse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ siteTitle }) => {
  const pathName = typeof window !== 'undefined' ? window.location.pathname : '';

  const {siteMap: { navigation, logos: [wideLogo, scrollLogo] }, pageProduse: { productCategories } } = useStaticQuery(graphql`
    query NavigationNodesQuery {
      siteMap {
        navigation {
          name
          url
          children {
            name
            url
          }
        }

        logos {
          childImageSharp {
            fluid(maxWidth: 2000, toFormat: WEBP) {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }

      pageProduse {
        productCategories {
          name
          url
          img {
            childImageSharp {
              fluid(maxWidth: 500, toFormat: WEBP) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          icon {
            childImageSharp {
              fluid(maxWidth: 192, toFormat: WEBP) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          gridPosition
          subMenu { name, url }
        }
      }

    }
  `);

  return(
    <header className="relative w-full text-white z-10 transition duration-500 ease-in-out js-header-wrapper">
      <div className="container h-28 mx-auto flex justify-between content-center bg-black bg-opacity-100 lg:bg-opacity-50 items-center js-header">
        <div className="header-logo pl-6">
          <Link to="/">
            <Img fluid={wideLogo.childImageSharp.fluid} className="js-wideLogo w-40" alt={siteTitle} />
            <Img fluid={scrollLogo.childImageSharp.fluid} className="js-scrollLogo w-20 hidden" alt={siteTitle} />
          </Link>
        </div>

        {/* NAVBAR - DESKTOP*/}
        <nav role="navigation" className="header-navbar h-full">
          <ul className="navbar-list hidden lg:table h-full">
            {navigation.map((category, i) => {
                return <li className={`navbar-list-item lg:last:pr-6 ${category.name !== 'Produse' ? 'relative item-separator': ''}`} key={`L0_node_${i+1}`}>
                  { category.url ?
                    <Link to={category.url} activeClassName="text-orange-500">{category.name} </Link> :
                    <span className={`cursor-pointer ${pathName.includes(category.name.toLowerCase()) ? 'text-orange-500': undefined}`}>{category.name}</span>
                  }

                  {/* sub-menu */}
                  {category.children &&
                    <ul className="navbar-list-item-dropdown mt-12 js-nav-dropdown">
                      {category.children.map((child, i) => {
                          return <li className="navbar-list-item-dropdown-item" key={`L1_node_${i+1}`}>
                            <Link to={child.url} state={{id: i}} onClick={(evt) => evt.target.blur()}>{child.name}</Link>
                          </li>
                      })}
                    </ul>
                  }

                  {/* CUSTOM MENU FOR PRODUCTS */}
                  {category.name === 'Produse' &&
                  <div className="w-full navbar-list-item-dropdown mt-12 js-nav-dropdown" style={{padding: '5rem 7rem'}}>
                    <div className="container mx-auto">
                      <ProductsGrid categories={productCategories} />
                    </div>
                  </div>}
                </li>
            })}
          </ul>
        </nav>

        {/* NAVBAR - MOBILE/TABLET */}
        <button className="text-gray-100 focus:text-white block lg:hidden px-4 py-2 mr-4 text-2xl outline-none focus:outline-none">
          <FontAwesomeIcon icon="bars" />
        </button>
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

export default React.memo(Header);
