import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';

const Asset = ({assetData, css}) => {
  const { title, description, icon } = assetData;

  const [ htmlDescr, setHtmlDescr ] = useState();

  useEffect(() => {
    function updateDescription() {
      setHtmlDescr(description);
    }
    updateDescription();
  }, [description]);

  return (
    <div className={`asset flex py-10 ${css && css}`}>
      <div className="asset-icon flex-none w-20 md:w-24 lg:w-28 pr-6">
        <Img fluid={icon.childImageSharp.fluid} alt={`Nimfa - ${title}`} style={{zIndex: '-1'}} />
      </div>

      <div className="asset-info flex-1 border-l-2 border-orange pl-6">
        <div className="asset-info-title pb-4 uppercase font-bold tracking-wider" id={title.toLowerCase().split(' ').join('-')}>{title}</div>
        <div className="asset-info-description text-sm font-light tracking-wide leading-snug" dangerouslySetInnerHTML={{ __html: htmlDescr }} />
      </div>
    </div>
  );
};

export default Asset;