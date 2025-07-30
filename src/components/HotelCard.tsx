import React from 'react';
import { Hotel } from '../types/recommendations';

interface HotelCardProps {
  hotel: Hotel;
}

export const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img 
          src={hotel.src} 
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {hotel.rating} ★
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{hotel.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">₹{hotel.price_per_night}/night</span>
          <span className="text-sm text-gray-500">{hotel.location}</span>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Amenities:</h4>
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.map((amenity, index) => (
              <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 