import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <button className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
          Leer más
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;