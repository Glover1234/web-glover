import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  { name: 'FSC', description: '[Descripción de la certificación]' },
  { name: 'PEFC', description: '[Descripción de la certificación]' },
  { name: 'LEED', description: '[Descripción de la certificación]' },
];

const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Certificaciones y Colaboraciones
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <Award className="w-16 h-16 text-primary-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
              <p className="text-neutral-400">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;