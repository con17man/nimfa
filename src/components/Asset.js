import React from 'react';
import Img from 'gatsby-image';

const Asset = ({assetData}) => {
  const { title, description, icon } = assetData;
  return (
    <div className="asset flex py-10">
      <div className="asset-icon flex-none w-24 pr-6">
        <Img fluid={icon.childImageSharp.fluid} alt={`Nimfa - ${title}`} />
      </div>

      <div className="asset-info flex-1 border-l-2 border-orange pl-6">
        <p className="asset-info-title pb-4 uppercase font-bold tracking-wider">{title}</p>
        <p className="asset-info-description text-sm font-light tracking-wide leading-snug" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default Asset;