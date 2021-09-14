import React from 'react';

import { Section, Container } from '@components/global';

const Contact = () => (
  <Section id="contact">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Submit Enquiry</h1>
      <div>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      </div>
    </Container>
  </Section>
);

export default Contact;



