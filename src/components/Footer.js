import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from "gatsby-image";

const Footer = () => {
  const {
    footer: {
      contact: {
        address: { city, county, street, code, gMap }, email, phone },
        info: { links },
        logo
      }
    } = useStaticQuery(graphql`
    query FooterDataQuery {
      footer {
        contact {
          address { street, city, code, county, gMap }
          email
          phone
        }
        info {
          links { name, url }
          social { icon, url }
        }

        logo {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

    }
  `);

  // const [ aboutLink, logisticsLink, privacyLink, tandcLink ] = links;

  // const chunkLinks = new Array(Math.ceil(links.length / 2)).fill().map(_ => links.splice(0,2));

  return (
    <footer className="bg-raisin md:py-20">
      <section className="section flex flex-col w-8/12 md:w-full md:flex-row relative container mx-auto text-center md:divide-x divide-white text-gray-100">
        <div className="w-full md:w-1/3 order-2 md:order-1 md:pr-8 py-10 md:py-0">
          <p className="uppercase font-bold text-orange-500 pb-10">Contact</p>

          <a href={gMap} target="_blank" rel="noopener noreferrer" className="block hover:text-white">{`${street}, ${city} ${code}, ${county}`}</a>

          <a href={`tel:${phone}`} className="block py-4 hover:text-white">{`TEL/FAX: ${phone}`}</a>

          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="block hover:text-white">{email}</a>
        </div>

        <div className="w-full md:w-1/3 order-1 md:order-2 px-8 py-10 md:py-0 flex flex-col items-center justify-center">
          <Img fluid={logo.childImageSharp.fluid} alt="Nimfa - Tevi Laminate" className="w-32" />
        </div>

        <div className="w-full md:w-1/3 order-3 md:pl-8 py-10 md:py-0">
          <p className="uppercase font-bold text-orange-500 pb-10">INFORMAȚII</p>

          <div className="divide-x divide-white">
            {links.map((link, i) => (
              <Link to={link.url} key={i+1} className="px-2 hover:text-white">{link.name}</Link>
            ))}
          </div>
          {/* <div className="divide-x divide-white">
            <Link to={aboutLink.url} className="px-2 hover:text-white">{aboutLink.name}</Link>
            <Link to={logisticsLink.url} className="px-2 hover:text-white">{logisticsLink.name}</Link>
          </div>
          <div className="divide-x divide-white">
            <Link to={privacyLink.url} className="px-2 hover:text-white">{privacyLink.name}</Link>
            <Link to={tandcLink.url} className="px-2 hover:text-white">{tandcLink.name}</Link>
          </div> */}
        </div>
      </section>
    </footer>
  );
}

export default Footer;