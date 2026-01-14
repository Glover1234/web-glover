import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Import process images
import processImg1 from '../../../assets/sustainability/sostenibilidad.jpeg';
import processImg2 from '../../../assets/processes/photos/cnc1.JPG';
import processImg3 from '../../../assets/processes/photos/pintura.JPG';

interface Project {
  title: string;
  shortTitle: string;
  description: string;
}

const Projects: React.FC = () => {
  const { t } = useTranslation('sustainability');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const projects = t('projects.items', { returnObjects: true }) as Project[];
  
  // Map images to each project
  const projectImages = [processImg1, processImg2, processImg3];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-2 text-neutral-900">
            {t('projects.title')}
          </h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tab Selector - File Style */}
          <div className="flex border-b border-gray-300">
            {projects.map((proj, i) => (
              <button
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 border-b-2 ${
                  selectedIndex === i
                    ? 'border-neutral-800 text-neutral-800 bg-white'
                    : 'border-transparent text-neutral-500 hover:text-neutral-700 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {proj.shortTitle}
              </button>
            ))}
          </div>

          {/* Content Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-neutral-800">
                {projects[selectedIndex].title}
              </h3>
              
              {/* Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src={projectImages[selectedIndex]}
                  alt={projects[selectedIndex].title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              <p className="text-neutral-700 leading-relaxed">
                {projects[selectedIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
