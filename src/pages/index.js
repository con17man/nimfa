import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';
import heroImg from '../assets/images/oil-pipe.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* HERO COMPONENT */}
    <div className="w-full bg-white">
      <div className="relative container mx-auto">

        <div className="relative pb-5/12">
          <img className="absolute object-cover w-full h-full" src={heroImg} alt="Contact" />
        </div>

        <div className="flex flex-col absolute content-center h-full justify-center px-16 py-8 text-white top-0 w-full">
          <h1 className="font-montserrat-alternates font-bold text-5xl">Let the enery flow!</h1>
          <p className="uppercase hover:underline">
            <Link to="/contact">Contact us &rsaquo;</Link>
          </p>
        </div>

      </div>
    </div>
    {/* !HERO COMPONENT */}

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
