import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, linkedin }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Linkedin className="w-8 h-8 text-white" />
          </a>
        )}
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-neutral-600">{role}</p>
    </motion.div>
  );
};

export default TeamMember;