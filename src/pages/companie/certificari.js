import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';

const CertificationsPage = () => {

  const {
    pageCertificari: {
      hero, certifications, certParagraphs, cta, abstractImg, pageImg
    }
  } = useStaticQuery(graphql`
    query queryCertificariPageData {
      pageCertificari {
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

        certifications { intro, certList }
        certParagraphs
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
            {/* paragraphs */}
            {certParagraphs.map((paragraph, i) => <p className="pb-6" key={i+1}>{paragraph}</p>)}

            {/* CTA */}
            <Link to={cta.link} className="inline-block py-4 px-16 mb-20 bg-orange-500 text-white uppercase font-medium">
              {cta.label}
            </Link>

            <p className="pb-6">{certifications.intro}</p>
            <ul className='font-semibold pb-6'>
              {certifications.certList.map((certificate, i) => <li className="leading-loose" key={i+1}>{certificate}</li>)}
            </ul>
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

export default CertificationsPage;
