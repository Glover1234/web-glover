import React from 'react';
import { motion } from 'framer-motion';

const Map: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full h-[400px] rounded-lg overflow-hidden shadow-sm"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.7302655304084!2d-72.45931148469236!3d-38.6259606717346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966b336db038b0af%3A0x3ca659dc90af77ba!2sIndustrial%20Glover%20S.P.A.!5e0!3m2!1ses-419!2scl!4v1714928162153!5m2!1ses-419!2scl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
};

export default Map;