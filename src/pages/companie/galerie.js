import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Slider from 'react-slick';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';
import { slugify } from '../../components/Helpers';


const carouselSettings = {
  dots: true,
  fade: true,
  arrows: false,
  infinite: true,
  // autoplay: true,
  // autoplaySpeed: 5000,
  pauseOnHover: true,
  speed: 400,
  lazyLoad: true,
  // initialSlide: Math.floor(Math.random() * galeries.length),
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: dots => <ul> {dots} </ul>,
  customPaging: i => <button aria-label="slide-btn" className="nf-carousel--dot" key={i+1} />
};


const SmallCarousel = ({carousel, index}) => {
  const {text, gallery} = carousel;

  const hasBorder = !(index % 4 < 2);

  return (
    <div className="mt-6">
      <div className={`relative mx-auto nf-carousel ${hasBorder ? 'nf-carousel--border bg-orange-500': ''}`}>
        <Slider {...carouselSettings} className={`${hasBorder ? 'p-10': ''}`}>
          {gallery.map((img, i) => {
            return (
              <Img fluid={img.img.childImageSharp.fluid} alt={img.name} key={i+1} />
            )
          })}
        </Slider>
      </div>
      <div dangerouslySetInnerHTML={{__html: text}} className="text-sm mt-6" />
    </div>
  );
};


const GaleryPage = () => {

  const { pageGalerie: {hero, galeries, team, smallCarousels} } = useStaticQuery(graphql`
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
              fluid(maxWidth: 88, quality: 90) {
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

        team {
          alt
          img {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        smallCarousels {
          text
          gallery {
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

  return (
    <Layout>
      <SEO title={hero.title} />
      <PageHero heroInfo={hero} />
      <div className="w-full relative">
        <div className="container relative mx-auto py-8 md:py-24 px-8">
          {/* CAROUSEL GALERY */}
          <div className="flex flex-wrap tracking-wider">
            {/* GALERY SELECTOR AREA */}
            <div className="w-full md:w-3/12 grid gap-2 grid-cols-1 md:grid-cols-2">
              {galeries.map((galery, i) => {
                return (
                  <div key={i+1}
                    onClick={() => setSelectedGalery(galery)}
                    onKeyDown={() => setSelectedGalery(galery)}
                    role="button"
                    tabIndex={i+1}
                    id={slugify(galery.name)}
                    className={`flex flex-row md:flex-col justify-center content-center items-center md:h-36 md:p-2 text-sm font-light text-center text-white uppercase
                      outline-none hover:bg-orange-500 ${selectedGalery.name === galery.name ? 'bg-orange-500' : 'bg-blue-500'}`}
                  >
                    <Img fluid={galery.icon.childImageSharp.fluid} alt={`Nimfa - ${galery.name}`} className="w-10 ml-6 md:ml-0" />
                    <div className="flex-1 md:flex-none pt-3 md:pr-0 text-xs">{galery.name}</div>
                  </div>
                )
              })}
            </div>

            {/* SELECTED GALERY VIEW */}
            <div className="w-full md:w-9/12 pl-2 nf-carousel">
              <Slider {...carouselSettings}>
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

          {/* CAROUSEL -- TEAM */}
          <div className="relative mx-auto mt-8 nf-carousel">
            <Slider {...carouselSettings}>
              {team.map((img, i) => {
                return (
                  <Img fluid={img.img.childImageSharp.fluid} alt={img.alt} className="w-20 md:w-24 ml-6 md:ml-0" key={i+1} />
                )
              })}
            </Slider>
          </div>
          <div className="w-full bg-orange-500 text-white text-center text-xl uppercase font-semibold tracking-wide px-4 py-1 -mt-3">
            Echipa Nimfa
          </div>

          {/* VIDEO */}
          <div className="relative w-full mt-8 nf-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/k5OLfSxey2A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          {/* SMALL CAROUSELS */}
          <div className='grid gap-4 grid-cols-1 md:grid-cols-2 mt-8'>
              { smallCarousels.map((carousel, i) => <SmallCarousel carousel={carousel} index={i} key={i} /> )}
          </div>


        </div>
      </div>
    </Layout>
  );
};

export default GaleryPage;