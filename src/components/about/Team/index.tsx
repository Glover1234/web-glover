import React from 'react';
import TeamMember from './TeamMember';

const teamMembers = [
  {
    name: '[NOMBRE DEL EJECUTIVO]',
    role: 'CEO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    linkedin: '#',
  },
  {
    name: '[NOMBRE DEL EJECUTIVO]',
    role: 'DIRECTOR DE OPERACIONES',
    image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg',
    linkedin: '#',
  },
  {
    name: '[NOMBRE DEL EJECUTIVO]',
    role: 'DIRECTOR DE INNOVACIÓN',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
    linkedin: '#',
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold uppercase mb-2">
            EQUIPO Y FILOSOFÍA
          </h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-4">
            [Descripción del equipo y filosofía empresarial]
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;