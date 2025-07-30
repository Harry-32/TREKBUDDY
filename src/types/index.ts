export interface City {
  id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
}

export interface TouristSpot {
  id: string;
  city_id: string;
  name: string;
  description: string;
  image_url: string;
  category: string;
  best_time_to_visit: string;
  entry_fee: number;
  created_at: string;
}

export interface Hotel {
  id: string;
  city_id: string;
  name: string;
  description: string;
  image_url: string;
  price_per_night: number;
  rating: number;
  amenities: string[];
  created_at: string;
}

export interface Restaurant {
  id: string;
  city_id: string;
  name: string;
  description: string;
  image_url: string;
  cuisine_type: string[];
  price_per_person: number;
  rating: number;
  created_at: string;
}

export interface Activity {
  id: string;
  city_id: string;
  name: string;
  description: string;
  image_url: string;
  duration: string;
  price_per_person: number;
  suitable_for: string[];
  created_at: string;
}

export interface UserPreferences {
  selectedCity: string;
  hotelBudget: number;
  restaurantBudget: number;
  cuisineType: string[];
  travelCompanions: string;
}