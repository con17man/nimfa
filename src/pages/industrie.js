import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const IndustriesPage = () => {
  const { pageIndustrie : { hero, industries, abstractImg } } = useStaticQuery(graphql`
    query queryIndustriePageData {
      pageIndustrie {
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

        industries {
          name
          description
          cta { label, url }
          icon {
            childImageSharp {
              fluid(maxWidth: 192) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        abstractImg {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
    }
  `);

  const [ initIndustry ] = industries;

  const [ selectedIndustry, setSelectedIndustry ] = useState(initIndustry);

  return (
    <Layout>
      <SEO title={hero.title} />
      <PageHero heroInfo={hero} />
      <div className="w-full relative">
        <div className="container relative mx-auto py-24 md:px-4">
          <div className="flex flex-wrap tracking-wider">
            {/* INDUSTRIES LIST */}
            <div className="w-1/2 grid gap-1 lg:gap-2 grid-cols-2 md:grid-cols-3">
              {industries.map((industry, i) => {
                return <div
                    onClick={() => setSelectedIndustry(industry)}
                    onKeyDown={() => setSelectedIndustry(industry)}
                    role="button"
                    tabIndex={i+1}
                    key={i+1}
                    className={`flex flex-col justify-center content-center items-center h-40 md:h-64 p-8 text-sm font-light text-center text-white uppercase hover:bg-orange outline-none ${selectedIndustry.name === industry.name ? 'bg-orange' : 'bg-blue'}`}>
                  <Img fluid={industry.icon.childImageSharp.fluid} className="w-24" />
                  {industry.name}
                </div>
              })}
            </div>

            {/* INDUSTRY DESCRIPTION */}
            <div className="w-1/2 py-4 pl-8 md:pl-16 font-light text-sm tracking-wide">
            <p className="font-semibold uppercase tracking-wider text-2xl pb-10">{selectedIndustry.name}</p>
            <p className="pb-10">{selectedIndustry.description}</p>

            {/* CTA */}
            <Link to={selectedIndustry.cta.url} className="inline-block py-4 px-16 mb-20 bg-orange text-white uppercase font-medium">
              {selectedIndustry.cta.label}
            </Link>
            </div>
          </div>
        </div>

        {/* abstract image */}
        <div className="absolute top-0 right-0 w-1/2 opacity-25" style={{zIndex: '-1',transform: 'rotateX(180deg) rotate(270deg)'}}>
          { abstractImg && <Img fluid={abstractImg.childImageSharp.fluid} /> }
        </div>
      </div>
    </Layout>
  )
};

export default IndustriesPage;
