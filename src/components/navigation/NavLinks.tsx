import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { path: '/', label: 'Home' },
  { path: '/restaurants', label: 'Restaurants' },
  { path: '/categories', label: 'Categories' },
  { path: '/about', label: 'About' },
];

export default function NavLinks() {
  const location = useLocation();

  return (
    <>
      {links.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className="relative py-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
        >
          {label}
          {location.pathname === path && (
            <motion.div
              layoutId="activeLink"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </Link>
      ))}
    </>
  );
}