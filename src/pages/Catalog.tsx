import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useCatalogFilters } from '../hooks/useCatalogFilters';
import { useScrollRestoration } from '../hooks/useScrollRestoration';
import { trackCatalogView, trackCatalogFilter } from '../utils/analytics';
import CatalogFilters from '../components/catalog/CatalogFilters';
import ProductGrid from '../components/catalog/ProductGrid';
import EmptyState from '../components/catalog/EmptyState';
import catalogHeroImage from '../assets/home_banner/respaldos.svg'; // Imagen del hero de Respaldos (homepage)

const Catalog: React.FC = () => {
  const { t } = useTranslation('catalog');
  const { selectedLines, setSelectedLines, filteredProducts, filteredCount } = useCatalogFilters();
  useScrollRestoration('catalog');

  // Track catalog view
  useEffect(() => {
    trackCatalogView();
  }, []);

  // Track filter changes
  useEffect(() => {
    if (selectedLines.length > 0) {
      trackCatalogFilter(selectedLines);
    }
  }, [selectedLines]);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <img
            src={catalogHeroImage}
            alt="Catálogo Glover"
            className="w-full h-full object-cover"
          />
          {/* Overlay sutil como en homepage */}
          <div className="absolute inset-0 bg-black/25" />
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="container">
            <div className="text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider whitespace-nowrap"
              >
                {t('title')}
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '150px' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-red-600 mt-4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-8">
          {/* Sidebar con filtros */}
          <aside className="mb-8 lg:mb-0">
            <CatalogFilters
              selectedLines={selectedLines}
              onFilterChange={setSelectedLines}
            />
          </aside>

          {/* Grid de productos */}
          <main>
            {/* Contador de resultados */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-neutral-600">
                {filteredCount === 0 ? (
                  t('results.none')
                ) : (
                  <>
                    <span className="font-semibold text-neutral-900">{filteredCount}</span>{' '}
                    {filteredCount === 1 ? t('results.singular') : t('results.plural')}
                  </>
                )}
              </p>
            </div>

            {/* Productos o estado vacío */}
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <EmptyState />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
