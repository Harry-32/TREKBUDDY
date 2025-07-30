import { cities, touristSpots, hotels, restaurants, activities } from '../data/mockData';
import { db, collections } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

async function migrateData() {
  try {
    // Migrate Cities
    console.log('Migrating cities...');
    for (const city of cities) {
      await addDoc(collection(db, collections.cities), city);
    }

    // Migrate Tourist Spots
    console.log('Migrating tourist spots...');
    for (const spot of touristSpots) {
      await addDoc(collection(db, collections.touristSpots), spot);
    }

    // Migrate Hotels
    console.log('Migrating hotels...');
    for (const hotel of hotels) {
      await addDoc(collection(db, collections.hotels), hotel);
    }

    // Migrate Restaurants
    console.log('Migrating restaurants...');
    for (const restaurant of restaurants) {
      await addDoc(collection(db, collections.restaurants), restaurant);
    }

    // Migrate Activities
    console.log('Migrating activities...');
    for (const activity of activities) {
      await addDoc(collection(db, collections.activities), activity);
    }

    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Error during migration:', error);
  }
}

// Run the migration
migrateData(); 