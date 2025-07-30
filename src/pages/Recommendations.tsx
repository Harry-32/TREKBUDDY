import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Hotel, Restaurant, Activity, TravelPreferences } from '../data/chennaiData';
import { CityDescription } from '../components/CityDescription';

interface CityData {
  hotels: Hotel[];
  restaurants: Restaurant[];
  activities: Activity[];
}

interface BudgetPlan {
  totalCost: number;
  suggestedHotels: Hotel[];
  suggestedRestaurants: Restaurant[];
  suggestedActivities: Activity[];
  costBreakdown: {
    hotelCost: number;
    foodCost: number;
    buffer: number;
    perPerson: number;
    duration: number;
  };
}

// Define types for city and hotel type
type City = 'Chennai' | 'Madurai' | 'Kanyakumari' | 'Ooty' | 'Kodaikanal' | 'Thanjavur' | 'Kanchipuram' | 'Coimbatore' | 'Rameswaram' | 'Yelagiri';
type HotelType = 'Budget' | 'Standard' | 'Luxury';

const Recommendations: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<{ preferences: TravelPreferences; budgetPlan: BudgetPlan } | null>(null);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const state = location.state as { preferences: TravelPreferences } | null;
        
        if (!state?.preferences) {
          navigate('/preferences');
          return;
        }

        const { city } = state.preferences;
        let cityData: CityData = {
          hotels: [],
          restaurants: [],
          activities: []
        };

        try {
          switch (city.toLowerCase()) {
            case 'chennai':
              const chennai = await import('../data/chennaiData');
              cityData = {
                hotels: chennai.chennaiHotels || [],
                restaurants: chennai.chennaiRestaurants || [],
                activities: chennai.chennaiActivities || []
              };
              break;
            case 'madurai':
              const madurai = await import('../data/maduraiData');
              cityData = {
                hotels: madurai.maduraiHotels || [],
                restaurants: madurai.maduraiRestaurants || [],
                activities: madurai.maduraiActivities || []
              };
              break;
            case 'kanyakumari':
              const kanyakumari = await import('../data/kanyakumariData');
              cityData = {
                hotels: kanyakumari.kanyakumariHotels || [],
                restaurants: kanyakumari.kanyakumariRestaurants || [],
                activities: kanyakumari.kanyakumariActivities || []
              };
              break;
            case 'ooty':
              const ooty = await import('../data/ootyData');
              cityData = {
                hotels: ooty.ootyHotels || [],
                restaurants: ooty.ootyRestaurants || [],
                activities: ooty.ootyActivities || []
              };
              break;
            case 'kodaikanal':
              const kodaikanal = await import('../data/kodaikanalData');
              cityData = {
                hotels: kodaikanal.kodaikanalHotels || [],
                restaurants: kodaikanal.kodaikanalRestaurants || [],
                activities: kodaikanal.kodaikanalActivities || []
              };
              break;
            case 'thanjavur':
              const thanjavur = await import('../data/thanjavurData');
              cityData = {
                hotels: thanjavur.thanjavurHotels || [],
                restaurants: thanjavur.thanjavurRestaurants || [],
                activities: thanjavur.thanjavurActivities || []
              };
              break;
            case 'kanchipuram':
              const kanchipuram = await import('../data/kanchipuramData');
              cityData = {
                hotels: kanchipuram.kanchipuramHotels || [],
                restaurants: kanchipuram.kanchipuramRestaurants || [],
                activities: kanchipuram.kanchipuramActivities || []
              };
              break;
            case 'coimbatore':
              const coimbatore = await import('../data/coimbatoreData');
              cityData = {
                hotels: coimbatore.coimbatoreHotels || [],
                restaurants: coimbatore.coimbatoreRestaurants || [],
                activities: coimbatore.coimbatoreActivities || []
              };
              break;
            case 'rameswaram':
              const rameswaram = await import('../data/rameswaramData');
              cityData = {
                hotels: rameswaram.rameswaramHotels || [],
                restaurants: rameswaram.rameswaramRestaurants || [],
                activities: rameswaram.rameswaramActivities || []
              };
              break;
            case 'yelagiri':
              const yelagiri = await import('../data/yelagiriData');
              cityData = {
                hotels: yelagiri.yelagiriHotels || [],
                restaurants: yelagiri.yelagiriRestaurants || [],
                activities: yelagiri.yelagiriActivities || []
              };
              break;
            default:
              throw new Error('Invalid city selected');
          }
        } catch (importError) {
          console.error('Error importing city data:', importError);
          throw new Error('Failed to load city data');
        }

        if (!cityData || !cityData.hotels || !cityData.restaurants || !cityData.activities) {
          throw new Error('City data not found');
        }

        // Calculate hotel costs based on duration and budget type
        const dailyRates = {
          'Budget': {
            hotel: 1200,
            food: 600
          },
          'Standard': {
            hotel: 2500,
            food: 900
          },
          'Luxury': {
            hotel: 5000,
            food: 1500
          }
        };

        const cityMultipliers: Record<City, number> = {
          'Chennai': 1.2,
          'Madurai': 0.9,
          'Kanyakumari': 1.0,
          'Ooty': 1.3,
          'Kodaikanal': 1.3,
          'Thanjavur': 0.9,
          'Kanchipuram': 1.0,
          'Coimbatore': 1.1,
          'Rameswaram': 1.0,
          'Yelagiri': 1.2
        };

        const cityMultiplier = cityMultipliers[state.preferences.city as City] || 1.0;
        const rates = dailyRates[state.preferences.hotelType as keyof typeof dailyRates];

        // Calculate duration in days
        const duration = Math.ceil((state.preferences.endDate.getTime() - state.preferences.startDate.getTime()) / (1000 * 60 * 60 * 24));

        // Calculate base costs
        const hotelCostPerDay = rates.hotel * cityMultiplier;
        const foodCostPerPersonPerDay = rates.food * cityMultiplier;

        // Calculate total costs
        const totalHotelCost = Math.round(hotelCostPerDay * duration);
        const totalFoodCost = Math.round(foodCostPerPersonPerDay * duration * state.preferences.numPeople);
        const totalCost = totalHotelCost + totalFoodCost;
        const bufferAmount = Math.round(totalCost * 0.2);
        const totalCostWithBuffer = totalCost + bufferAmount;

        setData({
          preferences: state.preferences,
          budgetPlan: {
            totalCost: totalCostWithBuffer,
            suggestedHotels: cityData.hotels.map(hotel => ({
              ...hotel,
              src: hotel.src || '/images/default-hotel.jpg'
            })),
            suggestedRestaurants: cityData.restaurants.map(restaurant => ({
              ...restaurant,
              src: restaurant.src || '/images/default-restaurant.jpg'
            })),
            suggestedActivities: cityData.activities.map(activity => ({
              ...activity,
              src: activity.src || '/images/default-activity.jpg'
            })),
            costBreakdown: {
              hotelCost: totalHotelCost,
              foodCost: totalFoodCost,
              buffer: bufferAmount,
              perPerson: Math.round(totalCostWithBuffer / state.preferences.numPeople),
              duration: duration
            }
          }
        });
        setIsLoading(false);
      } catch (err) {
        console.error('Error in fetchCityData:', err);
        setError('Error loading city data. Please try again.');
        setIsLoading(false);
      }
    };

    fetchCityData();
  }, [location.state, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading recommendations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
          <button
            onClick={() => navigate('/preferences')}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Go Back to Preferences
          </button>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const { preferences, budgetPlan } = data;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateDuration = () => {
    const start = new Date(preferences.startDate);
    const end = new Date(preferences.endDate);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Your Travel Plan for {preferences.city}
        </h1>

        {/* City Description */}
        <CityDescription city={preferences.city} />

        {/* Recommended Hotels */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetPlan.suggestedHotels.map((hotel) => (
              <div key={hotel.id} className="border rounded-lg overflow-hidden">
                <img
                  src={hotel.src}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{hotel.name}</h3>
                  <p className="text-gray-600 mb-2">{hotel.location}</p>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-600">{hotel.rating}</span>
                  </div>
                  <p className="text-gray-600 mb-2">
                    {formatCurrency(hotel.priceRange.min)} - {formatCurrency(hotel.priceRange.max)} per night
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Type: {hotel.type}</p>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                      {hotel.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">{hotel.whyChoose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Restaurants */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetPlan.suggestedRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="border rounded-lg overflow-hidden">
                <img
                  src={restaurant.src}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{restaurant.name}</h3>
                  <p className="text-gray-600 mb-2">{restaurant.location}</p>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-600">{restaurant.rating}</span>
                  </div>
                  <p className="text-gray-600 mb-2">
                    Cost for two: {formatCurrency(restaurant.costForTwo)}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Cuisine: {restaurant.cuisine}</p>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                      {restaurant.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">
                      Timings: {restaurant.timings}
                    </p>
                    <p className="text-sm text-gray-600">
                      Contact: {restaurant.contact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Activities */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetPlan.suggestedActivities.map((activity) => (
              <div key={activity.id} className="border rounded-lg overflow-hidden">
                <img
                  src={activity.src}
                  alt={activity.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.name}</h3>
                  <p className="text-gray-600 mb-2">{activity.location}</p>
                  <div className="space-y-2">
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                      {activity.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="mt-2">
                      <p className="text-sm font-medium text-gray-700">Ideal for:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {activity.idealFor.map((type, index) => (
                          <span
                            key={index}
                            className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium text-gray-700">Nearby Hotels:</p>
                      <p className="text-sm text-gray-600 mt-1">
                        {activity.nearbyHotels.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Budget Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">Total Cost (with 20% buffer)</p>
              <p className="font-semibold text-xl">{formatCurrency(budgetPlan.totalCost)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">Per Person Cost</p>
              <p className="font-semibold text-xl">{formatCurrency(budgetPlan.costBreakdown.perPerson)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">Hotel Cost ({budgetPlan.costBreakdown.duration} days)</p>
              <p className="font-semibold text-xl">{formatCurrency(budgetPlan.costBreakdown.hotelCost)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">Food Cost ({budgetPlan.costBreakdown.duration} days)</p>
              <p className="font-semibold text-xl">{formatCurrency(budgetPlan.costBreakdown.foodCost)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">Buffer Amount</p>
              <p className="font-semibold text-xl">{formatCurrency(budgetPlan.costBreakdown.buffer)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">Duration</p>
              <p className="font-semibold text-xl">{budgetPlan.costBreakdown.duration} days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;