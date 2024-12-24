import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pizza, Coffee, Sandwich, IceCream, Salad, Beef } from 'lucide-react';
import { restaurants } from '../data/restaurants';
import RestaurantCard from '../components/RestaurantCard';
import { MenuItem } from '../types';
import { menuItems } from '../data/menu';

const categories = [
  { name: 'Pizza', icon: Pizza, color: 'bg-red-100 text-red-600', query: 'pizza' },
  { name: 'Coffee', icon: Coffee, color: 'bg-brown-100 text-brown-600', query: 'coffee' },
  { name: 'Sandwiches', icon: Sandwich, color: 'bg-yellow-100 text-yellow-600', query: 'sandwich' },
  { name: 'Desserts', icon: IceCream, color: 'bg-pink-100 text-pink-600', query: 'desserts' },
  { name: 'Salads', icon: Salad, color: 'bg-green-100 text-green-600', query: 'salad' },
  { name: 'Meat', icon: Beef, color: 'bg-orange-100 text-orange-600', query: 'meat' },
];

export default function CategoriesPage() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const handleAddToCart = (item: MenuItem) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image
    };
    
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = existingCart.findIndex((i: any) => i.id === item.id);
    
    if (existingItemIndex > -1) {
      existingCart[existingItemIndex].quantity += 1;
    } else {
      existingCart.push(cartItem);
    }
    
    localStorage.setItem('cart', JSON.stringify(existingCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const filteredRestaurants = selectedCategory
    ? restaurants.filter(restaurant => {
        const matchesCuisine = restaurant.cuisine.toLowerCase().includes(selectedCategory.toLowerCase());
        const hasMatchingItems = menuItems
          .filter(item => item.restaurantId === restaurant.id)
          .some(item => item.category.toLowerCase().includes(selectedCategory.toLowerCase()));
        return matchesCuisine || hasMatchingItems;
      })
    : restaurants;

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Food Categories</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.query)}
            className={`${category.color} p-6 rounded-lg transition-transform hover:scale-105 flex flex-col items-center
              ${selectedCategory === category.query ? 'ring-2 ring-orange-500' : ''}`}
          >
            <category.icon className="h-8 w-8 mb-3" />
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            {...restaurant}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {filteredRestaurants.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No restaurants found for this category. Try another category!
          </p>
        </div>
      )}
    </div>
  );
}