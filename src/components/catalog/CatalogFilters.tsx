import React from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { ProductLine } from '../../types/catalog';
import { linesInfo } from '../../data/products';

interface CatalogFiltersProps {
  selectedLines: string[];
  onFilterChange: (lines: string[]) => void;
}

const CatalogFilters: React.FC<CatalogFiltersProps> = ({ selectedLines, onFilterChange }) => {
  const { t } = useTranslation('catalog');

  const lines: ProductLine[] = ['doors', 'furniture', 'wood', 'structures', 'complements'];

  const handleLineToggle = (line: string) => {
    if (selectedLines.includes(line)) {
      onFilterChange(selectedLines.filter(l => l !== line));
    } else {
      onFilterChange([...selectedLines, line]);
    }
  };

  const handleClearFilters = () => {
    onFilterChange([]);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-neutral-900">
          {t('filters.title')}
        </h3>
        {selectedLines.length > 0 && (
          <button
            onClick={handleClearFilters}
            className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            {t('filters.clear')}
          </button>
        )}
      </div>

      {selectedLines.length > 0 && (
        <div className="mb-4 pb-4 border-b border-neutral-200">
          <p className="text-sm text-neutral-600">
            {selectedLines.length} {t('filters.active')}
          </p>
        </div>
      )}

      <div className="space-y-3">
        {lines.map((line) => (
          <label
            key={line}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={selectedLines.includes(line)}
              onChange={() => handleLineToggle(line)}
              className="w-5 h-5 rounded border-neutral-300 text-red-600 focus:ring-red-500"
            />
            <span className="flex-1 text-neutral-700 group-hover:text-neutral-900">
              {t(`lines.${line}`)}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CatalogFilters;
