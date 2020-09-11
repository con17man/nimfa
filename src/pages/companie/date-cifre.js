import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';

const DateCifre = () => {
  const { pageDateCifre : { hero, table, abstractImg } } = useStaticQuery(graphql`
    query queryDateCifre {
      pageDateCifre {
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

        table { label, entries }

        abstractImg {
          childImageSharp {
            fluid(maxWidth: 128) {
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
        <div className="container relative mx-auto py-24 md:px-4">

          {table.map((row, i) => {
            return <div className="flex flex-wrap tracking-wider" key={`row_${i+1}`}>
              <div className="w-full md:w-1/2 text-center md:text-right font-medium px-8 py-1 md:py-4 border-0 border-orange-500 md:border-b md:border-r" dangerouslySetInnerHTML={{ __html: row.label }} key={`label_${i+1}`} />
              <div className="w-full md:w-1/2 text-center md:text-left font-light px-8 py-2 md:py-4 border-0 border-orange-500 border-b">{row.entries.map((entry, i) => <div dangerouslySetInnerHTML={{ __html: entry }} key={`entry_${i+1}`} /> )}</div>
            </div>
          })}

          {/* abstract image */}
          <div className="absolute top-0 right-0 w-64" style={{zIndex: '-1', transform: 'translateY(-50%) rotateX(180deg)'}}>
            { abstractImg && <Img fluid={abstractImg.childImageSharp.fluid} /> }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DateCifre;
