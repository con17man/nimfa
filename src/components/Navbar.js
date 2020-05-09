import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";

const Navbar = () => {
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

  return (
    <div className="header-navbar divide-x-2 divide-white">
        {NAVBAR_CATEGORIES.map((category, i) => {
            return <Link to={category.url} activeClassName="text-red" key={i+1}
              className="pr-2 pl-3 uppercase hover:text-red font-bold">
                {category.name}
            </Link>
        })}
    </div>
  )
};

export default Navbar;
