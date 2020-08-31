import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';

const AccessoriesPage = () => {

  const { pageAccesorii: {hero, pageImg, pageParagraphs} } = useStaticQuery(graphql`
    query queryAccesoriiPageData {
      pageAccesorii {
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

        pageImg {
          childImageSharp {
            fluid(maxWidth: 2000, toFormat: WEBP) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        pageParagraphs

      }
    }
  `);

  return (
    <Layout>
      <SEO title={hero.title} />
      <PageHero heroInfo={hero} />
      <div className="w-full relative">
        <div className="container relative mx-auto flex pt-24 pb-12 px-8 md:px-16 lg:px-0 -mb-12 bg-white">
          {/* image */}
          <div className="flex-none pl-10">
            <Img fluid={pageImg.childImageSharp.fluid} style={{width: '350px'}} />
          </div>

          {/* text */}
          <div className="block pl-10 font-light tracking-wide">
            {pageParagraphs.map((paragraph, i) => <div key={i+1} dangerouslySetInnerHTML={{ __html: paragraph }} />)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccessoriesPage;