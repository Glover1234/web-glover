import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'PROYECTO A',
    description: '[Breve descripción del proyecto]',
    image: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg',
  },
  {
    title: 'PROYECTO B',
    description: '[Breve descripción del proyecto]',
    image: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg',
  },
  {
    title: 'PROYECTO C',
    description: '[Breve descripción del proyecto]',
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold uppercase mb-2">
            PROYECTOS E INICIATIVAS
          </h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;