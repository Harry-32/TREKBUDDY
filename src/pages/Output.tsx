import React from 'react';
import { useLocation } from 'react-router-dom';

interface Hotel {
  id: string;
  name: string;
  destination: string;
  price_per_night: number;
  rating: number;
  type: string;
  suitable_for: string;
  activity_type: string;
}

interface Restaurant {
  id: string;
  name: string;
  destination: string;
  avg_cost_per_person: number;
  rating: number;
  cuisine: string;
  suitable_for: string;
}

interface Activity {
  id: string;
  name: string;
  city: string;
  city_id: string;
  rating: number;
  location: string;
  src: string;
  description: string;
  duration: string;
  best_time_to_visit: string;
  price_per_person: number;
  suitable_for: string[];
  nearby_hotels: string[];
  type: string;
}

interface CostBreakdown {
  hotelCost: number;
  foodCost: number;
  activitiesCost: number;
  totalCost: number;
  perPersonCost: number;
  numberOfDays: number;
  budgetStatus: string;
}

interface Recommendation {
  spots: Activity[];
  hotels: Hotel[];
  restaurants: Restaurant[];
  activities: Activity[];
  costBreakdown: CostBreakdown;
  travelDates: string;
  numberOfPeople: number;
  numberOfDays: number;
}

const Output: React.FC = () => {
  const location = useLocation();
  const { recommendations } = location.state as { recommendations: Recommendation };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (!recommendations) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">No recommendations found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Your Personalized Travel Plan for {recommendations.hotels[0]?.destination}
        </h1>

        {/* Cost Summary */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cost Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">Duration</p>
              <p className="font-semibold">{recommendations.numberOfDays} days</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">Hotel Cost</p>
              <p className="font-semibold">{formatCurrency(recommendations.costBreakdown.hotelCost)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">Food Cost</p>
              <p className="font-semibold">{formatCurrency(recommendations.costBreakdown.foodCost)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">Activities Cost</p>
              <p className="font-semibold">{formatCurrency(recommendations.costBreakdown.activitiesCost)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">Total Cost</p>
              <p className="font-semibold">{formatCurrency(recommendations.costBreakdown.totalCost)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">Per Person</p>
              <p className="font-semibold">{formatCurrency(recommendations.costBreakdown.perPersonCost)}</p>
            </div>
          </div>
        </div>

        {/* Recommended Hotels */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recommended Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.hotels.map(hotel => (
              <div key={hotel.id} className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">{hotel.name}</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Type: {hotel.type}</p>
                  <p className="text-gray-600">Price: {formatCurrency(hotel.price_per_night)}/night</p>
                  <p className="text-gray-600">Rating: {hotel.rating}/5</p>
                  <p className="text-gray-600">Suitable for: {hotel.suitable_for}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Restaurants */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recommended Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.restaurants.map(restaurant => (
              <div key={restaurant.id} className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">{restaurant.name}</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Cuisine: {restaurant.cuisine}</p>
                  <p className="text-gray-600">Average Cost: {formatCurrency(restaurant.avg_cost_per_person)}/person</p>
                  <p className="text-gray-600">Rating: {restaurant.rating}/5</p>
                  <p className="text-gray-600">Suitable for: {restaurant.suitable_for}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Activities */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Recommended Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.activities.map(activity => (
              <div key={activity.id} className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">{activity.name}</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Type: {activity.type}</p>
                  <p className="text-gray-600">Cost: {formatCurrency(activity.price_per_person)}/person</p>
                  <p className="text-gray-600">Suitable for: {activity.suitable_for.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Output; 