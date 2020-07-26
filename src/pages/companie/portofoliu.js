import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portofoliu" />
    <div className="container mx-auto p-32 text-center">
      <h1>Portofoliu</h1>
      <hr/>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default PortfolioPage;
