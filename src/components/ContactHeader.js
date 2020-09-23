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
    <section className="contact-header w-full">
      <div className="container mx-auto p-2 flex justify-between">
        <div className="contact-header-left flex">
          <Search />
        {/* <AlgoliaSearch /> */}
        {/* <div className="mr-2"><FontAwesomeIcon icon='search' /></div>
        <input className="bg-white focus:outline-none rounded block w-full appearance-none leading-normal" type="email" placeholder="Search" /> */}
          {/* <button className="font-light px-2 rounded hover:bg-gray-200">
            <span className="lowercase text-sm">search</span> <FontAwesomeIcon icon='search' />
          </button> */}
        </div>

        <div className="contact-header-right flex justify-center items-center text-sm">
          <span className="font-medium uppercase">Solicita Oferta:</span>
          <div className="inline divide-x divide-black">
            <a href={`mailto:${email}`} className="px-4 font-light hover:underline">{email}</a>
            <a href={`tel:${phone}`} className="px-4 font-light hover:underline">{phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHeader;