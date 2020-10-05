import React from 'react';
import Img from 'gatsby-image';
import Slider from 'react-slick';

const PageHero = ({heroInfo}) => {
  const { title, headline, image, darkTextColor } = heroInfo;
  return (
    <div className="relative mx-auto lg:-mt-28">
      <Slider>
        <div className="relative">
          <div className="relative pb-108 md:pb-138">
            <div className="absolute object-cover w-full h-full">
              <Img fluid={image.childImageSharp.fluid} alt={`Nimfa - ${title}`} className="pb-72" />
            </div>
          </div>

          <div className="flex flex-col absolute transform content-end h-full justify-center md:justify-end pt-28 md:pt-0 px-8 md:px-16 py-8 text-white top-0 w-full">
            <div className="relative">
              <div className="container mx-auto">
                <h1 className={`font-montserrat-alternates font-bold text-3xl md:text-5xl tracking-wider ${darkTextColor && darkTextColor ? 'text-black': 'text-white'}`}>{title}</h1>
                {headline && <div className={`hidden lg:block tracking-wide text-sm pb-4 w-8/12 ${darkTextColor && darkTextColor ? 'text-black': 'text-white'}`} dangerouslySetInnerHTML={{ __html: headline }} />}
              </div>
            </div>
          </div>

        </div>

      </Slider>
      {headline && <div className="block md:hidden tracking-wide text-sm px-8 md:px-16 pt-10 w-full text-black" dangerouslySetInnerHTML={{ __html: headline }} />}
    </div>
  )
}

export default PageHero;
