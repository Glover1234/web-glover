import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProductById } from '../data/products';
import { linesInfo } from '../data/products';
import { trackProductDetailView } from '../utils/analytics';
import ProductGallery from '../components/catalog/ProductGallery';
import bannerImage from '../assets/sustainability/sostenibilidad.jpeg';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { t } = useTranslation(['catalog', 'common']);
  const navigate = useNavigate();
  const product = productId ? getProductById(productId) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track product view
    if (product) {
      trackProductDetailView(product.id, product.line);
    }
  }, [productId, product]);

  if (!product) {
    return (
      <div className="container pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 mb-4">
          {t('catalog:productNotFound.title')}
        </h1>
        <p className="text-neutral-600 mb-8">
          {t('catalog:productNotFound.message')}
        </p>
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          {t('catalog:backToCatalog')}
        </Link>
      </div>
    );
  }

  const lineInfo = linesInfo[product.line];

  const handleBackClick = () => {
    navigate('/catalog', { state: { fromDetail: true } });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container pt-24 md:pt-28 pb-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-neutral-600 mb-8">
          <Link to="/" className="hover:text-neutral-900 transition-colors">
            {t('common:nav.home')}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <button
            onClick={handleBackClick}
            className="hover:text-neutral-900 transition-colors"
          >
            {t('catalog:title')}
          </button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-neutral-900 font-medium">{t(`catalog:products.${product.id}.name`)}</span>
        </nav>

        {/* Botón volver */}
        <button
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors mb-6 group"
        >
          <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">{t('catalog:backToCatalog')}</span>
        </button>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Galería */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <ProductGallery 
              images={product.images} 
              productName={t(`catalog:products.${product.id}.name`)} 
            />
          </motion.div>

          {/* Información del producto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 w-full"
          >
            {/* Badge de línea */}
            <div>
              <span className={`${lineInfo.color} text-white text-sm font-semibold px-4 py-2 rounded-full inline-block`}>
                {t(`catalog:lines.${product.line}`)}
              </span>
            </div>

            {/* Nombre */}
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
              {t(`catalog:products.${product.id}.name`)}
            </h1>

            {/* Descripción resumen */}
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-lg text-neutral-700 font-medium leading-relaxed">
                {t(`catalog:products.${product.id}.descriptionShort`, { defaultValue: t(`catalog:products.${product.id}.description`) })}
              </p>
            </div>

            {/* Descripción extendida */}
            {t(`catalog:products.${product.id}.descriptionExtended`, { defaultValue: '' }) && (
              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">{t('catalog:description')}</h2>
                <p className="text-neutral-700 leading-relaxed">
                  {t(`catalog:products.${product.id}.descriptionExtended`)}
                </p>
              </div>
            )}

            {/* Especificaciones */}
            {((product.specifications && Object.keys(product.specifications).length > 0) || 
              t(`catalog:products.${product.id}.specs`, { returnObjects: true, defaultValue: null })) && (
              <div className="border-t border-neutral-200 pt-6">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                  {t('catalog:specifications')}
                </h2>
                <dl className="space-y-3">
                  {product.specifications && Object.keys(product.specifications).length > 0 ? (
                    Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-neutral-100">
                        <dt className="font-medium text-neutral-700">{key}</dt>
                        <dd className="text-neutral-900">{value}</dd>
                      </div>
                    ))
                  ) : (
                    t(`catalog:products.${product.id}.specs`, { returnObjects: true }) &&
                    Object.entries(t(`catalog:products.${product.id}.specs`, { returnObjects: true }) as Record<string, string>).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-neutral-100">
                        <dt className="font-medium text-neutral-700">{key}</dt>
                        <dd className="text-neutral-900">{value}</dd>
                      </div>
                    ))
                  )}
                </dl>
              </div>
            )}

            {/* CTA */}
            <div className="pt-6 space-y-4">
              <Link
                to="/contact"
                className="block w-full bg-red-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                {t('catalog:contactUs')}
              </Link>
              <Link
                to={`/business-lines/${product.line}`}
                className="block w-full border-2 border-neutral-300 text-neutral-900 text-center py-4 rounded-lg font-semibold hover:border-neutral-400 hover:bg-neutral-50 transition-colors"
              >
                {t('catalog:viewMoreInLine')}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Banner informativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <div className="relative h-[180px] md:h-[240px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={bannerImage}
              alt={t('catalog:bannerAlt')}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10 flex items-center">
              <div className="container px-6">
                <div className="max-w-2xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                    {t('catalog:bannerTitle')}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 mb-3">
                    {t('catalog:bannerDescription')}
                  </p>
                  <Link
                    to="/sustainability"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-white/70 text-white rounded-md font-medium hover:bg-white/10 transition-colors"
                  >
                    {t('catalog:bannerCTA')}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
