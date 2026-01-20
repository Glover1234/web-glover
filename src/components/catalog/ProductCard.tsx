import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Product } from '../../types/catalog';
import { linesInfo } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation('catalog');
  const lineInfo = linesInfo[product.line];

  return (
    <Link to={`/catalog/${product.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="bg-white rounded-lg shadow-sm overflow-hidden group cursor-pointer h-full flex flex-col"
      >
        {/* Imagen */}
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
          <img
            src={product.images.main}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {/* Badge de línea */}
          <div className="absolute top-3 right-3">
            <span className={`${lineInfo.color} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg`}>
              {t(`lines.${product.line}`)}
            </span>
          </div>
          {/* Overlay en hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        </div>

        {/* Contenido */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-red-600 transition-colors">
            {t(`products.${product.id}.name`)}
          </h3>
          <p className="text-sm text-neutral-600 line-clamp-2 flex-1">
            {t(`products.${product.id}.descriptionShort`, { defaultValue: t(`products.${product.id}.description`) })}
          </p>
          <div className="mt-4 pt-4 border-t border-neutral-100">
            <span className="text-sm font-medium text-red-600 group-hover:text-red-700 flex items-center gap-1">
              {t('viewDetails')}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
