import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';
import MobileNav from './MobileNav';
import NavLinks from './NavLinks';
import UserActions from './UserActions';

interface MainNavProps {
  toggleCart: () => void;
  cartItemsCount: number;
}

export default function MainNav({ toggleCart, cartItemsCount }: MainNavProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-2 text-center">
            <p className="text-sm font-medium text-white">
              Free delivery on orders over $30! 🚀 Limited time offer
            </p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <ChefHat className="h-8 w-8 text-purple-600 transition-all duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-20 rounded-full transition-opacity" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Savoria
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
            </div>

            {/* User Actions (Search, Favorites, Profile, Cart) */}
            <UserActions toggleCart={toggleCart} cartItemsCount={cartItemsCount} />

            {/* Mobile Menu Button */}
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
}