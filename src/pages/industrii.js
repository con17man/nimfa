import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import { slugify } from '../components/Helpers';

const IndustriesPage = (props) => {
  const { pageIndustrii : { hero, industries, abstractImg } } = useStaticQuery(graphql`
    query queryIndustriiPageData {
      pageIndustrii {
        hero {
          title
          metaTitle
          headline
          image {
            childImageSharp {
              fluid(maxWidth: 2280, toFormat: PNG, quality: 90) {
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
              fluid(maxWidth: 192, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        abstractImg {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
    }
  `);

  const [ selectedIndustry, setSelectedIndustry ] = useState(industries[(props.location.state && props.location.state.id) || 0]);

  /**
   *
   * @param {string} industry
   * @param {string} id
   * @description select which section to display & replace url history so that
   * when user goes back after navigating through sections page returned will
   * be different from Industries
   */
  const selectIndustry = (industry, id) => {
    setSelectedIndustry(industry);
    window.history.replaceState(null, null, `/industrii#${id}`);
  };

  return (
    <Layout>
      <Seo title={hero.metaTitle} />
      <PageHero heroInfo={hero} />
      <div className="w-full relative">
        <div className="container relative mx-auto py-8 md:py-24 px-8">
          <div className="flex flex-wrap tracking-wider">
            {/* INDUSTRIES LIST */}
            <div className="w-full md:w-1/2 grid gap-2 md:gap-1 lg:gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, i) => {
                return (
                  <div key={i+1}>
                    <div
                      onClick={() => selectIndustry(industry, slugify(industry.name))}
                      onKeyDown={() => selectIndustry(industry, slugify(industry.name))}
                      role="button"
                      tabIndex={i+1}
                      id={slugify(industry.name)}
                      className={`flex flex-row md:flex-col justify-center content-center items-center md:h-48 lg:h-64 md:p-8 text-sm font-light text-center text-white uppercase
                        outline-none hover:bg-orange-500 ${selectedIndustry.name === industry.name ? 'bg-orange-500' : 'bg-blue-500'}`}
                    >
                      <Img fluid={industry.icon.childImageSharp.fluid} alt={`Nimfa - ${industry.name}`} className="w-20 md:w-24 ml-6 md:ml-0" />
                      <div className="flex-1 md:flex-none pr-6 md:pr-0">{industry.name}</div>
                    </div>

                    {/* INDUSTRY DESCRIPTION - MOBILE */}
                    {(selectedIndustry.name === industry.name) && <div className="block md:hidden py-8">
                      <p className="font-semibold uppercase tracking-wider text-xl md:text-2xl pb-6">{selectedIndustry.name}</p>
                      <div className="pb-10 font-light leading-snug" dangerouslySetInnerHTML={{__html: selectedIndustry.description}} />
                      {/* CTA */}
                      <Link to={selectedIndustry.cta.url} className="inline-block py-4 px-8 bg-orange-500 focus:bg-orange-700 text-white uppercase font-medium">
                        {selectedIndustry.cta.label}
                      </Link>
                    </div>}
                  </div>
                )
              })}
            </div>

            {/* INDUSTRY DESCRIPTION - TABLET/DESKTOP */}
            <div className="hidden md:block w-full md:w-1/2 py-4 pl-8 md:pl-16 font-light text-sm tracking-wide">
              <p className="font-semibold uppercase tracking-wider text-2xl pb-10">{selectedIndustry.name}</p>
              <div className="pb-10" dangerouslySetInnerHTML={{__html: selectedIndustry.description}} />

              {/* CTA */}
              <Link to={selectedIndustry.cta.url} className="inline-block py-4 px-16 bg-orange-500 hover:bg-orange-700 text-white uppercase font-medium">
                {selectedIndustry.cta.label}
              </Link>
            </div>
          </div>
        </div>

        {/* abstract image */}
        <div className="absolute bottom-0 right-0 opacity-25" style={{width: '36rem', zIndex: '-1', transform: 'rotateY(180deg)'}}>
          { abstractImg && <Img fluid={abstractImg.childImageSharp.fluid} alt={`Nimfa`} style={{transform: 'rotateY(180deg)'}} /> }
        </div>
      </div>
    </Layout>
  )
};

export default IndustriesPage;
