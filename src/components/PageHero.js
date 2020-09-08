import React from 'react';
import Img from 'gatsby-image';

const PageHero = ({heroInfo}) => {
  const { title, headline, image, darkTextColor } = heroInfo;
  return (
    <div className="relative mx-auto -mt-28">
      <div className="relative">
        <div className="relative pb-3/6 lg:pb-2/5 xl:pb-3/12">
          <div className="absolute object-cover w-full h-full">
            {image && <Img fluid={image.childImageSharp.fluid} alt={`Nimfa - ${title}`} style={{position: 'unset'}} />}
          </div>
        </div>

        <div className="flex flex-col absolute transform content-end h-full justify-end px-16 py-8 text-white top-0 w-full">
          <div className="relative">
            <div className="container mx-auto">
              <h1 className={`font-montserrat-alternates font-semibold text-5xl tracking-wider ${darkTextColor && darkTextColor ? 'text-black': 'text-white'}`}>{title}</h1>
              <div className={`tracking-wide text-sm pb-4 w-8/12 ${darkTextColor && darkTextColor ? 'text-black': 'text-white'}`} dangerouslySetInnerHTML={{ __html: headline }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PageHero;
