import React, { useState } from 'react';
import { Pizza, Coffee, IceCream, Salad, Sandwich } from 'lucide-react';
import MenuCategories from './MenuCategories';
import MenuSection from './MenuSection';
import { MenuItem } from '../../types';
import { menuItems } from '../../data/menu';

const categories = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'pizza', name: 'Pizza', icon: <Pizza className="h-5 w-5" /> },
  { id: 'coffee', name: 'Coffee & Drinks', icon: <Coffee className="h-5 w-5" /> },
  { id: 'desserts', name: 'Desserts', icon: <IceCream className="h-5 w-5" /> },
  { id: 'salads', name: 'Salads', icon: <Salad className="h-5 w-5" /> },
  { id: 'sandwiches', name: 'Sandwiches', icon: <Sandwich className="h-5 w-5" /> },
];

interface RestaurantMenuProps {
  restaurantId: number;
  onAddToCart: (item: MenuItem) => void;
}

export default function RestaurantMenu({ restaurantId, onAddToCart }: RestaurantMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = menuItems.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <MenuCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      {Object.entries(groupedItems).map(([category, items]) => (
        <MenuSection
          key={category}
          title={category}
          items={items}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}