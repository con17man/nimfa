import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const TeamMember = ({member}) => {
  const { fullname, email, phone, image } = member;

  return (
    <div className="flex py-6">
      <div className="flex-none w-40 h-40 rounded-full">
        <Img fluid={image.childImageSharp.fluid} alt={fullname} />
      </div>
      <div className="flex flex-col content-center justify-center">
        <p className="font-bold">{fullname}</p>
        <a href={`mailto:${email}`} className="py-1 hover:underline">{email}</a>
        <a href={`tel:${phone}`} className="py-1 hover:underline">{phone}</a>
      </div>
    </div>
  );
};

const ContactPage = () => {

  const { pageContact: {hero, address, team, abstractImg} } = useStaticQuery(graphql`
    query queryContactPageData {
      pageContact {
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

        address {
          fullAddress
          companyName
          gMap { embeded }
        }

        team {
          fullname
          email
          phone
          image {
            childImageSharp {
              fluid(maxWidth: 2000, toFormat: WEBP) {
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
        <div className="container relative mx-auto py-24 px-8 md:px-16 lg:px-0 tracking-wide">
          <p className="py-4 md:pt-16 uppercase text-3xl font-bold">{address.companyName}</p>
          <p className="py-4 font-light">Adresa: {address.fullAddress}</p>

          {/* GMAP */}
          <div dangerouslySetInnerHTML={{__html: address.gMap.embeded}}></div>

          {/* TEAM */}
          <div className="flex flex-wrap">
            { team.map((member, i) => <div className="w-full lg:w-1/2" key={i+1}><TeamMember member={member} /></div> )}
          </div>
        </div>

        {/* abstract image */}
        <div className="absolute opacity-25" style={{width: '36rem', zIndex: '-1', right: '-150px', bottom: '-100px'}}>
          { abstractImg && <Img fluid={abstractImg.childImageSharp.fluid} style={{transform: 'rotate(270deg)'}} /> }
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;