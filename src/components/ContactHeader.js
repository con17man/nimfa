import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactHeader = () => {
  const queryData = useStaticQuery(graphql`
    query ContactHeaderQuery {
      footer {
        contact { email, phone }
        info {
          social { icon, url }
        }
      }
    }
  `);

  const { contact: { email, phone}, info: { social } } = queryData.footer;

  return(
    <div className="contact-header w-full">
      <div className="container mx-auto p-2 flex justify-between">
        <div className="contact-header-left flex">
          { /* Filter only fb & insta */
            social.filter(s => s.icon.match(/(instagram)|(facebook)/g)).map((socialLink, i) => {
              return <button className="rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-200" key={i+1}>
                <a href={socialLink.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={socialLink.icon.split(',')} />
                </a>
              </button>
            })
          }

          <button className="font-light px-2 rounded hover:bg-gray-200">
            <span className="lowercase text-sm">search</span> <FontAwesomeIcon icon='search' />
          </button>
        </div>

        <div className="contact-header-right flex justify-center items-center divide-x divide-black text-sm">
          <span className="px-4 font-medium uppercase">Solicita Oferta</span>
          <a href={`mailto:${email}`} className="px-4 font-light hover:underline">{email}</a>
          <a href={`tel:${phone}`} className="px-4 font-light hover:underline">{phone}</a>
        </div>
      </div>
    </div>
  );
}

export default ContactHeader;