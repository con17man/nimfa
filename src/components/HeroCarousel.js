import React, { useEffect, useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Slider from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Hero = ({ title, link, linkLabel, img, linkCSS }) => {

  const innerWidth = typeof window !== 'undefined' && window.innerWidth;
  const matchMedia = typeof window !== 'undefined' && window.matchMedia;

  const [mQuery, setMQuery] = useState({
    matches: innerWidth < 1024 ? true : false
  });

  useEffect(() => {
    let mediaQuery = matchMedia("(min-width: 1024px)");
    mediaQuery.addEventListener('change', () => {
      mediaQuery.addListener(setMQuery);
    });

    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setMQuery);
  }, [matchMedia]);

  return (
  <div className="relative">
    <div className="relative " style={{paddingBottom: '510px'}}> {/* pb-3/6 lg:pb-1/2 xl:pb-4/12 */}
      <div className="absolute object-cover w-full h-full">
        <Img fluid={img.childImageSharp.fluid} alt={`Nimfa - ${title}`} style={{paddingBottom: mQuery.matches ? '65%' : 'unset'}} />
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
                        img={card.img}
                        linkCSS={card.linkCSS}>
                    </Hero>
          })}
        </Slider>
      </div>
    </div>
  )
};

export default HeroCarousel;