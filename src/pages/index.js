import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/layout';
import HeroCarousel from '../components/heroCarousel';
import AdvantagesCarousel from '../components/advantagesCarousel';
import QuickLinks from '../components/quickLinks';
import OrderSteps from '../components/orderSteps';
import SimpleCTA from '../components/simpleCTA';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HeroCarousel />
    <AdvantagesCarousel />
    <QuickLinks />
    <OrderSteps />
    <SimpleCTA title="We look forward to work with you!" cta={{label: 'Contact', link: '/contact'}} />

  </Layout>
);

export default IndexPage;
