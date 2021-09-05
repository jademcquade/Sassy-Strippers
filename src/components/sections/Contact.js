import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'How do I book a stripper?',
    content: () => (
      <>
        Please use the contact form on our site to submit an enquiry. Make sure you include your preferred girl of choice on the form. We will respond to you as soon as possible.
      </>
    ),
  },
  {
    title: 'Where will my stripper perform?',
    content: () => (
      <>
        Gatsby’s rich data plugin ecosystem lets you build sites with the data
        you want — from one or many sources: Pull data from headless CMSs, SaaS
        services, APIs, databases, your file system, and more directly into your
        pages using GraphQL.
      </>
    ),
  },
  {
    title: 'What if I can\'t get my dancer of choice?',
    content: () => (
      <>
        Gatsby.js is Internet Scale. Forget complicated deploys with databases
        and servers and their expensive, time-consuming setup costs,
        maintenance, and scaling fears. Gatsby.js builds your site as “static”
        files which can be deployed easily on dozens of services.
      </>
    ),
  },
  {
    title: 'What\'s expected of me?',
    content: () => (
      <>
        Do not build a website with last decade’s tech. The future of the web is
        mobile, JavaScript and APIs—the{` `}
        <ExternalLink href="https://jamstack.org/">JAMstack</ExternalLink>.
        Every website is a web app and every web app is a website. Gatsby.js is
        the universal JavaScript framework you’ve been waiting for.
      </>
    ),
  },
  {
    title: 'What exactly does Gatsby build?',
    content: () => (
      <>
        Gatsby.js is a static PWA (Progressive Web App) generator. You get code
        and data splitting out-of-the-box. Gatsby loads only the critical HTML,
        CSS, data, and JavaScript so your site loads as fast as possible. Once
        loaded, Gatsby prefetches resources for other pages so clicking around
        the site feels incredibly fast.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Submit Enquiry</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
