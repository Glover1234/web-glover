import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import logo from '../../../assets/general/logo-blanco.jpeg';

// Banner images
import bannerComplementos from '../../../assets/home_banner/Banner_Complementos.jpeg';
import bannerEstructuras from '../../../assets/home_banner/Banner_Estructuras.jpeg';
import bannerMaderas from '../../../assets/home_banner/Banner_Maderas.jpeg';
import bannerMuebles from '../../../assets/home_banner/Banner_Muebles.jpeg';
import bannerPuertas from '../../../assets/home_banner/Banner_Puertas.jpeg';

interface BusinessLine {
  image: string;
  titleKey: string;
  descriptionKey: string;
}

const Banner: React.FC = () => {
  const { t } = useTranslation('home');
  const [activeSlide, setActiveSlide] = useState(0);

  const businessLines: BusinessLine[] = [
    {
      image: bannerMuebles,
      titleKey: 'banner.furniture.title',
      descriptionKey: 'banner.furniture.description'
    },
    {
      image: bannerPuertas,
      titleKey: 'banner.doors.title',
      descriptionKey: 'banner.doors.description'
    },
    {
      image: bannerMaderas,
      titleKey: 'banner.wood.title',
      descriptionKey: 'banner.wood.description'
    },
    {
      image: bannerEstructuras,
      titleKey: 'banner.structures.title',
      descriptionKey: 'banner.structures.description'
    },
    {
      image: bannerComplementos,
      titleKey: 'banner.complements.title',
      descriptionKey: 'banner.complements.description'
    }
  ];

  return (
    <section className="relative w-full pt-20">
      <div className="relative h-[75vh] w-full overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-red-600 !opacity-100',
            bulletClass: 'swiper-pagination-bullet !bg-white !bg-opacity-50 !w-2 !h-2 !mx-1 hover:!bg-opacity-70 transition-all duration-300',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="h-full w-full"
        >
          {businessLines.map((line, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ 
                    backgroundImage: `url(${line.image})`,
                  }}
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/25" />
                
                {/* Content */}
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center px-6 max-w-4xl">
                    {/* Logo */}
                    <motion.div
                      key={`logo-${activeSlide}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="mb-8"
                    >
                      <img 
                        src={logo} 
                        alt="Glover Logo" 
                        className="w-96 md:w-120 lg:w-144 h-auto mx-auto" 
                      />
                    </motion.div>
                    
                    {/* Text content */}
                    <motion.div
                      key={`content-${activeSlide}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                      className="space-y-4"
                    >
                      <div className="bg-black/20 backdrop-blur-sm rounded-lg px-8 py-6 inline-block">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white uppercase tracking-wider mb-3">
                          Industrial Glover
                        </h1>
                        <div className="w-20 h-0.5 bg-red-600 mx-auto mb-3"></div>
                        <p className="text-lg md:text-xl lg:text-2xl text-white italic font-light mb-4">
                          {t('companyIntro.tagline')}
                        </p>
                        <p className="text-xl md:text-2xl lg:text-3xl text-white font-light uppercase tracking-wide">
                          {t(line.titleKey)}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Subtle Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 hover:bg-white/40 transition-all duration-300">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 hover:bg-white/40 transition-all duration-300">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
        {/* Pagination */}
        <div className="swiper-pagination-custom absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2"></div>
      </div>
    </section>
  );
};

export default Banner;