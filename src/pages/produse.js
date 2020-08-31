import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const ProductsPage = () => {
  const {pageProduse: {hero, productCategories}} = useStaticQuery(graphql`
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
          gridPosition
        }

      }
    }
  `);

  return (
    <Layout>
      <SEO title={hero.title} />
      <PageHero heroInfo={hero} />
      <div className="relative container mx-auto -mb-8 p-28 bg-grey">
        <div className="grid-container">
          {productCategories.map((category, i) => {
            return <div key={i+1} className={category.gridPosition}>
              <Link to={category.url}>
                <Img fluid={category.img.childImageSharp.fluid} className="object-cover w-full h-full" />
                <p className="area-title">{category.name}</p>
              </Link>
            </div>
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
