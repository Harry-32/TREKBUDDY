import { hotels } from '../data/hotels';
import { restaurants } from '../data/restaurants';

export class RecommendationEngine {
  private preferences: any;

  constructor(preferences: any) {
    this.preferences = preferences;
    console.log('Initialized with preferences:', preferences);
  }

  private async getHotels(): Promise<any[]> {
    const city = this.preferences.city || this.preferences.destination;
    return hotels
      .filter(hotel => hotel.cityName?.toLowerCase() === city.toLowerCase())
      .sort((a, b) => (b.hotelRating || 0) - (a.hotelRating || 0))
      .slice(0, 5);
  }

  private async getRestaurants(): Promise<any[]> {
    const city = this.preferences.city || this.preferences.destination;
    return restaurants
      .filter(restaurant => restaurant.cityName?.toLowerCase() === city.toLowerCase())
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, 5);
  }

  private async getActivities(): Promise<any[]> {
    // Placeholder: return empty array or implement if you have activities data
    return [];
  }

  public async getRecommendations(): Promise<any> {
    const [hotels, restaurants, activities] = await Promise.all([
      this.getHotels(),
      this.getRestaurants(),
      this.getActivities()
    ]);
    return {
      hotels,
      restaurants,
      activities,
      cost_breakdown: {} // You can implement budget calculation as needed
    };
  }
} 