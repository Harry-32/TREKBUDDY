import React from 'react';
import { Restaurant } from '../types/recommendations';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img 
          src={restaurant.src} 
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {restaurant.rating} ★
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{restaurant.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">₹{restaurant.avg_cost_per_person}/person</span>
          <span className="text-sm text-gray-500">{restaurant.location}</span>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {restaurant.specialties.map((specialty, index) => (
              <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 