import React, { Component } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const advantages = [
  {
    title: 'Avantaj 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Avantaj 2',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Avantaj 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    title: 'Avantaj 4',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Avantaj 5',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];


const AdvantageItem = ({title, description}) => (
  <div className="adv-item relative text-center px-4">
    <div className="adv-item-img h-32 w-32 my-6 rounded-full mx-auto bg-red flex justify-center items-center text-6xl text-white">
      <FontAwesomeIcon icon="file-image" />
    </div>
    <p className="adv-item-title font-medium uppercase">{title}</p>
    <p className="adv-item-separator">--</p>
    <p className="adv-item-description">{description}</p>
  </div>
);


export class AdvantagesCarousel extends Component {
  render() {

    const sliderSettings = {
      dots: false,
      infinite: false,
      autoplay: false,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return (
      <div className="adv-wrapper w-full bg-grey -mt-16 pb-40">
        <div className="adv-slider relative container mx-auto px-16">
          <Slider {...sliderSettings}>
            {advantages.map((adv, i) => {
              return  <AdvantageItem key={i+1}
                        title={adv.title}
                        description={adv.description}
                        img={adv.img}>
                      </AdvantageItem>
            })}
          </Slider>
        </div>
      </div>
    )
  }
}

export default AdvantagesCarousel;
