import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/layout';
import HeroCarousel from '../components/heroCarousel';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HeroCarousel />

    {/* ADVANTAGES COMPONENT */}
    <div className="w-full bg-grey h-64 p-4 flex content-center items-center justify-center">
      <h1>ADVANTAGES COMPONENT</h1>
    </div>
    {/* !ADVANTAGES COMPONENT */}

    {/* GOTO COMPONENT */}
    <div className="w-full h-64 p-4 flex content-center items-center justify-center">
      <h1>GOTO COMPONENT</h1>
    </div>
    {/* !GOTO COMPONENT */}

    {/* ORDER STEPS COMP */}
    <div className="w-full bg-grey h-64 p-4 flex content-center items-center justify-center">
      <h1>ORDER STEPS COMPONENT</h1>
    </div>
    {/* !ORDER STEPS COMP */}

    {/* CTA COMPONENT */}
    <div className="w-full h-64 p-4 flex content-center items-center justify-center">
      <h1>CTA COMPONENT</h1>
    </div>
    {/* !CTA COMPONENT */}

  </Layout>
);

export default IndexPage;
