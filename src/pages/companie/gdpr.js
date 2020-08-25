import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';

const GDPRPage = () => {

  const {pageGdpr:{
    hero, gdprParagraphs, abstractImg}
  } = useStaticQuery(graphql`
    query queryGDPRPageData {
      pageGdpr {
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

        gdprParagraphs

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
          {gdprParagraphs.map((paragraph, i) => <div key={i+1} dangerouslySetInnerHTML={{ __html: paragraph }} /> )}
        </div>
      </div>
    </Layout>
  )
};

export default GDPRPage;