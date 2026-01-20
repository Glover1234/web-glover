export interface Product {
  id: string;
  name: string;
  line: 'doors' | 'furniture' | 'wood' | 'structures' | 'complements';
  description: string;
  descriptionShort?: string; // Descripción corta para cards
  descriptionExtended?: string; // Descripción extendida para detail page
  images: {
    main: string;        // Imagen principal
    product1: string;    // Segunda imagen del producto
    ambient: string;     // Imagen ambientada
  };
  specifications?: Record<string, string>; // Especificaciones opcionales
}

export interface CatalogFilters {
  lines: string[];
}

export type ProductLine = 'doors' | 'furniture' | 'wood' | 'structures' | 'complements';

export interface LineInfo {
  id: ProductLine;
  nameKey: string;
  color: string; // Color para badges
}
