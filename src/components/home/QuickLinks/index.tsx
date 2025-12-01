import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useGoogleAnalytics } from '../../../hooks/useGoogleAnalytics';

const links = [
  {
    title: 'NOSOTROS',
    description: 'Conoce nuestra historia y valores',
    path: '/about-us',
  },
  {
    title: 'LÍNEAS DE NEGOCIO',
    description: 'Explora nuestros productos y servicios',
    path: '/business-lines',
  },
  {
    title: 'SUSTENTABILIDAD',
    description: 'Nuestro compromiso con el medio ambiente',
    path: '/certifications-sustainability',
  },
  {
    title: 'CONTACTO',
    description: 'Ponte en contacto con nosotros',
    path: '/contact',
  },
];

const QuickLinks: React.FC = () => {
  const { trackEvent } = useGoogleAnalytics();

  const handleQuickLinkClick = (linkTitle: string, linkPath: string) => {
    trackEvent('quick_link_click', {
      event_category: 'navigation',
      event_label: linkTitle,
      page_path: linkPath,
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold uppercase mb-2">
            ENLACES RÁPIDOS
          </h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => handleQuickLinkClick(link.title, link.path)}
              className="group p-6 border border-neutral-200 rounded-lg hover:border-neutral-900 transition-colors"
            >
              <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-neutral-900">
                {link.title}
              </h3>
              <div className="w-12 h-0.5 bg-red-600 mb-4"></div>
              <p className="text-neutral-600 mb-4">{link.description}</p>
              <ArrowRight className="w-5 h-5 text-neutral-900 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;