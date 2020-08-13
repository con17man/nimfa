import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';
import Asset from '../../components/Asset';

const AdvantagesPage = () => {

  const { pageAvantaje: { hero, advantages } } = useStaticQuery(graphql`
    query queryAdvantagesPageData {
      pageAvantaje {
        hero {
          title
          headline
          image {
            childImageSharp {
              fluid(maxWidth: 2000, toFormat: WEBP, grayscale: true) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        advantages {
          description
          title
          icon {
            childImageSharp {
              fluid(maxWidth: 128) {
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
        <div className="container mx-auto py-24">
          {/* advantages items */}
          { advantages.map((advantage, i) => <Asset assetData={advantage} key={`advantage_${i}`} /> )}
          {/* bottom image */}
        </div>
      </div>
    </Layout>
  );
}

export default AdvantagesPage;
