import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/layout';
import HeroCarousel from '../components/HeroCarousel';
import AdvantagesCarousel from '../components/AdvantagesCarousel';
import QuickLinks from '../components/QuickLinks';
import OrderSteps from '../components/OrderSteps';
import SimpleCTA from '../components/SimpleCTA';

const IndexPage = () => (
  <Layout>
    <Seo title="Acasă" />

    <HeroCarousel />
    <AdvantagesCarousel />
    <QuickLinks />
    <OrderSteps />
    <SimpleCTA title="We look forward to work with you!" cta={{label: 'Contact', link: '/contact/'}} />

  </Layout>
);

export default IndexPage;
