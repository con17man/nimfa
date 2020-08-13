import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Slider from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Hero = ({ title, link, linkLabel, img }) => (
  <div className="relative">
    <div className="relative" style={{paddingBottom: '510px'}}> {/* pb-3/6 lg:pb-1/2 xl:pb-4/12 */}
      <div className="absolute object-cover w-full h-full">
        <Img fluid={img.childImageSharp.fluid} alt={`Nimfa - ${title}`} />
      </div>
    </div>

    <div className="flex flex-col absolute transform content-center h-full justify-center px-16 py-8 text-white top-0 w-full">
      <div className="relative">
        <div className="container mx-auto">
          <h1 className="font-montserrat-alternates font-bold text-5xl pb-2">{title}</h1>
          <p className="uppercase">
            <Link to={link} className="font-medium hover:underline">
              {linkLabel} <FontAwesomeIcon icon="angle-right" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);


const HeroCarousel = () => {

  const queryData = useStaticQuery(graphql`
    query heroData {
      carousels {
        heroCarousel {
          title
          linkLabel
          link
          img {
            childImageSharp {
              fluid(maxWidth: 2000, toFormat: WEBP) {
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
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    speed: 400,
    initialSlide: Math.floor(Math.random() * cards.length),
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="w-full bg-white">
      <div className="relative mx-auto -mt-28 js-hero-component">
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

export default HeroCarousel;