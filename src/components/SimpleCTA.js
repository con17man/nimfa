import React from 'react';
import { Link } from 'gatsby';

/* Example:
 * <SimpleCTA title="We look forward to work with you!" cta={{label: 'Contact', link: '/contact'}} />
 */

const SimpleCTA = ({title, cta}) => {
  return(
    <div className="simple-cta w-full bg-grey text-center py-12">
      <p className="simple-cta-title max-w-sm mx-auto mb-6 font-montserrat-alternates font-semibold text-4xl tracking-wider">{title}</p>
      <Link to={cta.link}>
        <button className="py-4 px-16 bg-red text-white uppercase font-medium">{cta.label}</button>
      </Link>
    </div>
  );
};

export default SimpleCTA;