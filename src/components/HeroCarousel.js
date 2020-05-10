import React from 'react';
import { Link } from 'gatsby';

import heroImg from '../assets/images/oil-pipe.png';

const cards = [
  {
    title: `Let the enery flow!`,
    link: `/contact`,
    linkLabel: `Contact us`,
    img: heroImg
  }
];

const Hero = ({ title, link, linkLabel, img }) => (
  <div className="relative container mx-auto">

    <div className="relative pb-5/12">
      <img className="absolute object-cover w-full h-full" src={img} alt="Contact" />
    </div>

    <div className="flex flex-col absolute content-center h-full justify-center px-16 py-8 text-white top-0 w-full">
      <h1 className="font-montserrat-alternates font-bold text-5xl pb-2">{title}</h1>
      <p className="uppercase hover:underline">
        <Link to={link}> {linkLabel} &rsaquo; </Link>
      </p>
    </div>

  </div>
);

const HeroCarousel = () => (
  <div className="w-full bg-white">

    {cards.map((card, i) => {
      return <Hero key={i}
                  title={card.title}
                  link={card.link}
                  linkLabel={card.linkLabel}
                  img={card.img}>
              </Hero>
    })}

  </div>
);

export default HeroCarousel;