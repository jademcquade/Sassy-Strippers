import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import { Section, Container } from '@components/global';

const SecondPage = () => (
  <Layout>
    <Section id="success" accent="secondary">
    <Container>
      <h1>Your message has been sent.</h1>
      <p>We will respond to you as soon as possible.</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
    </Section>
  </Layout>
);

export default SecondPage;
