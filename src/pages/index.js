import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/layout';
import HeroCarousel from '../components/heroCarousel';
import AdvantagesCarousel from '../components/advantagesCarousel';
import QuickLinks from '../components/quickLinks';
import OrderSteps from '../components/orderSteps';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HeroCarousel />
    <AdvantagesCarousel />
    <QuickLinks />
    <OrderSteps />

    {/* CTA COMPONENT */}
    <div className="w-full bg-grey h-64 p-4 flex content-center items-center justify-center">
      <h1>CTA COMPONENT</h1>
    </div>
    {/* !CTA COMPONENT */}

  </Layout>
);

export default IndexPage;
