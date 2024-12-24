import React from 'react';
import { Star, Clock, Plus, Heart } from 'lucide-react';
import { Restaurant, MenuItem } from '../types';
import { menuItems } from '../data/menu';
import { useFavorites } from '../hooks/useFavorites';

interface RestaurantProps extends Restaurant {
  onAddToCart?: (item: MenuItem) => void;
}

export default function RestaurantCard({
  id,
  name,
  image,
  rating,
  deliveryTime,
  minOrder,
  cuisine,
  onAddToCart
}: RestaurantProps) {
  const [showMenu, setShowMenu] = React.useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();
  const restaurantMenu = menuItems.filter(item => item.restaurantId === id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite({ id, name, image, rating, deliveryTime, minOrder, cuisine });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="h-48 cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-4 right-4 p-2 rounded-full ${
            isFavorite(id) ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
          } hover:scale-110 transition-all duration-200`}
        >
          <Heart className={`h-5 w-5 ${isFavorite(id) ? 'fill-current' : ''}`} />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{cuisine}</p>
        
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{deliveryTime}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mb-4">Min. order: {minOrder}</p>

        {showMenu && (
          <div className="border-t pt-4 space-y-4">
            <h4 className="font-semibold text-lg">Menu</h4>
            {restaurantMenu.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <h5 className="font-medium">{item.name}</h5>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-orange-500 font-medium">${item.price.toFixed(2)}</p>
                </div>
                {onAddToCart && (
                  <button
                    onClick={() => onAddToCart(item)}
                    className="p-2 text-orange-500 hover:bg-orange-50 rounded-full"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}