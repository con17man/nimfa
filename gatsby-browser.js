/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// import 'typeface-open-sans';
// import 'typeface-montserrat';
import 'typeface-montserrat-alternates';

import './src/styles/main.css';

import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";


// Fix scroll position for anchor tag ids
// https://chaseohlson.com/gatsby-link-anchor-navigation

export const onRouteUpdate = ({location}) => {
  anchorScroll(location);
  return true;
};

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  anchorScroll(location);
  return true;
}

function anchorScroll(location){
  // Check for location so build does not fail
  if (location && location.hash) {
    setTimeout(() => {
      window.scrollTo({top: window.scrollY - 100, left: 0, behavior: 'smooth'});
    }, 0);
  }
}