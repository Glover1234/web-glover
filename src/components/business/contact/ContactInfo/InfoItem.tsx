import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface InfoItemProps {
  icon: LucideIcon;
  title: string;
  content: string;
  link?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon: Icon, title, content, link }) => {
  const ContentWrapper = link ? 'a' : 'div';
  const props = link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-start gap-4"
    >
      <div className="p-3 bg-white rounded-lg">
        <Icon className="w-6 h-6 text-red-600" />
      </div>
      <div>
        <h3 className="font-medium text-neutral-900">{title}</h3>
        <ContentWrapper
          className={`text-neutral-600 ${link ? 'hover:text-primary transition-colors' : ''}`}
          {...props}
        >
          {content}
        </ContentWrapper>
      </div>
    </motion.div>
  );
};

export default InfoItem;