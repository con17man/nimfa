import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';

import certificatePDF from '../../assets/files/ISO_9001-2019_2021.pdf';

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
        <div className="container relative mx-auto block lg:flex py-8 md:py-24 px-8 md:px-16 lg:px-0">
          {/* about text */}
          <div className="block font-light text-sm tracking-wide md:pr-10">
            {/* paragraphs */}
            {certParagraphs.map((paragraph, i) => <p className="pb-6" key={i+1}>{paragraph}</p>)}

            {/* CTA */}
            <a href={certificatePDF} download className="inline-block py-4 px-8 lg:px-16 mb-10 lg:mb-20 bg-orange-500 text-white uppercase font-medium">
              {cta.label}
            </a>

            <p className="pb-6">{certifications.intro}</p>
            <ul className='font-semibold pb-6'>
              {certifications.certList.map((certificate, i) => <li className="leading-loose" key={i+1}>{certificate}</li>)}
            </ul>
          </div>

          {/* image */}
          <div className="w-full lg:max-w-sm flex-none pl-0 lg:pl-10">
            <Img fluid={pageImg.childImageSharp.fluid} className="h-40 lg:h-auto object-cover" />
            <p className="font-montserrat-alternates font-bold text-center text-3xl tracking-wide py-6">Let the energy flow!</p>
          </div>
        </div>

        {/* abstract image */}
        <div className="absolute bottom-0 left-0 opacity-25 w-84 md:w-150" style={{zIndex: '-1'}}>
          { abstractImg && <Img fluid={abstractImg.childImageSharp.fluid} style={{transform: 'rotateY(180deg)'}} /> }
        </div>
      </div>
    </Layout>
  );
}

export default CertificationsPage;
