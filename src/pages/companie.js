import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/SEO';

const CompanyPage = () => (
  <Layout>
    <SEO title="Companie" />
    <div className="container mx-auto p-32 text-center">
      <h1>Companie</h1>
      <hr/>
      <button className="block">
        <Link to="/">Go back to the homepage</Link>
      </button>
      <button className="block">
        <Link to="/companie/despre-noi">Go to "Despre Noi"</Link>
      </button>
      <button className="block">
        <Link to="/companie/date-cifre">Go to "Date si cifre"</Link>
      </button>
    </div>
  </Layout>
)

export default CompanyPage;
