import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, image, features }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-neutral-700">
              <ArrowRight className="w-4 h-4 text-primary mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <button className="btn btn-primary w-full">Ver detalles</button>
      </div>
    </motion.div>
  );
};

export default ProductCard;