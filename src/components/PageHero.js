import React from 'react';

const PageHero = ({heroInfo}) => {
  const { title, description, heroImg } = heroInfo;
  return (
    <div className="relative mx-auto -mt-28">
      <div className="relative">
        <div className="relative pb-3/6 lg:pb-2/5 xl:pb-3/12">
          <img className="absolute object-cover w-full h-full" src={heroImg} alt="Nimfa" />
        </div>

        <div className="flex flex-col absolute transform content-end h-full justify-end px-16 py-8 text-white top-0 w-full">
          <div className="relative">
            <div className="container mx-auto">
              <h1 className="font-montserrat-alternates font-semibold text-5xl tracking-wider">{title}</h1>
              <p className="text-sm pb-4">{description}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PageHero;
