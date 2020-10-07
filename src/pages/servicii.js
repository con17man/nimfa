import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Asset from '../components/Asset';

const ServicesPage = () => {

  const {pageServicii: {hero, services, abstractImg}} = useStaticQuery(graphql`
    query queryServicesPageData {
      pageServicii {
        hero {
          title
          headline
          image {
            childImageSharp {
              fluid(maxWidth: 2280, toFormat: PNG) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        services {
          description
          title
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
        {/* TODO: Find a better way to split and correctly diplay info on page */}
        {/* <div className="container relative mx-auto grid grid-cols-1 lg:grid-cols-2 py-24 px-8 md:px-16 lg:px-0">
          { services.map((service, i) => <div className="grid-flow-row-dense" key={`service_${i}`}><Asset assetData={service} /></div> )}
        </div> */}

        <div className="container relative mx-auto flex flex-wrap py-8 md:py-24 px-8 md:px-16 lg:px-0">
          <div className="w-full lg:w-1/2 lg:pr-6">{services.filter((s, i) => !(i % 2)).map((service, i) => <Asset assetData={service} key={`service_l_${i}`} />)}</div>
          <div className="w-full lg:w-1/2 lg:pl-6">{services.filter((s, i) => (i % 2)).map((service, i) => <Asset assetData={service} key={`service_r_${i}`} />)}</div>
        </div>

        {/* abstract image */}
        <div className="absolute bottom-0 right-0 opacity-25" style={{width: '36rem', zIndex: '-1', transform: 'rotateY(180deg)'}}>
          { abstractImg && <Img fluid={abstractImg.childImageSharp.fluid} style={{transform: 'rotateY(180deg)'}} /> }
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
