import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface InfoItemProps {
  icon: LucideIcon;
  title: string;
  content: string;
  link?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon: Icon, title, content, link }) => {
  const isInternalLink = link && link.startsWith('/');
  const isExternalLink = link && !link.startsWith('/');
  
  const renderContent = () => {
    if (isInternalLink) {
      return (
        <Link
          to={link}
          className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium"
        >
          {content}
        </Link>
      );
    }
    
    if (isExternalLink) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium"
        >
          {content}
        </a>
      );
    }
    
    return <span className="text-gray-600">{content}</span>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-start gap-4 p-1"
    >
      <div className="p-4 bg-red-600 rounded-xl shadow-lg flex-shrink-0">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-800 mb-2 text-lg">{title}</h3>
        <div className="text-gray-600 leading-relaxed">
          {renderContent()}
        </div>
      </div>
    </motion.div>
  );
};

export default InfoItem;