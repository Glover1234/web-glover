import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/about/Hero';
import Stats from '../components/about/Stats';
import QualityBanner from '../components/about/QualityBanner';
import Mission from '../components/about/Mission';
import ProductionAreas from '../components/about/ProductionAreas';
import CompetitiveAdvantages from '../components/about/CompetitiveAdvantages';
import ContactCTA from '../components/home/ContactCTA';
import LaborTopicsCards from '../components/about/LaborTopicsCards';
import aboutImage1 from '../assets/us/nosotros_banner.jpeg';
import aboutImage2 from '../assets/us/qualitybanner.jpeg';

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="py-20">
        <div className="container">
          {/* Grid layout: Image (left) and Mission/DNA (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={aboutImage1}
                alt="Industrial Glover"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <Mission />
            </div>
          </div>
          
          <QualityBanner />
          
          {/* Stats section with image on the right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 my-20">
            <div>
              <Stats />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={aboutImage2}
                alt="Calidad Glover"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
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