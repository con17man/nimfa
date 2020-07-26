import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';

const StatisticsPage = () => (
  <Layout>
    <SEO title="Date si cifre" />
    <div className="container mx-auto p-32 text-center">
      <h1>Date si cifre</h1>
      <hr/>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default StatisticsPage;
