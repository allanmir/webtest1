import React from 'react';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
import { MenuItem as MenuItemType } from '../../types';

interface MenuSectionProps {
  title: string;
  items: MenuItemType[];
  onAddToCart: (item: MenuItemType) => void;
}

export default function MenuSection({ title, items, onAddToCart }: MenuSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            {...item}
            onAddToCart={() => onAddToCart(item)}
          />
        ))}
      </div>
    </motion.section>
  );
}