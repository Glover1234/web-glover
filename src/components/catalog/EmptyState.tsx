import React from 'react';
import { useTranslation } from 'react-i18next';
import { PackageOpen } from 'lucide-react';

const EmptyState: React.FC = () => {
  const { t } = useTranslation('catalog');

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-neutral-100 rounded-full p-6 mb-4">
        <PackageOpen className="w-16 h-16 text-neutral-400" />
      </div>
      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
        {t('empty.title')}
      </h3>
      <p className="text-neutral-600 text-center max-w-md">
        {t('empty.message')}
      </p>
    </div>
  );
};

export default EmptyState;
