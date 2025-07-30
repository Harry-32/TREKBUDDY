import React from 'react';
import { Activity } from '../types/recommendations';

interface ActivityCardProps {
  activity: Activity;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img 
          src={activity.src} 
          alt={activity.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {activity.rating} ★
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">₹{activity.price_per_person}/person</span>
          <span className="text-sm text-gray-500">{activity.location}</span>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Duration:</h4>
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
            {activity.duration}
          </span>
        </div>
      </div>
    </div>
  );
}; 