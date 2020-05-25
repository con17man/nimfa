import React from 'react';
import { Link } from 'gatsby';

import servicesImg from '../assets/images/quickLink_services.png';
import productsImg from '../assets/images/quickLink_products.png';

const goToSections = [
  {
    name: 'Products',
    url: '/products',
    img: productsImg
  },
  {
    name: 'Services',
    url: '/services',
    img: servicesImg
  },
  {
    name: 'Industries',
    url: '/industries',
    img: ''
  }
];

const QuickLinks = () => {
  return(
    <div className="quick-links-wrapper w-full">
      {/* <div className="container mx-auto relative flex content-center items-center justify-center content-center text-center md:px-16 -mt-20"> */}
      <div className="container mx-auto relative grid grid-flow-col grid-cols-3 text-center md:px-16 -mt-20">
        {goToSections.map((section, i) => {
          return  <Link to={section.url} key={i+1} className="block overflow-hidden relative">
                    {
                      section.img
                        ? <img src={section.img} alt={section.name} className="duration-500 ease-in-out hover:scale-105 origin-center transform transition" />
                        : <div className="h-full bg-blue"></div>
                    }
                    <p className={`absolute inset-1/2 flex items-center justify-center uppercase font-medium text-xl ${i%2 === 0 ? 'text-white': 'text-black'}`}>{section.name}</p>
                  </Link>
        })}
      </div>
    </div>
  );
};

export default QuickLinks;