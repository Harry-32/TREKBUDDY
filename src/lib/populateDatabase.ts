import { addHotel, addRestaurant, addActivity } from './database';
import { hotels, restaurants, activities } from './sampleData';

export const populateDatabase = async () => {
  try {
    // Add hotels
    for (const hotel of hotels) {
      await addHotel(hotel);
      console.log(`Added hotel: ${hotel.name}`);
    }

    // Add restaurants
    for (const restaurant of restaurants) {
      await addRestaurant(restaurant);
      console.log(`Added restaurant: ${restaurant.name}`);
    }

    // Add activities
    for (const activity of activities) {
      await addActivity(activity);
      console.log(`Added activity: ${activity.name}`);
    }

    console.log('Database population completed successfully!');
  } catch (error) {
    console.error('Error populating database:', error);
  }
}; 