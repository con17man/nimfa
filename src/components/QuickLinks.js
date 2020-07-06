import React, { Component } from 'react';
import { Link } from 'gatsby';

import servicesImg from '../assets/images/quickLink_services.png';
import productsImg from '../assets/images/quickLink_products.png';
import industriesImg from '../assets/images/quickLink_industries.jpg';

const goToSections = [
  {
    name: 'Produse',
    url: '/products',
    img: productsImg
  },
  {
    name: 'Servicii',
    url: '/services',
    img: servicesImg
  },
  {
    name: 'Industrie',
    url: '/industries',
    img: industriesImg
  }
];



class QuickLinks extends Component {

  changeBG = (el, bgImg) => {
    if (el.style.backgroundImage) {
      el.style.backgroundImage = '';
    } else {
      el.style.backgroundImage = `url(${bgImg})`;
    }
  };

  render() {
    return(
      <div className="quick-links-wrapper w-full">
        <div className="container mx-auto relative grid grid-flow-col grid-cols-3 text-center md:px-16 -mt-20">
          {goToSections.map((section, i) => {
            return  <Link to={section.url} key={i+1} className="relative block overflow-hidden">
                      <div className={`bg-cover bg-center py-56 hover:bg-blue hover:text-white uppercase font-medium text-xl ${i%2 === 0 ? 'text-white': 'text-black'}`}
                          tabIndex={-1} role="link"
                          style={{backgroundImage: `url(${section.img})`}}
                          onFocus={(el) => this.changeBG(el.target, section.img)}
                          onBlur={(el) => this.changeBG(el.target, section.img)}
                          onMouseOut={(el) => this.changeBG(el.target, section.img)}
                          onMouseOver={(el) => this.changeBG(el.target, section.img)}>
                        {section.name}
                      </div>
                    </Link>
          })}
        </div>
      </div>
    );
  };

};

export default QuickLinks;