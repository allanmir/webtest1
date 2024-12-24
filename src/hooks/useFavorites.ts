import { useState, useEffect } from 'react';
import { Restaurant } from '../types';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Restaurant[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (restaurant: Restaurant) => {
    const isFavorite = favorites.some(fav => fav.id === restaurant.id);
    let newFavorites;
    
    if (isFavorite) {
      newFavorites = favorites.filter(fav => fav.id !== restaurant.id);
    } else {
      newFavorites = [...favorites, restaurant];
    }
    
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (restaurantId: number) => {
    return favorites.some(fav => fav.id === restaurantId);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite
  };
}