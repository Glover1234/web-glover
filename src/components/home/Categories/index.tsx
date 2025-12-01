import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGoogleAnalytics } from '../../../hooks/useGoogleAnalytics';

const categories = [
  {
    id: 'beds',
    title: 'Camas',
    image: 'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg',
    link: '/business-lines#beds',
  },
  {
    id: 'mattresses',
    title: 'Colchones',
    image: 'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg',
    link: '/business-lines#mattresses',
  },
  {
    id: 'furniture',
    title: 'Funcionales',
    image: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg',
    link: '/business-lines#furniture',
  },
  {
    id: 'complements',
    title: 'Camas con muebles',
    image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg',
    link: '/business-lines#complements',
  },
];

const Categories: React.FC = () => {
  const { trackEvent } = useGoogleAnalytics();

  const handleCategoryClick = (categoryTitle: string) => {
    trackEvent('category_click', {
      event_category: 'navigation',
      event_label: categoryTitle,
    });
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={category.link} className="group block" onClick={() => handleCategoryClick(category.title)}>
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-center text-lg font-medium text-neutral-900">
                  {category.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;