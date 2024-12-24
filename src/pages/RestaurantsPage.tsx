import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import { menuItems } from '../data/menu';
import RestaurantCard from '../components/RestaurantCard';
import { Search } from 'lucide-react';
import { MenuItem } from '../types';

export default function RestaurantsPage() {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
  }, [searchParams]);

  const filteredRestaurants = restaurants.filter(restaurant => {
    const restaurantMatches = 
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    
    const menuMatches = menuItems
      .filter(item => item.restaurantId === restaurant.id)
      .some(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return restaurantMatches || menuMatches;
  });

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

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">All Restaurants</h1>
      
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex items-center bg-white rounded-lg overflow-hidden p-2 shadow-sm">
          <Search className="h-6 w-6 text-gray-400 mx-2" />
          <input
            type="text"
            placeholder="Search restaurants, dishes, or cuisines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 py-2 px-4 focus:outline-none"
          />
        </div>
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
    </div>
  );
}