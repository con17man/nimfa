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
        <div className="container relative mx-auto block lg:flex py-8 md:py-24 pb-12 px-8 md:px-16 lg:px-0 mb-0 lg:-mb-12 bg-white">
          {/* image */}
          <div className="w-full lg:max-w-sm flex-none pl-0 lg:pl-10">
            <Img fluid={pageImg.childImageSharp.fluid} className="h-40 lg:h-auto object-cover" />
          </div>

          {/* text */}
          <div className="block pl-0 lg:pl-10 py-8 lg:py-0 font-light tracking-wide">
            {pageParagraphs.map((paragraph, i) => <div key={i+1} dangerouslySetInnerHTML={{ __html: paragraph }} />)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccessoriesPage;