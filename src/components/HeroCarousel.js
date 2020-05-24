import React, { Component } from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick';

import heroImg from '../assets/images/oil-pipe.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * @todo - move the array bellow to JSON.
 */
const cards = [
  {
    title: `Let the enery flow!`,
    link: `/contact`,
    linkLabel: `Contact us`,
    img: heroImg
  },
  {
    title: `50% Discount`,
    link: `/products`,
    linkLabel: `Buy`,
    img: heroImg
  }
];



const Hero = ({ title, link, linkLabel, img }) => (
  <div className="relative">
    <div className="relative pb-3/6 lg:pb-1/2 xl:pb-4/12">
      <img className="absolute object-cover w-full h-full" src={img} alt="Nimfa" />
    </div>

    <div className="flex flex-col absolute container translate-x-1/2 transform content-center h-full justify-center px-16 py-8 text-white top-0 w-full">
      <h1 className="font-montserrat-alternates font-bold text-5xl pb-2">{title}</h1>
      <p className="uppercase">
        <Link to={link} className="font-medium hover:underline">
          {linkLabel} <FontAwesomeIcon icon="angle-right" />
        </Link>
      </p>
    </div>
  </div>
);



class HeroCarousel extends Component {
  render() {

    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      speed: 400,
      // initialSlide: Math.floor(Math.random() * cards.length),
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="w-full bg-white">
        <div className="relative mx-auto -mt-20 js-hero-component">
          <Slider {...settings}>
            {cards.map((card, i) => {
              return <Hero key={i}
                          title={card.title}
                          link={card.link}
                          linkLabel={card.linkLabel}
                          img={card.img}>
                      </Hero>
            })}
          </Slider>
        </div>
      </div>
    )
  };
};

export default HeroCarousel;