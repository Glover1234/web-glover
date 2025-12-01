import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import local carousel images for complementos
import C1 from '../../../assets/complements/carrusel/carrusel1.jpeg';
import C2 from '../../../assets/complements/carrusel/carrusel2.jpeg';
import C3 from '../../../assets/complements/carrusel/carrusel3.jpeg';
import C4 from '../../../assets/complements/carrusel/carrusel4.jpeg';
import C5 from '../../../assets/complements/carrusel/carrusel5.jpeg';

const galleryImages = [
  { url: C1, alt: 'Pata de mueble metálica con acabado negro' },
  { url: C2, alt: 'Tirador de madera para cajón' },
  { url: C3, alt: 'Bisagra oculta de alta resistencia' },
  { url: C4, alt: 'Rueda giratoria para mueble compacto' },
  { url: C5, alt: 'Soporte de estante minimalista' },
];

const ComplementStylesShowcase: React.FC = () => (
  <section className="py-24 bg-white w-full">
    <div className="w-full px-4 lg:px-8">
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

export default ComplementStylesShowcase;