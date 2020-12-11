import React from 'react';
import Img from 'gatsby-image';

import { slugify } from './Helpers';

const ProductDetails = ({product, reversed}) => {

  const {title, table, materials, dimensions, pressureRange, imgs: [productImg, abstractImg], description } = product;

  return (
    <section id={slugify(title)} className={`container relative mx-auto block lg:flex ${reversed ? 'lg:flex-row-reverse' : ''} pt-8 lg:pt-24 pb-12 px-8 md:px-16 lg:px-0 mb-0 lg:-mb-12 bg-white`}>
      {/* image */}
      <div className={`w-full lg:max-w-sm flex-none px-0 pb-1 lg:px-6 lg:pb-0`}>
        {abstractImg && <Img fluid={abstractImg.childImageSharp.fluid} alt={`Nimfa`} className="hidden lg:block" style={{width: '300px', marginBottom: '1rem'}} />}
        <Img fluid={productImg.childImageSharp.fluid} alt={`Nimfa - ${title}`} className="h-40 lg:h-auto object-cover" />
      </div>

      {/* content */}
      <div className={`flex-1 px-0 lg:px-6 font-light text-sm lg:text-base tracking-wide cursor-default`}>
        <div className="w-full bg-orange-500 text-white uppercase font-semibold px-4 py-1">{title}</div>

        {/* Product table */}
        { table && <ProductTable tableData={table} /> }

        {/* Product Dimensions */}
        { dimensions &&  <ProductProperty list={dimensions} listName="Dimensiuni" /> }

        {/* Product Materials */}
        { materials && <ProductProperty list={materials} listName="Materiale" /> }

        {/* Product Pressure Range */}
        { pressureRange && <ProductProperty list={pressureRange} listName="Clasa de presiune(#)" /> }

        {/* Product Description */}
        { description && <p className="pt-8" dangerouslySetInnerHTML={{__html: description}} /> }

        <div className="hidden opacity-0">
          <div className="w-2/12 md:w-2/12"></div>
          <div className="w-3/12 md:w-3/12"></div>
          <div className="w-4/12 md:w-4/12"></div>
          <div className="w-6/12 md:w-6/12"></div>
        </div>
      </div>
    </section>
  );
};

const ProductTable = ({tableData}) => {
  const {columns, rows, columnWidths, adnotations } = tableData;



  return (
    <div className="relative overflow-scroll disable-scrollbars">
    <table className="table w-full my-6 break-words text-sm lg:text-base">
      <thead>
        <tr>
          {columns.map((column, i) => <th key={i+1} className={`${columnWidths[i]} uppercase p-1 border border-orange-500 border-t-0 first:border-l-0 last:border-r-0`}>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          return <tr key={i+1}>
            {row.map((cellData, j) => <td key={j+1} className="p-1 leading-snug border-l border-orange-500 first:border-l-0 last:border-r-0">{cellData}</td>)}
          </tr>
        })}
      </tbody>
    </table>
    {adnotations && <p className="pt-2">{adnotations}</p>}
    </div>
  );
};

const ProductProperty = ({list, listName}) => {
  return (
    <>
      <p className="pt-8 uppercase font-semibold border-b border-orange-500">{listName}:</p>
      <ul>
        {list.map((item, i) => <li key={i+1} className="py-1 first:pt-6">{item}</li>)}
      </ul>
    </>
  );
};

export default ProductDetails;