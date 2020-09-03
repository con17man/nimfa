import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';
import Asset from '../../components/Asset';

const AdvantagesPage = () => {

  const { pageAvantaje: { hero, advantages, abstractImg } } = useStaticQuery(graphql`
    query queryAdvantagesPageData {
      pageAvantaje {
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

        advantages {
          description
          title
          icon {
            childImageSharp {
              fluid(maxWidth: 192) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        abstractImg {
          childImageSharp {
            fluid(maxWidth: 512) {
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
        <div className="container relative mx-auto py-24 px-8 md:px-16 lg:px-0">
          { advantages.map((advantage, i) => <Asset assetData={advantage} key={`advantage_${i}`} /> )}

          {/* abstract image */}
          <div className="absolute bottom-0 right-0 w-64" style={{zIndex: '-1'}}>
            { abstractImg && <Img fluid={abstractImg.childImageSharp.fluid} /> }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdvantagesPage;
