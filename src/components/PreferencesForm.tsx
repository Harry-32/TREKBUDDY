import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateBudget, TravelPreferences } from '../data/chennaiData';

const PreferencesForm: React.FC = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState<TravelPreferences>({
    startDate: new Date(),
    endDate: new Date(),
    numPeople: 1,
    isVegetarian: false,
    hotelType: 'Standard',
    travelCompanions: 'Family',
    maxBudget: 25000,
    city: 'Chennai'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const budgetPlan = calculateBudget(preferences);
    navigate('/recommendations', { state: { preferences, budgetPlan } });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Travel Preferences</h2>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
          <div className="space-y-6">
            {/* City Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Select City</label>
              <select
                value={preferences.city}
                onChange={(e) => setPreferences({ ...preferences, city: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
              </select>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  value={preferences.startDate.toISOString().split('T')[0]}
                  onChange={(e) => setPreferences({ ...preferences, startDate: new Date(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  value={preferences.endDate.toISOString().split('T')[0]}
                  onChange={(e) => setPreferences({ ...preferences, endDate: new Date(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* People and Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Number of People</label>
                <input
                  type="number"
                  min="1"
                  value={preferences.numPeople}
                  onChange={(e) => setPreferences({ ...preferences, numPeople: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Maximum Budget (₹)</label>
                <input
                  type="number"
                  min="1000"
                  value={preferences.maxBudget}
                  onChange={(e) => setPreferences({ ...preferences, maxBudget: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Preferences */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Vegetarian Preference</label>
                <div className="mt-2 flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={preferences.isVegetarian}
                      onChange={() => setPreferences({ ...preferences, isVegetarian: true })}
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2">Vegetarian</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={!preferences.isVegetarian}
                      onChange={() => setPreferences({ ...preferences, isVegetarian: false })}
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2">Non-Vegetarian</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Hotel Type Preference</label>
                <div className="mt-2 flex space-x-4">
                  {['Luxury', 'Standard', 'Budget'].map((type) => (
                    <label key={type} className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={preferences.hotelType === type}
                        onChange={() => setPreferences({ ...preferences, hotelType: type as 'Luxury' | 'Standard' | 'Budget' })}
                        className="form-radio text-blue-600"
                      />
                      <span className="ml-2">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Travel Companions</label>
                <div className="mt-2 flex space-x-4">
                  {['Family', 'Couple', 'Solo', 'Friends'].map((type) => (
                    <label key={type} className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={preferences.travelCompanions === type}
                        onChange={() => setPreferences({ ...preferences, travelCompanions: type as 'Family' | 'Couple' | 'Solo' | 'Friends' })}
                        className="form-radio text-blue-600"
                      />
                      <span className="ml-2">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get Recommendations
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PreferencesForm; 