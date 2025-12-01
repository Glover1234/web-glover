import React from 'react';
import Banner from '../components/home/Banner';
import CorporatePresentation from '../components/home/CorporatePresentation';
import Mission from '../components/about/Mission';
import AnimatedSlogan from '../components/home/AnimatedSlogan';
import BusinessLines from '../components/home/BusinessLines';
import Certifications from '../components/home/Certifications';
import UVPaintBanner from '../components/home/UVPaintBanner';
import ContactCTA from '../components/home/ContactCTA';

const HomePage: React.FC = () => {
  return (
    <div>
      <Banner />
      <BusinessLines />
      <AnimatedSlogan />
      <CorporatePresentation />
      <Mission />
      <Certifications />
      <UVPaintBanner />
      <ContactCTA />
    </div>
  );
};

export default HomePage;