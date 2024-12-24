import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Savoria</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Savoria is your culinary companion, bringing the finest dining experiences directly to your doorstep. 
            We curate a selection of exceptional restaurants, ensuring that every meal is a celebration of flavor and convenience.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To elevate the food delivery experience by connecting food enthusiasts with exceptional restaurants, 
            while ensuring every dish arrives as if it were served directly from the chef's kitchen.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-3" />
              <span>123 Culinary Avenue, Gastroville, GV 12345</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="h-5 w-5 mr-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="h-5 w-5 mr-3" />
              <span>hello@savoria.com</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-3" />
              <span>Available 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}