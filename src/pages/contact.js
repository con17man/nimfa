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
      <div className="flex-none w-24 h-24 md:h-40 md:w-40">
        <Img fluid={image.childImageSharp.fluid} className="rounded-full" alt={fullname} />
      </div>
      <div className="flex flex-col content-center justify-center text-sm">
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
        <div className="container relative mx-auto py-8 md:py-24 px-8 md:px-16 lg:px-0 tracking-wide">
          <p className="py-4 md:pt-16 uppercase text-3xl font-bold">{address.companyName}</p>
          <p className="py-4 font-light">Adresa: {address.fullAddress}</p>

          {/* GMAP */}
          <div className="-mx-8 md:mx-0" dangerouslySetInnerHTML={{__html: address.gMap.embeded}}></div>

          {/* TEAM */}
          <div className="flex flex-wrap">
            { team.map((member, i) => <div className="w-full lg:w-1/2" key={i+1}><TeamMember member={member} /></div> )}
          </div>
        </div>

        {/* abstract image */}
        <div className="absolute bottom-0 right-0 opacity-25" style={{width: '36rem', zIndex: '-1', transform: 'rotateY(180deg)'}}>
          { abstractImg && <Img fluid={abstractImg.childImageSharp.fluid} style={{transform: 'rotateY(180deg)'}} /> }
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;