import { db } from './firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

// Collection names
export const COLLECTIONS = {
  HOTELS: 'hotels',
  RESTAURANTS: 'restaurants',
  ACTIVITIES: 'activities'
};

// Helper functions for database operations
export const addHotel = async (hotel: any) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.HOTELS), hotel);
    return docRef.id;
  } catch (error) {
    console.error('Error adding hotel:', error);
    throw error;
  }
};

export const addRestaurant = async (restaurant: any) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.RESTAURANTS), restaurant);
    return docRef.id;
  } catch (error) {
    console.error('Error adding restaurant:', error);
    throw error;
  }
};

export const addActivity = async (activity: any) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.ACTIVITIES), activity);
    return docRef.id;
  } catch (error) {
    console.error('Error adding activity:', error);
    throw error;
  }
};

export const getHotelsByCity = async (city: string) => {
  try {
    const q = query(collection(db, COLLECTIONS.HOTELS), where('city', '==', city));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting hotels:', error);
    throw error;
  }
};

export const getRestaurantsByCity = async (city: string) => {
  try {
    const q = query(collection(db, COLLECTIONS.RESTAURANTS), where('city', '==', city));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting restaurants:', error);
    throw error;
  }
};

export const getActivitiesByCity = async (city: string) => {
  try {
    const q = query(collection(db, COLLECTIONS.ACTIVITIES), where('city', '==', city));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting activities:', error);
    throw error;
  }
}; 