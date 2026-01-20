import React, { useState } from 'react';
import ImageModal from '../ImageModal';

interface ProductGalleryProps {
  images: {
    main: string;
    product1: string;
    ambient: string;
  };
  productName: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState<string>(images.main);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const thumbnails = [
    { src: images.main, alt: `${productName} - Principal` },
    { src: images.product1, alt: `${productName} - Vista 2` },
    { src: images.ambient, alt: `${productName} - Ambientada` },
  ];

  return (
    <div className="space-y-4">
      {/* Imagen principal */}
      <div
        className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100 cursor-pointer group"
        onClick={() => setModalImage(selectedImage)}
      >
        <img
          src={selectedImage}
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Icono de zoom */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
          <svg
            className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
            />
          </svg>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-3">
        {thumbnails.map((thumb, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(thumb.src)}
            className={`relative aspect-square overflow-hidden rounded-lg bg-neutral-100 border-2 transition-all ${
              selectedImage === thumb.src
                ? 'border-red-600 ring-2 ring-red-200'
                : 'border-neutral-200 hover:border-neutral-400'
            }`}
          >
            <img
              src={thumb.src}
              alt={thumb.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Modal para imagen completa */}
      <ImageModal
        isOpen={!!modalImage}
        imageSrc={modalImage || ''}
        imageAlt={productName}
        onClose={() => setModalImage(null)}
      />
    </div>
  );
};

export default ProductGallery;
