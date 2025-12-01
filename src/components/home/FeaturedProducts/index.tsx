import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Cama Europea Autonomy Bay 2 Plazas 150 x 200 cm',
    image: 'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg',
    price: {
      current: 429990,
      original: 599990,
    },
    discount: 34,
  },
  {
    id: 2,
    name: 'Sofá Flaminio Cuero',
    image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg',
    price: {
      current: 1099990,
      original: 1299990,
    },
    discount: 25,
  },
  {
    id: 3,
    name: 'Cama Europea Pearl King 180 x 200 cm',
    image: 'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg',
    price: {
      current: 1599990,
    },
  },
  {
    id: 4,
    name: 'Sofá Atherton Tela',
    image: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg',
    price: {
      current: 979990,
      original: 1119990,
    },
    discount: 20,
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container">
        <h2 className="text-2xl font-medium text-center mb-12">
          Productos destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;