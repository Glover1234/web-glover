import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import local carousel images
import Img1 from '../../../assets/doors/carrusel/carrusel1.jpg';
import Img2 from '../../../assets/doors/carrusel/carrusel2.jpg';
import Img3 from '../../../assets/doors/carrusel/carrusel3.jpeg';
import Img4 from '../../../assets/doors/carrusel/carrusel4.jpeg';

const galleryImages = [
  { url: Img1, alt: 'Puerta moderna en ambiente minimalista' },
  { url: Img2, alt: 'Puerta clásica en pasillo elegante' },
  { url: Img3, alt: 'Puerta de madera en ambiente rústico' },
  { url: Img4, alt: 'Puerta contemporánea en espacio moderno' },
];

const DoorStylesShowcase: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          loop
          className="pb-12"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  </section>
);

export default DoorStylesShowcase;