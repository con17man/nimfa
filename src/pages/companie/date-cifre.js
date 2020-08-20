import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';

const DateCifre = () => {
  const { pageDateCifre : { hero, abstractImg } } = useStaticQuery(graphql`
    query queryDateCifre {
      pageDateCifre {
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

        abstractImg {
          childImageSharp {
            fluid(maxWidth: 128) {
              ...GatsbyImageSharpFluid
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
        <div className="container relative mx-auto py-24">
          {/* abstract image */}
          <div className="absolute top-0 right-0 w-64 z-0">
            { abstractImg && <Img fluid={abstractImg.childImageSharp.fluid} /> }
          </div>

          {/* table data */}
          table here
        </div>
      </div>
    </Layout>
  );
}

export default DateCifre;
