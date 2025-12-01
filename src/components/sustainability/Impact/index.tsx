import React from 'react';
import StatCard from './StatCard';
import { TreePine, Sun, Recycle } from 'lucide-react';

const stats = [
  {
    icon: TreePine,
    value: 'XX',
    label: 'TONELADAS DE CO₂ REDUCIDAS',
  },
  {
    icon: Sun,
    value: 'XX%',
    label: 'ENERGÍA RENOVABLE UTILIZADA',
  },
  {
    icon: Recycle,
    value: 'XX',
    label: 'TONELADAS DE RESIDUOS RECICLADOS',
  },
];

const Impact: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold uppercase mb-2">
            IMPACTO Y RESULTADOS
          </h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;