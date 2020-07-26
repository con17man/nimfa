import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';

const AboutPage = () => (
  <Layout>
    <SEO title="Despre Nimfa" />
    <div className="container mx-auto p-32 text-center">
      <h1>Despre</h1>
      <hr/>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default AboutPage;
