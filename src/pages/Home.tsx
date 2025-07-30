import React, { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const lastNavigationTime = useRef(0);

  const handleNavigation = useCallback((path: string) => {
    const now = Date.now();
    if (now - lastNavigationTime.current < 100) {
      return;
    }
    lastNavigationTime.current = now;
    navigate(path);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/images/kanyakumari.jpg"
            alt="Tamil Nadu Tourism"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6 text-center">
            Discover Tamil Nadu
          </h1>
          <p className="text-xl text-white mb-8 text-center max-w-3xl">
            Experience the rich culture, heritage, and natural beauty of Tamil Nadu with our AI-powered travel companion
          </p>
          <div className="space-x-4">
            <button
              onClick={() => handleNavigation('/preferences')}
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors text-lg"
            >
              Get Started
            </button>
            <button
              onClick={() => handleNavigation('/preferences')}
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg"
            >
              Plan Your Trip
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Our Platform?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold mb-2">Cultural Heritage</h3>
              <p className="text-gray-600">
                Explore ancient temples, historical monuments, and traditional arts
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🌴</div>
              <h3 className="text-xl font-semibold mb-2">Natural Beauty</h3>
              <p className="text-gray-600">
                Discover pristine beaches, hill stations, and wildlife sanctuaries
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-2">Culinary Delights</h3>
              <p className="text-gray-600">
                Savor authentic Tamil cuisine and local delicacies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Tamil Nadu Journey
          </h2>
          <p className="text-xl text-white mb-8">
            Get personalized recommendations for hotels, restaurants, and activities based on your preferences
          </p>
          <button
            onClick={() => handleNavigation('/preferences')}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg"
          >
            Begin Your Adventure
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;