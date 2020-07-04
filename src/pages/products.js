import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/SEO';

const ProductsPage = () => (
  <Layout>
    <SEO title="Produse" />
    <div className="relative container mx-auto -mt-28 -mb-8 pt-48 p-16 bg-grey">
      <h1 className="font-montserrat-alternates font-semibold text-5xl pb-4 tracking-wider">Produse</h1>

      <p className="w-3/5 text-sm pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <div className="grid grid-rows-2 grid-flow-col gap-2 text-center">
        <div className="row-start-1 border-2 col-span-2 border-red-500">1 Tevi</div>
        <div className="row-start-2 border-2 col-span-2 border-red-500">2 Flanse</div>
        <div className="col-span-2 border-2 border-red-500">3 Fitting-uri</div>
        <div className="border-2 border-red-500">4 Tabla si profile</div>
        <div className="border-2 border-red-500">5 Accesorii</div>
        <div className="row-span-2 border-2 border-red-500">6 Armaturi si robineti</div>
      </div>
    </div>
  </Layout>
)

export default ProductsPage;
