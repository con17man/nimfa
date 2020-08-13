import React, { useRef, useEffect } from 'react';
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

  const listRef = useRef(null);

  useEffect(() => {
    const listElements = Array.from(listRef.current.childNodes);
    const lastItem = listElements[listElements.length - 2];
    lastItem.classList.add("md:w-7/12");
  });

  return (
    <Layout>
      <SEO title={hero.title} />
      <PageHero heroInfo={hero} />
      <div className="w-full relative">
        <div className="container relative mx-auto py-24" ref={listRef}>
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
