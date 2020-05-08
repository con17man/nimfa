import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Footer = () => {
  const footerData = useStaticQuery(graphql`
    query FooterDataQuery {
      footer {
        contact {
          address {
            street
            city
            code
            county
          }
          email
          phone
        }
        info {
          links {
            name
            url
          }
          social {
            icon
            url
          }
        }
      }
    }
  `);

  const {
    contact: { address: { city, county, street, code }, email, phone },
    info: { links, social } } = footerData.footer;

  console.log(footerData);

  return (
    <section className="section flex relative container mx-auto text-white text-center divide-x divide-white">
      <div className="w-1/3 pr-10">
        <p className="uppercase font-bold text-red pb-10">Contact</p>
        <p className="">{`${street}, ${city} ${code}, ${county}`}</p>
        <p className="">{`TEL/FAX: ${phone}`}</p>
        <p className="">{email}</p>
      </div>

      <div className="w-1/3 px-10">
        <em>Add LOGO here</em>
      </div>

      <div className="w-1/3 pl-10">
        <p className="uppercase font-bold text-red pb-10">Informatii</p>
        <p className="divide-x divide-white">
          {links.map((link, i) => {
            return <Link to={link.url} key={i+1} className="px-1 hover:underline">{link.name}</Link>
          })}
        </p>
        <p className="">
          {social.map((socialLink, i) => {
            return <a href={socialLink.url} target="_blank" rel="noopener noreferrer" key={i+1} className="px-2">{socialLink.icon}</a>
          })}
        </p>
      </div>
    </section>
  );
}

export default Footer;