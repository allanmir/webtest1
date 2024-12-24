import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/restaurants?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="relative h-[500px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Delicious Food Delivered To Your Door
        </h1>
        <p className="text-xl text-white mb-8">
          Order from your favorite restaurants with just a few clicks
        </p>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="flex items-center bg-white rounded-lg overflow-hidden p-2">
            <Search className="h-6 w-6 text-gray-400 mx-2" />
            <input
              type="text"
              placeholder="Search for restaurants or dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 py-2 px-4 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}