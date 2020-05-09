import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/layout';
import heroImg from '../assets/images/oil-pipe.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="w-full bg-white">
      <div className="relative container mx-auto">

        <div className="relative pb-5/12">
          <img className="absolute object-cover w-full h-full" src={heroImg} alt="Contact" />
        </div>

        <div className="absolute top-0 text-white">
          <h1>Let the enery flow!</h1>
          <p>Contact us</p>
        </div>

      </div>
    </div>

    <div className="w-full bg-grey h-64 p-4">
      <h1>Hello world!</h1>
    </div>

  </Layout>
);

export default IndexPage;
