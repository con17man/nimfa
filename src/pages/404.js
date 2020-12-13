import React from 'react';
import { Link } from 'gatsby';

import Footer from '../components/Footer';
import Header from '../components/Header';
import SEO from '../components/SEO';

const NotFoundPage = () => {

  return (
    <>
      <SEO title="404: Pagina nu există" />

      <Header siteTitle="Nimfa" />
      <div className="flex flex-col justify-center items-center md:h-screen bg-raisin text-center lg:-mt-28">
        <div className="flex-grow container mx-auto w-full p-6 text-white">
          <p className="text-6xl font-montserrat-alternates font-bold tracking-wide pt-24 md:pt-32 lg:pt-56">404</p>
          <p className="tracking-wide text-lg pb-12">Oops! Pagina pe care o căutați nu există.</p>
          <Link to="/" className="inline-block py-4 px-16 mb-10 lg:mb-20 bg-orange-500 text-white uppercase font-medium">Înapoi Acasă</Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NotFoundPage;
