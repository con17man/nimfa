import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';
import ProductDetails from '../../components/ProductDetails';

const TablaProfilePage = () => {
  const { pageTablaProfile: {hero, products} } = useStaticQuery(graphql`
  query TablaProfilePageData {
    pageTablaProfile {
      hero {
        title
        metaTitle
        darkTextColor
        headline
        image {
          childImageSharp {
            fluid(maxWidth: 2280, toFormat: PNG, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

      products {
        title
        table { columns, columnWidths, rows, adnotations }
        materials
        imgs {
          childImageSharp {
            fluid(maxWidth: 2000, toFormat: PNG, quality: 90) {
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
      <SEO title={hero.metaTitle} />
      <PageHero heroInfo={hero} />
      <div className="w-full relative">
        {products.map((product, i) => <ProductDetails key={i+1} product={product} reversed={i % 2 === 0 ? false : true } />)}
      </div>
    </Layout>
  );
};

export default TablaProfilePage;