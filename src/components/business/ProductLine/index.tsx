import React from 'react';
import ProductCard from './ProductCard';
import Gallery from './Gallery';

interface ProductLineProps {
  id: string;
  title: string;
  description: string;
  products: Array<{
    name: string;
    description: string;
    image: string;
    features: string[];
  }>;
  gallery: Array<{
    url: string;
    alt: string;
  }>;
}

const ProductLine: React.FC<ProductLineProps> = ({
  id,
  title,
  description,
  products,
  gallery,
}) => {
  return (
    <section id={id} className="py-20 scroll-mt-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-neutral-600 max-w-3xl mb-12">{description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <Gallery images={gallery} />
      </div>
    </section>
  );
};

export default ProductLine;