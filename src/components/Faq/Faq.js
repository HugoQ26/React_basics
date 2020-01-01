import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const { title, content, imgSrc } = settings.faqComponent;

const Faq = () => {
  return (
    <Container>
      <Hero titleText={title} image={imgSrc} />
      <p>{content}</p>
    </Container>
  );
};

export default Faq;
