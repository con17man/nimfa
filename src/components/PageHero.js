import React from 'react';

const PageHero = ({heroInfo}) => {
  const { title, headline, image, darkTextColor } = heroInfo;
  return (
    <div className="relative mx-auto lg:-mt-28">
      <div className={`w-full bg-cover bg-center pb-16 pt-40 md:pt-72 ${headline ? 'lg:pt-72' : 'lg:pt-100'}`} style={{backgroundImage: `url(${image.childImageSharp.fluid.src})`}}>
        <div className="container mx-auto px-8 md:px-16">
          <h1 className={`font-montserrat-alternates font-bold text-3xl lg:text-5xl tracking-wider ${darkTextColor && darkTextColor ? 'text-black': 'text-white'}`}>{title}</h1>
          {headline && <div className={`hidden lg:block tracking-wide text-sm pb-4 w-8/12 ${darkTextColor && darkTextColor ? 'text-black': 'text-white'}`} dangerouslySetInnerHTML={{ __html: headline }} />}
        </div>
      </div>

      {headline && <div className="block md:hidden tracking-wide text-sm px-8 md:px-16 pt-10 w-full text-black" dangerouslySetInnerHTML={{ __html: headline }} />}
    </div>
  )
}

export default PageHero;
