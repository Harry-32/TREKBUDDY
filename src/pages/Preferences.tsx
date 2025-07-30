import React, { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hotel, Restaurant, Activity, TravelPreferences } from '../data/chennaiData';

interface PreferenceState {
  city: string;
  budget: string;
  numPeople: number;
  startDate: string;
  endDate: string;
  foodPreference: 'vegetarian' | 'non-vegetarian' | '';
  travelCompanions: string[];
}

const cities = [
  'Chennai',
  'Madurai',
  'Kanyakumari',
  'Ooty',
  'Kodaikanal',
  'Thanjavur',
  'Kanchipuram',
  'Coimbatore',
  'Rameshwaram',
  'Yelagiri'
];

const travelTypes = ['Family', 'Solo', 'Couple', 'Friends'];

const Preferences: React.FC = () => {
  const navigate = useNavigate();
  const lastNavigationTime = useRef(0);
  const [preferences, setPreferences] = useState<PreferenceState>({
    city: '',
    budget: '',
    numPeople: 1,
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    foodPreference: '',
    travelCompanions: []
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  }, []);

  const handleTravelTypeToggle = useCallback((type: string) => {
    setPreferences(prev => ({
      ...prev,
      travelCompanions: prev.travelCompanions.includes(type)
        ? prev.travelCompanions.filter(t => t !== type)
        : [...prev.travelCompanions, type]
    }));
  }, []);

  const handleNavigation = useCallback((path: string) => {
    const now = Date.now();
    if (now - lastNavigationTime.current < 100) {
      return;
    }
    lastNavigationTime.current = now;
    navigate(path);
  }, [navigate]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!preferences.city || !preferences.budget || !preferences.startDate || !preferences.endDate || !preferences.foodPreference) {
      alert('Please fill in all required fields');
      return;
    }

    // Convert preferences to TravelPreferences format
    const travelPreferences: TravelPreferences = {
      city: preferences.city,
      startDate: new Date(preferences.startDate),
      endDate: new Date(preferences.endDate),
      numPeople: preferences.numPeople,
      isVegetarian: preferences.foodPreference === 'vegetarian',
      hotelType: preferences.budget as 'Luxury' | 'Standard' | 'Budget',
      travelCompanions: preferences.travelCompanions[0] as 'Family' | 'Solo' | 'Couple' | 'Friends',
      maxBudget: preferences.budget === 'budget' ? 10000 : 
                preferences.budget === 'mid-range' ? 25000 : 50000
    };

    // Save preferences to localStorage
    localStorage.setItem('preferences', JSON.stringify(travelPreferences));

    // Navigate to recommendations with state
    navigate('/recommendations', { 
      state: { 
        preferences: travelPreferences,
        budgetPlan: {
          totalCost: 0,
          suggestedHotels: [],
          suggestedRestaurants: [],
          suggestedActivities: [],
          costBreakdown: {
            hotelCost: 0,
            foodCost: 0,
            buffer: 0,
            perPerson: 0,
            duration: 0
          }
        }
      }
    });
  }, [preferences, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Travel Preferences</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* City Selection */}
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
              City
            </label>
            <select
              id="city"
              name="city"
              value={preferences.city}
              onChange={(e) => setPreferences({ ...preferences, city: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a city</option>
              <option value="Chennai">Chennai</option>
              <option value="Madurai">Madurai</option>
              <option value="Kanyakumari">Kanyakumari</option>
              <option value="Ooty">Ooty</option>
              <option value="Kodaikanal">Kodaikanal</option>
              <option value="Thanjavur">Thanjavur</option>
              <option value="Kanchipuram">Kanchipuram</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Rameswaram">Rameswaram</option>
              <option value="Yelagiri">Yelagiri</option>
            </select>
          </div>

          {/* Budget Selection */}
          <div className="mb-4">
            <label htmlFor="budget" className="block text-gray-700 text-sm font-bold mb-2">
              Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={preferences.budget}
              onChange={(e) => setPreferences({ ...preferences, budget: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="Budget">Budget</option>
              <option value="Standard">Standard</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>

          {/* Number of People */}
          <div className="mb-4">
            <label htmlFor="numPeople" className="block text-gray-700 text-sm font-bold mb-2">
              Number of People
            </label>
            <input
              type="number"
              id="numPeople"
              name="numPeople"
              min="1"
              value={preferences.numPeople}
              onChange={(e) => setPreferences({ ...preferences, numPeople: parseInt(e.target.value) })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Dates */}
          <div className="mb-4">
            <label htmlFor="startDate" className="block text-gray-700 text-sm font-bold mb-2">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={preferences.startDate}
              onChange={(e) => setPreferences({ ...preferences, startDate: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="endDate" className="block text-gray-700 text-sm font-bold mb-2">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={preferences.endDate}
              onChange={(e) => setPreferences({ ...preferences, endDate: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Food Preference */}
          <div className="mb-4">
            <fieldset>
              <legend className="block text-gray-700 text-sm font-bold mb-2">Food Preference</legend>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="vegetarian"
                  name="foodPreference"
                  value="vegetarian"
                  checked={preferences.foodPreference === 'vegetarian'}
                  onChange={(e) => setPreferences({ ...preferences, foodPreference: e.target.value as 'vegetarian' | 'non-vegetarian' | '' })}
                  className="mr-2"
                />
                <label htmlFor="vegetarian">Vegetarian</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="nonVegetarian"
                  name="foodPreference"
                  value="non-vegetarian"
                  checked={preferences.foodPreference === 'non-vegetarian'}
                  onChange={(e) => setPreferences({ ...preferences, foodPreference: e.target.value as 'vegetarian' | 'non-vegetarian' | '' })}
                  className="mr-2"
                />
                <label htmlFor="nonVegetarian">Non-Vegetarian</label>
              </div>
            </fieldset>
          </div>

          {/* Travel Companions */}
          <div className="mb-4">
            <fieldset>
              <legend className="block text-gray-700 text-sm font-bold mb-2">Travel Companions</legend>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="family"
                    name="travelCompanions"
                    value="family"
                    checked={preferences.travelCompanions.includes('family')}
                    onChange={(e) => {
                      const companions = e.target.checked
                        ? [...preferences.travelCompanions, 'family']
                        : preferences.travelCompanions.filter(c => c !== 'family');
                      setPreferences({ ...preferences, travelCompanions: companions });
                    }}
                    className="mr-2"
                  />
                  <label htmlFor="family">Family</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="solo"
                    name="travelCompanions"
                    value="solo"
                    checked={preferences.travelCompanions.includes('solo')}
                    onChange={(e) => {
                      const companions = e.target.checked
                        ? [...preferences.travelCompanions, 'solo']
                        : preferences.travelCompanions.filter(c => c !== 'solo');
                      setPreferences({ ...preferences, travelCompanions: companions });
                    }}
                    className="mr-2"
                  />
                  <label htmlFor="solo">Solo</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="couple"
                    name="travelCompanions"
                    value="couple"
                    checked={preferences.travelCompanions.includes('couple')}
                    onChange={(e) => {
                      const companions = e.target.checked
                        ? [...preferences.travelCompanions, 'couple']
                        : preferences.travelCompanions.filter(c => c !== 'couple');
                      setPreferences({ ...preferences, travelCompanions: companions });
                    }}
                    className="mr-2"
                  />
                  <label htmlFor="couple">Couple</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="friends"
                    name="travelCompanions"
                    value="friends"
                    checked={preferences.travelCompanions.includes('friends')}
                    onChange={(e) => {
                      const companions = e.target.checked
                        ? [...preferences.travelCompanions, 'friends']
                        : preferences.travelCompanions.filter(c => c !== 'friends');
                      setPreferences({ ...preferences, travelCompanions: companions });
                    }}
                    className="mr-2"
                  />
                  <label htmlFor="friends">Friends</label>
                </div>
              </div>
            </fieldset>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Get Recommendations
          </button>
        </form>
      </div>
    </div>
  );
};

export default Preferences;