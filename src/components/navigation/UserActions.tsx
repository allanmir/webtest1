import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UserActionsProps {
  toggleCart: () => void;
  cartItemsCount: number;
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  badge?: number;
}

function ActionButton({ icon, label, onClick, badge }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative p-2 text-gray-600 hover:text-purple-600 transition-all duration-200 hover:bg-purple-50 rounded-full group"
      aria-label={label}
    >
      {icon}
      {badge !== undefined && badge > 0 && (
        <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {badge}
        </span>
      )}
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}

export default function UserActions({ toggleCart, cartItemsCount }: UserActionsProps) {
  return (
    <div className="hidden md:flex items-center space-x-2">
      <Link to="/favorites">
        <ActionButton
          icon={<Heart className="h-5 w-5" />}
          label="Favorites"
        />
      </Link>
      <ActionButton
        icon={<ShoppingCart className="h-5 w-5" />}
        label="Cart"
        onClick={toggleCart}
        badge={cartItemsCount}
      />
    </div>
  );
}