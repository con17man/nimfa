import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

import heroImg from '../assets/images/services_heroImg.jpg';

const ServicesPage = () => (
  <Layout>
    <SEO title="Servicii" />
    {/* HERO - START*/}
    <PageHero heroInfo={{heroImg, title: 'hello', description: 'Description'}} />
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
