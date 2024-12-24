import { useState, useEffect } from 'react';
import { CartItem } from '../types';

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }

    const handleCartUpdate = () => {
      const updatedCart = localStorage.getItem('cart');
      if (updatedCart) {
        setCartItems(JSON.parse(updatedCart));
      }
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  const updateQuantity = (id: number, quantity: number) => {
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ).filter(item => item.quantity > 0);

    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const addToCart = (item: CartItem) => {
    const existingItemIndex = cartItems.findIndex(i => i.id === item.id);
    
    if (existingItemIndex > -1) {
      updateQuantity(item.id, cartItems[existingItemIndex].quantity + 1);
    } else {
      const updatedItems = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedItems);
      localStorage.setItem('cart', JSON.stringify(updatedItems));
    }
    
    window.dispatchEvent(new Event('cartUpdated'));
  };

  return {
    cartItems,
    updateQuantity,
    removeItem,
    addToCart,
    cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0)
  };
}