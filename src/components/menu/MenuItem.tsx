import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatCurrency } from '../../utils/formatCurrency';

interface MenuItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  onAddToCart: () => void;
  quantity?: number;
  onUpdateQuantity?: (newQuantity: number) => void;
}

export default function MenuItem({
  name,
  description,
  price,
  image,
  onAddToCart,
  quantity = 0,
  onUpdateQuantity
}: MenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-medium text-purple-600">
            {formatCurrency(price)}
          </span>
          
          {quantity > 0 ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => onUpdateQuantity?.(quantity - 1)}
                className="p-1 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-medium">{quantity}</span>
              <button
                onClick={() => onUpdateQuantity?.(quantity + 1)}
                className="p-1 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-100"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onAddToCart}
              className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}