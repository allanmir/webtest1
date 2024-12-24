import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import { restaurants } from '../data/restaurants';

export default function RestaurantList() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Popular Restaurants</h2>
        <Link
          to="/restaurants"
          className="text-orange-500 hover:text-orange-600 font-medium"
        >
          View All
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.slice(0, 3).map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </section>
  );
}