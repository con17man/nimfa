import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Search from './search/Search';

const ContactHeader = () => {
  const queryData = useStaticQuery(graphql`
    query ContactHeaderQuery {
      footer {
        contact { email, phone }
      }
    }
  `);

  const { contact: { email, phone } } = queryData.footer;

  return(
    <section className="contact-header w-full js-contact-header">
      <div className="container mx-auto p-2 flex justify-between">
        <div className="contact-header-left flex">
          <Search />
        </div>

        <div className="contact-header-right flex justify-center items-center text-sm">
          <span className="hidden md:block font-medium uppercase">Solicită ofertă:</span>
          <div className="inline divide-x divide-black">
            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="inline-block px-4 font-light hover:underline">{email}</a>
            <a href={`tel:${phone}`} className="hidden md:inline-block px-4 font-light hover:underline">{phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHeader;