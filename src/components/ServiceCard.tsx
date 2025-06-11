import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300"
      >
        <Icon className="h-8 w-8 text-white" />
      </motion.div>
      
      <h3 className="text-2xl font-bold text-secondary-800 mb-4 font-poppins">{title}</h3>
      <p className="text-secondary-600 mb-6 leading-relaxed font-inter">{description}</p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + (index * 0.1) }}
            viewport={{ once: true }}
            className="flex items-center text-secondary-700 font-inter"
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;