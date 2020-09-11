import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          subMenu { name, url }
        }

      }
    }
  `);

  const subMenuClass = (str) => {
    return `${str.charAt(0)}${str.charAt(str.length-1)}`;
  };

  return (
    <Layout>
      <SEO title={hero.title} />
      <PageHero heroInfo={hero} />
      <div className="relative container mx-auto -mb-8 p-28 bg-grey">
        <div className="grid-container">
          {productCategories.map((category, i) => {
            return <div key={i+1} className={`grid-container-category ${category.gridPosition}`}>
              <span>
                <Img fluid={category.img.childImageSharp.fluid} className="object-cover w-full h-full" />
                <p className="area-title">{category.name}</p>
                {/* Category Submenu */}
                <div className={`grid-container-category-submenu ${subMenuClass(category.gridPosition)}-grid`}>
                  <Link to={category.url} className={`${subMenuClass(category.gridPosition)}-main`}>
                    <p className="text-5xl"><FontAwesomeIcon icon="file-image" /></p>
                    {category.name}
                  </Link>
                  {category.subMenu && category.subMenu.map((item, i) => <Link to={item.url} key={i+1} className={`relative ${subMenuClass(category.gridPosition)}-sub-${i+1}`}>{item.name} <p className="text-5xl"><FontAwesomeIcon icon="file-image" /></p></Link>)}
                </div>
              </span>
            </div>
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
