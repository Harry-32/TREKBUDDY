import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc, query, where, DocumentData } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// TODO: Replace these values with your actual Firebase project credentials
// 1. Go to Firebase Console (https://console.firebase.google.com/)
// 2. Select your project
// 3. Click on the gear icon (⚙️) next to "Project Overview"
// 4. Under "General" tab, scroll to "Your apps" section
// 5. Find your web app or create a new one
// 6. Copy the configuration object and replace the values below
const firebaseConfig = {
  apiKey: "AIzaSyDczuXWWfHj2uYhiSmT8EIHdHMhXDCh_tI",
  authDomain: "trekbuddy-323647.firebaseapp.com",
  projectId: "trekbuddy-323647",
  storageBucket: "trekbuddy-323647.appspot.com",
  messagingSenderId: "206609094271",
  appId: "1:206609094271:web:08fcaea5f2d8c47538114a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);
// Uncomment the following line if you want to use the Auth emulator during development
// connectAuthEmulator(auth, "http://localhost:9099");

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

export { auth, db, storage };

// Collections
export const collections = {
  hotels: 'hotels',
  restaurants: 'restaurants',
  activities: 'activities',
  touristSpots: 'touristSpots',
  cities: 'cities',
  users: 'users'
};

// Hotel Functions
export const getHotels = async (cityId: string) => {
  const q = query(collection(db, collections.hotels), where('city_id', '==', cityId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getHotelById = async (id: string) => {
  const docRef = doc(db, collections.hotels, id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

// Restaurant Functions
export const getRestaurants = async (cityId: string) => {
  const q = query(collection(db, collections.restaurants), where('city_id', '==', cityId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getRestaurantById = async (id: string) => {
  const docRef = doc(db, collections.restaurants, id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

// Activity Functions
export const getActivities = async (cityId: string) => {
  const q = query(collection(db, collections.activities), where('city_id', '==', cityId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getActivityById = async (id: string) => {
  const docRef = doc(db, collections.activities, id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

// Tourist Spot Functions
export const getTouristSpots = async (cityId: string) => {
  const q = query(collection(db, collections.touristSpots), where('city_id', '==', cityId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getTouristSpotById = async (id: string) => {
  const docRef = doc(db, collections.touristSpots, id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

// City Functions
export const getCities = async () => {
  const snapshot = await getDocs(collection(db, collections.cities));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getCityById = async (id: string) => {
  const docRef = doc(db, collections.cities, id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

// Image Upload Function
export const uploadImage = async (file: File, path: string) => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};

// User Functions
export const getUserById = async (id: string) => {
  const docRef = doc(db, collections.users, id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export const updateUser = async (id: string, data: Partial<DocumentData>) => {
  const docRef = doc(db, collections.users, id);
  await updateDoc(docRef, data);
};

export const createUser = async (data: DocumentData) => {
  const docRef = await addDoc(collection(db, collections.users), data);
  return docRef.id;
};

export const deleteUser = async (id: string) => {
  const docRef = doc(db, collections.users, id);
  await deleteDoc(docRef);
}; 