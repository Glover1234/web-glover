import { Product, LineInfo, ProductLine } from '../types/catalog';

// Información de líneas con colores para badges
export const linesInfo: Record<ProductLine, LineInfo> = {
  doors: {
    id: 'doors',
    nameKey: 'catalog.lines.doors',
    color: 'bg-neutral-600'
  },
  furniture: {
    id: 'furniture',
    nameKey: 'catalog.lines.furniture',
    color: 'bg-neutral-600'
  },
  wood: {
    id: 'wood',
    nameKey: 'catalog.lines.wood',
    color: 'bg-neutral-600'
  },
  structures: {
    id: 'structures',
    nameKey: 'catalog.lines.structures',
    color: 'bg-neutral-600'
  },
  complements: {
    id: 'complements',
    nameKey: 'catalog.lines.complements',
    color: 'bg-neutral-600'
  }
};

// Datos mock de productos - REEMPLAZAR con datos reales
export const products: Product[] = [
  // PUERTAS
  {
    id: 'puerta-bari',
    name: 'Puerta Bari',
    line: 'doors',
    description: 'Puerta en madera 100% sólida de pino radiata. Diseño elegante con aislamiento térmico y acústico.',
    images: {
      main: '/src/assets/doors/puertas/BARI.jpeg',
      product1: '/src/assets/doors/coleccion/coleccion1.jpg',
      ambient: '/src/assets/doors/coleccion/coleccion3.jpeg',
    },
    specifications: {
      'Material': 'Pino Radiata 100%',
      'Acabado': 'Pintura al agua',
      'Certificación': 'FSC®'
    }
  },
  {
    id: 'puerta-llaima',
    name: 'Puerta Llaima',
    line: 'doors',
    description: 'Diseño moderno con madera sólida, perfecta para accesos principales.',
    images: {
      main: '/src/assets/doors/puertas/LLAIMA.jpg',
      product1: '/src/assets/doors/coleccion/coleccion2.jpg',
      ambient: '/src/assets/doors/coleccion/coleccion3.jpeg',
    }
  },
  {
    id: 'puerta-murano',
    name: 'Puerta Murano',
    line: 'doors',
    description: 'Estilo contemporáneo con alta durabilidad y resistencia.',
    images: {
      main: '/src/assets/doors/puertas/MURANO.jpg',
      product1: '/src/assets/doors/coleccion/coleccion1.jpg',
      ambient: '/src/assets/doors/coleccion/coleccion2.jpg',
    }
  },
  {
    id: 'puerta-lascar',
    name: 'Puerta Lascar',
    line: 'doors',
    description: 'Diseño versátil con excelentes propiedades de aislamiento.',
    images: {
      main: '/src/assets/doors/puertas/LASCAR.jpeg',
      product1: '/src/assets/doors/coleccion/coleccion3.jpeg',
      ambient: '/src/assets/doors/coleccion/coleccion1.jpg',
    }
  },
  {
    id: 'puerta-turin',
    name: 'Puerta Turin',
    line: 'doors',
    description: 'Elegancia clásica con tecnología moderna.',
    images: {
      main: '/src/assets/doors/puertas/TURIN.jpg',
      product1: '/src/assets/doors/coleccion/coleccion2.jpg',
      ambient: '/src/assets/doors/coleccion/coleccion3.jpeg',
    }
  },

  // MUEBLES
  {
    id: 'mueble-velador-clasico',
    name: 'Velador Clásico',
    line: 'furniture',
    description: 'Velador de noche en madera maciza con diseño atemporal.',
    images: {
      main: '/src/assets/furniture/coleccion/coleccion1.jpeg',
      product1: '/src/assets/furniture/coleccion/coleccion2.jpeg',
      ambient: '/src/assets/furniture/coleccion/coleccion3.jpeg',
    }
  },
  {
    id: 'mueble-comoda-moderna',
    name: 'Cómoda Moderna',
    line: 'furniture',
    description: 'Cómoda funcional con múltiples cajones y acabado premium.',
    images: {
      main: '/src/assets/furniture/coleccion/coleccion2.jpeg',
      product1: '/src/assets/furniture/coleccion/coleccion3.jpeg',
      ambient: '/src/assets/furniture/coleccion/coleccion1.jpeg',
    }
  },
  {
    id: 'mueble-armario',
    name: 'Armario Dormitorio',
    line: 'furniture',
    description: 'Amplio espacio de almacenamiento con diseño elegante.',
    images: {
      main: '/src/assets/furniture/coleccion/coleccion3.jpeg',
      product1: '/src/assets/furniture/coleccion/coleccion1.jpeg',
      ambient: '/src/assets/furniture/coleccion/coleccion2.jpeg',
    }
  },

  // MADERAS DE EXPORTACIÓN
  {
    id: 'madera-finger-joint',
    name: 'Madera Finger Joint',
    line: 'wood',
    description: 'Madera de exportación con tecnología finger joint para máxima resistencia.',
    images: {
      main: '/src/assets/wood/coleccion/coleccion1.jpeg',
      product1: '/src/assets/wood/coleccion/coleccion2.jpeg',
      ambient: '/src/assets/wood/coleccion/coleccion3.jpeg',
    }
  },
  {
    id: 'madera-premium',
    name: 'Madera Premium Export',
    line: 'wood',
    description: 'Pino radiata de alta calidad para mercados internacionales.',
    images: {
      main: '/src/assets/wood/coleccion/coleccion2.jpeg',
      product1: '/src/assets/wood/coleccion/coleccion3.jpeg',
      ambient: '/src/assets/wood/coleccion/coleccion1.jpeg',
    }
  },
  {
    id: 'madera-estructural',
    name: 'Madera Estructural',
    line: 'wood',
    description: 'Madera para construcción con certificación FSC®.',
    images: {
      main: '/src/assets/wood/coleccion/coleccion3.jpeg',
      product1: '/src/assets/wood/coleccion/coleccion1.jpeg',
      ambient: '/src/assets/wood/coleccion/coleccion2.jpeg',
    }
  },

  // ESTRUCTURAS
  {
    id: 'estructura-respaldo-cama',
    name: 'Respaldo de Cama Premium',
    line: 'structures',
    description: 'Respaldo ergonómico en madera sólida con diseño elegante.',
    images: {
      main: '/src/assets/structures/coleccion/coleccion1.jpeg',
      product1: '/src/assets/structures/coleccion/coleccion2.jpeg',
      ambient: '/src/assets/structures/coleccion/coleccion3.jpeg',
    }
  },
  {
    id: 'estructura-base-cama',
    name: 'Base de Cama',
    line: 'structures',
    description: 'Base resistente y desmontable para fácil transporte.',
    images: {
      main: '/src/assets/structures/coleccion/coleccion2.jpeg',
      product1: '/src/assets/structures/coleccion/coleccion3.jpeg',
      ambient: '/src/assets/structures/coleccion/coleccion1.jpeg',
    }
  },
  {
    id: 'estructura-sofa',
    name: 'Estructura de Sofá',
    line: 'structures',
    description: 'Estructura robusta para sofás con uniones finger joint.',
    images: {
      main: '/src/assets/structures/coleccion/coleccion3.jpeg',
      product1: '/src/assets/structures/coleccion/coleccion1.jpeg',
      ambient: '/src/assets/structures/coleccion/coleccion2.jpeg',
    }
  },

  // COMPLEMENTOS
  {
    id: 'complemento-pata-cama',
    name: 'Patas de Cama',
    line: 'complements',
    description: 'Patas torneadas en madera con diferentes alturas disponibles.',
    images: {
      main: '/src/assets/complements/coleccion/coleccion1.jpg',
      product1: '/src/assets/complements/coleccion/coleccion2.jpg',
      ambient: '/src/assets/complements/coleccion/coleccion3.jpeg',
    }
  },
  {
    id: 'complemento-perilla',
    name: 'Perillas Decorativas',
    line: 'complements',
    description: 'Perillas artesanales en madera con variedad de diseños.',
    images: {
      main: '/src/assets/complements/coleccion/coleccion2.jpg',
      product1: '/src/assets/complements/coleccion/coleccion3.jpeg',
      ambient: '/src/assets/complements/coleccion/coleccion1.jpg',
    }
  },
  {
    id: 'complemento-moldura',
    name: 'Molduras Decorativas',
    line: 'complements',
    description: 'Molduras en madera para acabados personalizados.',
    images: {
      main: '/src/assets/complements/coleccion/coleccion3.jpeg',
      product1: '/src/assets/complements/coleccion/coleccion1.jpg',
      ambient: '/src/assets/complements/coleccion/coleccion2.jpg',
    }
  },
];

// Función helper para obtener productos por línea
export const getProductsByLine = (line: ProductLine): Product[] => {
  return products.filter(p => p.line === line);
};

// Función helper para obtener un producto por ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
