import React from 'react';
import { motion } from 'framer-motion';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface MenuCategoriesProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export default function MenuCategories({
  categories,
  selectedCategory,
  onSelectCategory,
}: MenuCategoriesProps) {
  return (
    <div className="overflow-x-auto py-4 px-4 -mx-4">
      <div className="flex space-x-4 min-w-max">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCategory(category.id)}
            className={`flex items-center px-6 py-3 rounded-full transition-colors ${
              selectedCategory === category.id
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-purple-50'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}