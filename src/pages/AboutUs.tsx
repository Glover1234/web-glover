import React from 'react';
import Hero from '../components/about/Hero';
import Stats from '../components/about/Stats';
import QualityBanner from '../components/about/QualityBanner';
import Mission from '../components/about/Mission';
import ProductionAreas from '../components/about/ProductionAreas';
import CompetitiveAdvantages from '../components/about/CompetitiveAdvantages';
import ContactCTA from '../components/home/ContactCTA';
import AnimatedSlogan from '../components/home/AnimatedSlogan';
import LaborTopicsCards from '../components/about/LaborTopicsCards';

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="py-20">
        <div className="container">
          <Stats />
          <QualityBanner />
          <Mission />
          <AnimatedSlogan />
          <div className="pt-12">
            <LaborTopicsCards />
          </div>
          <ProductionAreas />
          <CompetitiveAdvantages />
          <ContactCTA />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;