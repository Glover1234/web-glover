import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Product } from '../types/catalog';
import { products } from '../data/products';

export const useCatalogFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedLines, setSelectedLines] = useState<string[]>([]);

  // Inicializar filtros desde URL
  useEffect(() => {
    const linesParam = searchParams.get('lines');
    if (linesParam) {
      setSelectedLines(linesParam.split(','));
    }
  }, []);

  // Actualizar URL cuando cambian los filtros
  useEffect(() => {
    if (selectedLines.length > 0) {
      searchParams.set('lines', selectedLines.join(','));
    } else {
      searchParams.delete('lines');
    }
    setSearchParams(searchParams, { replace: true });
  }, [selectedLines]);

  // Filtrar productos
  const filteredProducts = useMemo<Product[]>(() => {
    if (selectedLines.length === 0) {
      return products;
    }
    return products.filter(product => selectedLines.includes(product.line));
  }, [selectedLines]);

  return {
    selectedLines,
    setSelectedLines,
    filteredProducts,
    totalProducts: products.length,
    filteredCount: filteredProducts.length,
  };
};
