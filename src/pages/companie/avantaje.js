import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';

const AdvantagesPage = () => {

  const { pageAvantaje: { hero } } = useStaticQuery(graphql`
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
          icon
          title
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Avantaje" />
      <PageHero heroInfo={hero} />
      <div className="container mx-auto p-32 text-center">
        <h1>Avantaje</h1>
        <hr/>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  );
}

export default AdvantagesPage;
