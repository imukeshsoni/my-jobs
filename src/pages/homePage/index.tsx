import React from 'react';
import Header from '../../components/Header';
import BaseLayout from '../../components/BaseLayout/index';
import Companies from '../../components/Companies';
import './styles.css';
import WhyUs from '../../components/WhyUs';
import GenericComponent from '../../components/Generic';
import HeroSection from '../../components/HeroSection';

const HomePage = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <BaseLayout>
        <HeroSection />
        <WhyUs />
        <Companies />
      </BaseLayout>
    </React.Fragment>
  );
};

export default HomePage;
