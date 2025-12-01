import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-neutral-600">{label}</div>
    </motion.div>
  );
};

export default StatCard;