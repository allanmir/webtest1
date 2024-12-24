import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNav from './components/navigation/MainNav';
import Cart from './components/Cart';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import RestaurantsPage from './pages/RestaurantsPage';
import CategoriesPage from './pages/CategoriesPage';
import AboutPage from './pages/AboutPage';
import FavoritesPage from './pages/FavoritesPage';
import { useCart } from './hooks/useCart';

export default function App() {
  const { cartItems, updateQuantity, removeItem, cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <MainNav toggleCart={toggleCart} cartItemsCount={cartCount} />
        
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>

        <Cart
          isOpen={isCartOpen}
          onClose={toggleCart}
          items={cartItems}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      </div>
    </Router>
  );
}