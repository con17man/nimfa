import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/SEO';

import heroImg from '../assets/images/services_heroImg.jpg';

const ServicesPage = () => (
  <Layout>
    <SEO title="Servicii" />
    {/* HERO - START*/}
    <div className="relative mx-auto -mt-28">
      <div className="relative">
        <div className="relative pb-3/6 lg:pb-2/5 xl:pb-3/12">
          <img className="absolute object-cover w-full h-full" src={heroImg} alt="Nimfa" />
        </div>

        <div className="flex flex-col absolute transform content-end h-full justify-end px-16 py-8 text-white top-0 w-full">
          <div className="relative">
            <div className="container mx-auto">
              <h1 className="font-montserrat-alternates font-semibold text-5xl tracking-wider">Servicii</h1>
              <p className="text-sm pb-4">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    {/* HERO - END */}

    {/* DEMO - STICKY SCROLL */}
    <div className="flex container relative mx-auto py-16 text-center h-screen">
      <div className="w-1/2">
        <div className="h-64 grid grid-cols-3 gap-2 text-white">
          <div className="h-48 p-4 bg-blue hover:bg-orange">1</div>
          <div className="h-48 p-4 bg-blue hover:bg-orange">1</div>
          <div className="h-48 p-4 bg-blue hover:bg-orange">1</div>
          <div className="h-48 p-4 bg-blue hover:bg-orange">1</div>
          <div className="h-48 p-4 bg-blue hover:bg-orange">1</div>
          <div className="h-48 p-4 bg-blue hover:bg-orange">1</div>
          <div className="h-48 p-4 bg-blue hover:bg-orange">1</div>
          <div className="h-48 p-4 bg-blue hover:bg-orange">1</div>
          <div className="h-48 p-4 bg-blue hover:bg-orange">1</div>
          <div className="h-48 p-4 bg-blue hover:bg-orange">1</div>
          <div className="h-48 p-4 bg-blue hover:bg-orange">1</div>
        </div>
      </div>

      <div className="w-1/2 relative" id="cos">
        <div className="sticky top-28 p-4">
         <h3>Header</h3>
         <p>Lorem ipsum</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default ServicesPage;
