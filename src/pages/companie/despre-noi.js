import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';

const AboutPage = () => {

  const { pageDespreNoi: {hero} } = useStaticQuery(graphql`
    query queryDespreNoiPageData {
      pageDespreNoi {
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

      }
    }
  `);

  return (
    <Layout>
      <SEO title={hero.title} />
      <PageHero heroInfo={hero} />
      <div className="w-full relative">
        <div className="container relative mx-auto py-24 px-8 md:px-16 lg:px-0">
          CONTENT HERE
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
