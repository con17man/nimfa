import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <div className="container p-32 text-center">
      <h1>Services page</h1>
      <hr/>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default ServicesPage;
