import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const CompanyPage = () => (
  <Layout>
    <SEO title="Company" />
    <div className="container mx-auto p-32 text-center">
      <h1>Company page</h1>
      <hr/>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default CompanyPage;
