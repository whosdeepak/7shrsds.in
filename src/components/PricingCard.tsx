import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  delay?: number;
  onSelect?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  popular = false,
  delay = 0,
  onSelect,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      viewport={{ once: true }}
      className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
        popular ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-white' : 'border-gray-100'
      }`}
    >
      {popular && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.3 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
            <Star className="h-4 w-4 mr-1" />
            Most Popular
          </div>
        </motion.div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-secondary-800 mb-2 font-poppins">{title}</h3>
        <p className="text-secondary-600 mb-4 font-inter">{description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-secondary-900 font-poppins">{price}</span>
          <span className="text-secondary-600 ml-2 font-inter">/{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + (index * 0.1) }}
            viewport={{ once: true }}
            className="flex items-center text-secondary-700 font-inter"
          >
            <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
            {feature}
          </motion.li>
        ))}
      </ul>

      <AnimatedButton
        variant={popular ? 'primary' : 'outline'}
        size="lg"
        className="w-full"
        onClick={onSelect}
      >
        Get Started
      </AnimatedButton>
    </motion.div>
  );
};

export default PricingCard;