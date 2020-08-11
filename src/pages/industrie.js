import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/SEO';

const IndustriesPage = () => (
  <Layout>
    <SEO title="Industrie" />
    <div className="container mx-auto p-32 text-center">
      <h1>Industrie</h1>
      <hr/>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default IndustriesPage;
