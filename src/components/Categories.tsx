import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pizza, Coffee, Sandwich, IceCream, Salad, Beef } from 'lucide-react';

const categories = [
  { name: 'Pizza', icon: Pizza, color: 'bg-red-100 text-red-600', query: 'pizza' },
  { name: 'Coffee', icon: Coffee, color: 'bg-brown-100 text-brown-600', query: 'coffee' },
  { name: 'Sandwiches', icon: Sandwich, color: 'bg-yellow-100 text-yellow-600', query: 'sandwich' },
  { name: 'Desserts', icon: IceCream, color: 'bg-pink-100 text-pink-600', query: 'desserts' },
  { name: 'Salads', icon: Salad, color: 'bg-green-100 text-green-600', query: 'salad' },
  { name: 'Meat', icon: Beef, color: 'bg-orange-100 text-orange-600', query: 'meat' },
];

export default function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (query: string) => {
    navigate(`/categories?category=${query}`);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Food Categories
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.query)}
              className={`${category.color} p-6 rounded-lg transition-transform hover:scale-105 flex flex-col items-center`}
            >
              <category.icon className="h-8 w-8 mb-3" />
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}