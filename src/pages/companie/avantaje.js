import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import Seo from '../../components/Seo';
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
              fluid(maxWidth: 2280, toFormat: PNG, quality: 90) {
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
              fluid(maxWidth: 192, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        abstractImg {
          childImageSharp {
            fluid(maxWidth: 512, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Seo title={hero.title} />
      <PageHero heroInfo={hero} />
      <div className="w-full relative">
        <div className="container relative mx-auto py-8 md:py-24 px-8 md:px-16 lg:px-0">
          { advantages.map((advantage, i) => <Asset assetData={advantage} key={`advantage_${i}`} css={`${advantages.length === i+1 ? '"xs:w-1/2 sm:w-8/12 lg:w-9/12 xl:w-10/12"' : null}`} /> )}

          {/* abstract image */}
          <div className="absolute bottom-0 right-0 w-64 opacity-25 md:opacity-100" style={{zIndex: '-1'}}>
            { abstractImg && <Img fluid={abstractImg.childImageSharp.fluid} alt={`Nimfa`} /> }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdvantagesPage;
