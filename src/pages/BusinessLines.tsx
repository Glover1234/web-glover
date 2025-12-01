import React from 'react';
import ProductLine from '../components/business/ProductLine';

const businessLines = [
  {
    id: 'doors',
    title: 'Puertas',
    description: '[Descripción detallada de la línea de puertas]',
    products: [
      {
        name: 'Modelo Classic',
        description: '[Descripción del modelo]',
        image: 'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg',
        features: ['[Característica 1]', '[Característica 2]', '[Característica 3]'],
      },
      {
        name: 'Modelo Premium',
        description: '[Descripción del modelo]',
        image: 'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg',
        features: ['[Característica 1]', '[Característica 2]', '[Característica 3]'],
      },
      {
        name: 'Modelo Elite',
        description: '[Descripción del modelo]',
        image: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg',
        features: ['[Característica 1]', '[Característica 2]', '[Característica 3]'],
      },
    ],
    gallery: [
      { url: 'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg', alt: 'Puerta 1' },
      { url: 'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg', alt: 'Puerta 2' },
      { url: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg', alt: 'Puerta 3' },
    ],
  },
  {
    id: 'furniture',
    title: 'Muebles',
    description: '[Descripción detallada de la línea de muebles]',
    products: [
      {
        name: 'Línea Residencial',
        description: '[Descripción de la línea]',
        image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
        features: ['[Característica 1]', '[Característica 2]', '[Característica 3]'],
      },
      {
        name: 'Línea Comercial',
        description: '[Descripción de la línea]',
        image: 'https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg',
        features: ['[Característica 1]', '[Característica 2]', '[Característica 3]'],
      },
      {
        name: 'Línea Ejecutiva',
        description: '[Descripción de la línea]',
        image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
        features: ['[Característica 1]', '[Característica 2]', '[Característica 3]'],
      },
    ],
    gallery: [
      { url: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg', alt: 'Mueble 1' },
      { url: 'https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg', alt: 'Mueble 2' },
      { url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg', alt: 'Mueble 3' },
    ],
  },
  {
    id: 'wood',
    title: 'Maderas de Exportación',
    description: '[Descripción detallada de la línea de maderas]',
    products: [
      {
        name: 'Maderas Nobles',
        description: '[Descripción de la categoría]',
        image: 'https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg',
        features: ['[Característica 1]', '[Característica 2]', '[Característica 3]'],
      },
      {
        name: 'Maderas Certificadas',
        description: '[Descripción de la categoría]',
        image: 'https://images.pexels.com/photos/269245/pexels-photo-269245.jpeg',
        features: ['[Característica 1]', '[Característica 2]', '[Característica 3]'],
      },
      {
        name: 'Maderas Especiales',
        description: '[Descripción de la categoría]',
        image: 'https://images.pexels.com/photos/162523/core-timber-wood-grain-lumber-162523.jpeg',
        features: ['[Característica 1]', '[Característica 2]', '[Característica 3]'],
      },
    ],
    gallery: [
      { url: 'https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg', alt: 'Madera 1' },
      { url: 'https://images.pexels.com/photos/269245/pexels-photo-269245.jpeg', alt: 'Madera 2' },
      { url: 'https://images.pexels.com/photos/162523/core-timber-wood-grain-lumber-162523.jpeg', alt: 'Madera 3' },
    ],
  },
  {
    id: 'structures',
    title: 'Estructuras',
    description: 'Soluciones constructivas innovadoras',
    products: [
      {
        name: 'Estructuras Residenciales',
        description: 'Soluciones estructurales para proyectos habitacionales',
        image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
        features: ['Diseño personalizado', 'Alta resistencia', 'Instalación profesional'],
      },
      {
        name: 'Estructuras Comerciales',
        description: 'Sistemas constructivos para espacios comerciales',
        image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
        features: ['Espacios amplios', 'Versatilidad', 'Eficiencia energética'],
      },
      {
        name: 'Estructuras Industriales',
        description: 'Soluciones para proyectos industriales',
        image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg',
        features: ['Alta capacidad de carga', 'Durabilidad', 'Mantenimiento reducido'],
      },
    ],
    gallery: [
      { url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg', alt: 'Estructura 1' },
      { url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg', alt: 'Estructura 2' },
      { url: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg', alt: 'Estructura 3' },
    ],
  },
  {
    id: 'complements',
    title: 'Complementos',
    description: '[Descripción detallada de la línea de complementos]',
    products: [
      {
        name: 'Accesorios',
        description: '[Descripción de la categoría]',
        image: 'https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg',
        features: ['[Característica 1]', '[Característica 2]', '[Característica 3]'],
      },
      {
        name: 'Herrajes',
        description: '[Descripción de la categoría]',
        image: 'https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg',
        features: ['[Característica 1]', '[Característica 2]', '[Característica 3]'],
      },
      {
        name: 'Acabados',
        description: '[Descripción de la categoría]',
        image: 'https://images.pexels.com/photos/172292/pexels-photo-172292.jpeg',
        features: ['[Característica 1]', '[Característica 2]', '[Característica 3]'],
      },
    ],
    gallery: [
      { url: 'https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg', alt: 'Complemento 1' },
      { url: 'https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg', alt: 'Complemento 2' },
      { url: 'https://images.pexels.com/photos/172292/pexels-photo-172292.jpeg', alt: 'Complemento 3' },
    ],
  },
];

const BusinessLinesPage: React.FC = () => {
  return (
    <div>
      {businessLines.map((line) => (
        <ProductLine key={line.id} {...line} />
      ))}
    </div>
  );
};

export default BusinessLinesPage;