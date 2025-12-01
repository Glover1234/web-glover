import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  image: string;
  price: {
    current: number;
    original?: number;
  };
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, price, discount }) => {
  const formatPrice = (amount: number) => 
    new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-square overflow-hidden mb-4">
        {discount && (
          <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-medium px-2 py-1">
            -{discount}%
          </div>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-sm font-medium text-neutral-900 mb-2">{name}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-medium text-neutral-900">
          {formatPrice(price.current)}
        </span>
        {price.original && (
          <span className="text-sm text-neutral-500 line-through">
            {formatPrice(price.original)}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;