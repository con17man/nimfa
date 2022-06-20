import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Slider from 'react-slick';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';
import { slugify } from '../../components/Helpers';

const GaleryPage = () => {

  const { pageGalerie: {hero, galeries} } = useStaticQuery(graphql`
    query queryGaleryPageData {
      pageGalerie {
        hero {
          title
          headline
          image {
            childImageSharp {
              fluid(maxWidth: 2280, toFormat: PNG, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        galeries {
          name
          icon {
            childImageSharp {
              fluid(maxWidth: 192, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          carousel {
            name
            img {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

      }
    }
  `);

  const [ selectedGalery, setSelectedGalery ] = useState(galeries[0]);

  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
    pauseOnHover: true,
    speed: 400,
    lazyLoad: true,
    initialSlide: Math.floor(Math.random() * galeries.length),
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => <ul> {dots} </ul>,
    customPaging: i => <button aria-label="slide-btn" className="nf-carousel--dot" key={i+1} />
  };

  return (
    <Layout>
      <SEO title={hero.title} />
      <PageHero heroInfo={hero} />
      <div className="w-full relative">
        <div className="container relative mx-auto py-8 md:py-24 px-8">
          <div className="flex flex-wrap tracking-wider">
            {/* GALERY SELECTOR AREA */}
            <div className="w-full md:w-1/3 grid gap-2 md:gap-1 lg:gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {galeries.map((galery, i) => {
                return (
                  <div key={i+1}>
                    <div
                      onClick={() => setSelectedGalery(galery)}
                      onKeyDown={() => setSelectedGalery(galery)}
                      role="button"
                      tabIndex={i+1}
                      id={slugify(galery.name)}
                      className={`flex flex-row md:flex-col justify-center content-center items-center md:h-40 md:p-4 text-sm font-light text-center text-white uppercase
                        outline-none hover:bg-orange-500 ${selectedGalery.name === galery.name ? 'bg-orange-500' : 'bg-blue-500'}`}
                    >
                      <Img fluid={galery.icon.childImageSharp.fluid} alt={`Nimfa - ${galery.name}`} className="w-20 md:w-24 ml-6 md:ml-0" />
                      <div className="flex-1 md:flex-none pr-6 md:pr-0">{galery.name}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* SELECTED GALERY VIEW */}
            <div className="w-full md:w-2/3 pl-8 nf-carousel">
              <Slider {...settings}>
                {selectedGalery.carousel.map((image, i) => {
                  return (
                    <div key={i+1} className="relative" aria-hidden="true">
                      <div className="w-full bg-cover bg-center text-left md:text-center py-28 md:py-48 lg:py-56" style={{backgroundImage: `url(${image.img.childImageSharp.fluid.src})`}}></div>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GaleryPage;