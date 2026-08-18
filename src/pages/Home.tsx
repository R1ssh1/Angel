import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Products from '../components/Products';
import Industries from '../components/Industries';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import Certifications from '../components/Certifications';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Products />
      <Industries />
      <WhyChooseUs />
      <Stats />
      <Certifications />
    </>
  );
};

export default Home;
