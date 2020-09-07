import React from 'react';
import Img from 'gatsby-image';

const ProductDetails = ({product, reversed}) => {

  const {title, table, materials, dimensions, pressureRange, imgs: [productImg, abstractImg], description } = product;

  return (
    <section className={`container relative mx-auto flex ${reversed ? 'flex-row-reverse' : ''} pt-24 pb-12 px-8 md:px-16 lg:px-0 -mb-12 bg-white`}>
      {/* image */}
      <div className={`flex-none ${reversed ? 'pl-10' : 'pr-10'}`}>
        {abstractImg && <Img fluid={abstractImg.childImageSharp.fluid} style={{width: '300px', marginBottom: '1rem'}} />}
        <Img fluid={productImg.childImageSharp.fluid} style={{width: '300px'}} />
      </div>

      {/* content */}
      <div className="flex-1 pl-10 font-light text-sm tracking-wide cursor-default">
        <div className="w-full bg-orange text-white uppercase font-semibold px-4 py-1">{title}</div>

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
      </div>
    </section>
  );
};

const ProductTable = ({tableData}) => {
  const {columns, rows, columnWidths, adnotations } = tableData;

  return (
    <>
    <table className="table w-full my-6">
      <thead>
        <tr>
          {columns.map((column, i) => <th key={i+1} className={`${columnWidths[i]} uppercase p-1 border border-orange border-t-0 first:border-l-0 last:border-r-0`}>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          return <tr key={i+1}>
            {row.map((cellData, j) => <td key={j+1} className="p-1 leading-snug border-l border-orange first:border-l-0 last:border-r-0">{cellData}</td>)}
          </tr>
        })}
      </tbody>
    </table>
    {adnotations && <p className="pt-2">{adnotations}</p>}
    </>
  );
};

const ProductProperty = ({list, listName}) => {
  return (
    <>
      <p className="pt-8 uppercase font-semibold border-b border-orange">{listName}:</p>
      <ul>
        {list.map((item, i) => <li key={i+1} className="py-1 first:pt-6">{item}</li>)}
      </ul>
    </>
  );
};

export default ProductDetails;