import React from 'react';
import Slider from 'react-slick';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { slugify } from './Helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomArrow = ({ arrow, className, style, onClick }) => {
  const globalArrowStyles = {
    display: 'block',
    top: '70%',
    fontSize: '2.5rem',
    color: '#363D3E',
    lineHeight: '1',
    width: 'auto',
    height: 'auto',
    zIndex: '50',
  };

  const positioning = arrow === 'right' ? {right: '2rem'} : arrow === 'left' ? {left: '2rem'} : {};

  return (
    <div
      className={className}
      style={{ ...style, ...globalArrowStyles, ...positioning}}
      onClick={onClick}
      role="none"
    >
      <FontAwesomeIcon icon={`chevron-${arrow}`} />
    </div>
  );
};

const AdvantageItem = ({title, description, icon, url}) => (
  <Link to={`${url}#${slugify(title)}`}>
    <div className="adv-item relative text-center px-24 md:px-2">
      <div className="adv-item-img h-32 w-32 my-6 rounded-full shadow-lg mx-auto bg-orange-500 hover:bg-orange-700 flex justify-center items-center text-6xl text-white">
        <Img fluid={icon} className="w-24" alt={title} />
      </div>
      <p className="adv-item-title font-medium uppercase">{title}</p>
      <p className="adv-item-separator font-medium">--</p>
      <p className="adv-item-description text-xs">{description.length <= 70 ? description : `${description.substr(0, 70)}…`}</p>
    </div>
  </Link>
);


const AdvantagesCarousel = () => {
  const queryData = useStaticQuery(graphql`
    query advantagesQuery {
      carousels {
        advantagesCarousel {
          description
          title
          url
          icon {
            childImageSharp {
              fluid(maxWidth: 192) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const advantages = queryData.carousels.advantagesCarousel;

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 7000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrow arrow="right" />,
    prevArrow: <CustomArrow arrow="left" />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="adv-wrapper w-full bg-grey -mt-16 pb-32">
      <div className="adv-slider relative max-w-xl lg:max-w-3xl mx-auto">
        <Slider {...sliderSettings}>
          {advantages.map((adv, i) => {
            return  <AdvantageItem key={i+1}
                      title={adv.title}
                      description={adv.description}
                      icon={adv.icon.childImageSharp.fluid}
                      url={adv.url}>
                    </AdvantageItem>
          })}
        </Slider>
      </div>
    </div>
  )
}

export default AdvantagesCarousel;
