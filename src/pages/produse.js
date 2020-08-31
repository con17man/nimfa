import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const ProductsPage = () => {
  const {pageProduse: {hero, categories: productCategories}} = useStaticQuery(graphql`
    query queryProductsPageData {
      pageProduse {
        hero {
          title
          headline
          image {
            childImageSharp {
              fluid(maxWidth: 2000, toFormat: WEBP) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

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
        }

      }
    }
  `);

  // const [tevi, flanse, fittings, tablaProfile, accesorii, armaturiRobineti] = productCategories;
  return (
    <Layout>
      <SEO title={hero.title} />
      <PageHero heroInfo={hero} />
      <div className="relative container mx-auto -mb-8 p-32 bg-grey">
        <div className="grid grid-rows-2 grid-flow-col gap-2 text-center">
          <div className="row-start-1 border-2 col-span-2 border-red-500">1 Tevi</div>
          <div className="row-start-2 border-2 col-span-2 border-red-500">2 Flanse</div>
          <div className="col-span-2 border-2 border-red-500">3 Fitting-uri</div>
          <div className="border-2 border-red-500">4 Tabla si profile</div>
          <div className="border-2 border-red-500">5 Accesorii</div>
          <div className="row-span-2 border-2 border-red-500">6 Armaturi si robineti</div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
