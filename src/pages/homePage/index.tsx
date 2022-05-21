import React from 'react';
import Header from '../../components/Header';
import BaseLayout from '../../components/BaseLayout';
import Companies from '../../components/Companies';
import './styles.css';
import WhyUs from '../../components/WhyUs';

const HomePage = (): JSX.Element => {
  return (
    <BaseLayout>
      <Header />
      <WhyUs />
      <Companies />
    </BaseLayout>
  );
}

export default HomePage;
