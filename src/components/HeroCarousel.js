import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Slider from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Hero = ({ card }) => {

  const { title, link, linkLabel, img, linkCSS } = card;

  return (
  <div className="relative">
    <div className="relative pb-108 md:pb-138">
      <div className="absolute object-cover w-full h-full">
        <Img fluid={img.childImageSharp.fluid} alt={`Nimfa - ${title}`} className="pb-64 lg:pb-0" />
      </div>
    </div>

    <div className={`flex flex-col absolute transform content-center h-full justify-center px-16 py-8 md:text-center ${linkCSS} top-0 w-full`}>
      <div className="relative">
        <div className="container mx-auto">
          <h1 className="md:hidden font-montserrat-alternates font-bold leading-snug text-3xl pb-4" dangerouslySetInnerHTML={{__html: title.split(' ').join('<br/>') }} />
          <h1 className="hidden md:block font-montserrat-alternates font-bold text-5xl pb-2">{title}</h1>
          <p className="uppercase">
            <Link to={link} className="font-medium hover:underline">
              {linkLabel} <FontAwesomeIcon icon="angle-right" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
)};


const HeroCarousel = () => {

  const queryData = useStaticQuery(graphql`
    query heroData {
      carousels {
        heroCarousel {
          title
          linkLabel
          link
          linkCSS
          img {
            childImageSharp {
              fluid(maxWidth: 2000, toFormat: PNG) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const cards = queryData.carousels.heroCarousel;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    speed: 400,
    initialSlide: Math.floor(Math.random() * cards.length),
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="w-full bg-white">
      <div className="relative mx-auto -mt-1 lg:-mt-28 js-hero-component">
        <Slider {...settings}>
          {cards.map((card, i) => <Hero key={i} card={card} /> )}
        </Slider>
      </div>
    </div>
  )
};

export default HeroCarousel;