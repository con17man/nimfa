import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';

const AboutPage = () => {

  const {
    pageDespreNoi: {
      hero, activityAreas, aboutParagraphs, cta, abstractImg, pageImg
    }
  } = useStaticQuery(graphql`
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

        activityAreas { intro, areas }
        aboutParagraphs
        cta { label, link }

        pageImg {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid
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
        <div className="container relative mx-auto flex py-24 px-8 md:px-16 lg:px-0">
          {/* about text */}
          <div className="block font-light text-sm tracking-wide pr-10">
            {activityAreas.intro.map((area, i) => <p key={i+1} className="pb-2">{area}</p>)}
            <ul className='list-disc list-inside font-medium pb-6'>
              {activityAreas.areas.map((activity, i) => <li key={i+1}>{activity}</li>)}
            </ul>
            {/* paragraphs */}
            {aboutParagraphs.map((paragraph, i) => <p className="pb-6" key={i+1}>{paragraph}</p>)}

            {/* CTA */}
            <Link to={cta.link} className="inline-block py-4 px-16 mb-10 bg-orange text-white uppercase font-medium">
              {cta.label}
            </Link>
          </div>

          {/* image */}
          <div className="flex-none">
            <Img fluid={pageImg.childImageSharp.fluid} />
            <p className="font-montserrat-alternates font-bold text-center text-3xl tracking-wide py-6">Let the energy flow!</p>
          </div>
        </div>

        {/* abstract image */}
        <div className="absolute bottom-0 left-0 opacity-25" style={{width: '36rem', zIndex: '-1'}}>
          { abstractImg && <Img fluid={abstractImg.childImageSharp.fluid} style={{transform: 'rotateY(180deg)'}} /> }
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
