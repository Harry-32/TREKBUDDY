export interface UserPreferences {
  destination: string;
  budget: number;
  accommodation_type: string;
  cuisine_preference: string;
  activity_type: string;
  travel_type: string;
  travel_companions?: string[];
  city: string;
  start_date: string;
  end_date: string;
  number_of_people: number;
  hotel_preferences: {
    type: string[];
    amenities: string[];
  };
  meal_preferences: string[];
  activities: Activity[];
  duration: number;
}

export interface Hotel {
  id: string;
  name: string;
  city_id: string;
  city: string;
  price_per_night: number;
  rating: number;
  type: string;
  suitable_for: string[];
  amenities: string[];
  location: string;
  src: string;
  description?: string;
  solo_friendly: boolean;
  family_friendly: boolean;
  couple_friendly: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  city_id: string;
  city: string;
  rating: number;
  cuisine: string;
  suitable_for: string[];
  location: string;
  src: string;
  description: string;
  specialties: string[];
  timings: string;
  nearby_hotels: string[];
  avg_cost_per_person: number;
  price_per_person?: number;
  solo_friendly: boolean;
  family_friendly: boolean;
  couple_friendly: boolean;
}

export interface Activity {
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

export interface CostBreakdown {
  hotel_cost: number;
  food_cost: number;
  total_cost: number;
  price_per_person: number;
  budget_utilization: number;
  is_within_budget: boolean;
  details: {
    rooms_needed: number;
    people_per_room: number;
    meals_per_day: number;
    meal_cost_per_person: number;
    total_meals: number;
    total_activities: number;
    duration: number;
    number_of_people: number;
  };
}

export interface Recommendation {
  hotels: Hotel[];
  restaurants: Restaurant[];
  activities: Activity[];
  cost_breakdown: CostBreakdown;
}

export interface City {
  id: string;
  name: string;
  name_ta: string;
  description: string;
  description_ta: string;
} 