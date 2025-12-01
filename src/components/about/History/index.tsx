import React from 'react';
import { motion } from 'framer-motion';
import { History as HistoryIcon } from 'lucide-react';

const milestones = [
  { year: '1995', title: 'FUNDACIÓN' },
  { year: '2005', title: 'EXPANSIÓN INTERNACIONAL' },
  { year: '2015', title: 'CERTIFICACIÓN ISO' },
  { year: '2023', title: 'INNOVACIÓN SOSTENIBLE' },
];

const History: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold uppercase mb-2">
            HISTORIA Y TRAYECTORIA
          </h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {milestone.year}
              </div>
              <h3 className="text-xl font-bold uppercase mb-2">
                {milestone.title}
              </h3>
              <div className="w-12 h-0.5 bg-red-600"></div>
              <p className="mt-4 text-neutral-600">
                [Descripción del hito histórico]
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;