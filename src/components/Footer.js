import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from "gatsby-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const queryData = useStaticQuery(graphql`
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
      }

      logo: file(relativePath: {eq: "gatsby-icon.png"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const {
    contact: { address: { city, county, street, code, gMap }, email, phone },
    info: { links, social } } = queryData.footer;

    const [ aboutLink, logisticsLink, privacyLink, tandcLink ] = links;

  // const chunkLinks = new Array(Math.ceil(links.length / 2)).fill().map(_ => links.splice(0,2));

  return (
    <section className="section flex relative container mx-auto text-white text-center divide-x divide-white text-gray-500">
      <div className="w-1/3 pr-8">
        <p className="uppercase font-bold text-red pb-10">Contact</p>

        <a href={gMap} target="_blank" rel="noopener noreferrer" className="block hover:text-white">{`${street}, ${city} ${code}, ${county}`}</a>

        <a href={`tel:${phone}`} className="block py-4 hover:text-white">{`TEL/FAX: ${phone}`}</a>

        <a href={`mailto:${email}`} className="block hover:text-white">{email}</a>
      </div>

      <div className="w-1/3 px-8 flex flex-col items-center justify-center">
        <Img fluid={queryData.logo.childImageSharp.fluid} className="w-32" />
      </div>

      <div className="w-1/3 pl-8">
        <p className="uppercase font-bold text-red pb-10">Informatii</p>

        {/* TODO - REFACTOR SPLITING */}
        <div className="divide-x divide-white">
          <Link to={aboutLink.url} className="px-2 hover:text-white">{aboutLink.name}</Link>
          <Link to={logisticsLink.url} className="px-2 hover:text-white">{logisticsLink.name}</Link>
        </div>
        <div className="divide-x divide-white">
          <Link to={privacyLink.url} className="px-2 hover:text-white">{privacyLink.name}</Link>
          <Link to={tandcLink.url} className="px-2 hover:text-white">{tandcLink.name}</Link>
        </div>

        {/* {links.map((link, i) => {
            return <Link to={link.url} key={i+1} className="px-2 hover:underline">{link.name}</Link>
          })} */}

        {/* {
          chunkLinks.map((chunk, id) => {
            return <div className="divide-x divide-white" key={id+1}>
              {chunk.map((link, i) => {
                return <Link to={link.url} key={i+1} className="px-2 hover:text-white">{link.name}</Link>})
              }
            </div>
          })
        } */}

        <div className="pt-10">
          {social.map((socialLink, i) => {
            return <a href={socialLink.url} target="_blank" rel="noopener noreferrer" key={i+1} className="px-2 hover:text-white">
              <FontAwesomeIcon icon={socialLink.icon.split(',')} />
            </a>
          })}
        </div>
      </div>
    </section>
  );
}

export default Footer;