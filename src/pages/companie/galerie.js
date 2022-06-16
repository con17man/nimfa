import React from 'react';
// import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';

const GaleryPage = () => {
  const { pageGalerie: {hero} } = useStaticQuery(graphql`
    query queryGaleryPageData {
      pageGalerie {
        hero {
          title
          headline
          image {
            childImageSharp {
              fluid(maxWidth: 2280, toFormat: PNG, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title={hero.title} />
      <PageHero heroInfo={hero} />
      <div className="w-full relative">
        <div className="container relative mx-auto block lg:flex py-8 md:py-24 pb-12 px-8 md:px-16 lg:px-0 mb-0 lg:-mb-12 bg-white">
          Galerie WIP
        </div>
      </div>
    </Layout>
  );
};

export default GaleryPage;