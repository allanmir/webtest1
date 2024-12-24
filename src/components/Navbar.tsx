import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu as MenuIcon, X, ChefHat, Search, User, Heart } from 'lucide-react';

interface NavbarProps {
  toggleCart: () => void;
  cartItemsCount: number;
}

export default function Navbar({ toggleCart, cartItemsCount }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/restaurants', label: 'Restaurants' },
    { path: '/categories', label: 'Categories' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top bar */}
      <div className="bg-purple-600 text-white py-1 text-center text-sm">
        <p>Free delivery on orders over $30! 🚀</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <ChefHat className="h-8 w-8 text-purple-600 transition-transform group-hover:rotate-12" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Savoria
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive(path)
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {label}
                {isActive(path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center text-gray-600 hover:text-purple-600">
              <Search className="h-5 w-5" />
            </button>
            <button className="hidden md:flex items-center text-gray-600 hover:text-purple-600">
              <Heart className="h-5 w-5" />
            </button>
            <button className="hidden md:flex items-center text-gray-600 hover:text-purple-600">
              <User className="h-5 w-5" />
            </button>
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemsCount}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-purple-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  isActive(path)
                    ? 'bg-purple-50 text-purple-600'
                    : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 w-full py-2">
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 w-full py-2">
                <Heart className="h-5 w-5" />
                <span>Favorites</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 w-full py-2">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}