import React from 'react';

// Import local video asset from src/assets
import VideoSrc from '../../../../assets/wood/video/Glover-Maderas.mp4';

const VideoBanner: React.FC = () => (
  <section className="relative h-screen bg-neutral-900">
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={VideoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>
);

export default VideoBanner;
