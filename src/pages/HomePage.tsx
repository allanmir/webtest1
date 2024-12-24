import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import RestaurantList from '../components/RestaurantList';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Categories />
      <RestaurantList />
    </div>
  );
}