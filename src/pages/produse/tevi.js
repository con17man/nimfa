import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';
import Seo from '../../components/Seo';
import PageHero from '../../components/PageHero';
import ProductDetails from '../../components/ProductDetails';

const TeviPage = () => {
  const { pageTevi: {hero, products} } = useStaticQuery(graphql`
  query TeviPageData {
    pageTevi {
      hero {
        title
        metaTitle
        headline
        image {
          childImageSharp {
            fluid(maxWidth: 2280, toFormat: PNG, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        darkTextColor
      }

      products {
        title
        table { columns, columnWidths, rows }
        dimensions
        materials
        imgs {
          childImageSharp {
            fluid(maxWidth: 2000, toFormat: PNG, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
  `);

  return (
    <Layout>
      <Seo title={hero.metaTitle} />
      <PageHero heroInfo={hero} />
      <div className="w-full relative">
        {products.map((product, i) => <ProductDetails key={i+1} product={product} reversed={i % 2 === 0 ? false : true } />)}
      </div>
    </Layout>
  );
};

export default TeviPage;