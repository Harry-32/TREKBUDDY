import { Hotel, Restaurant, Activity } from './chennaiData';

export const rameswaramHotels: Hotel[] = [
  {
    id: '1',
    name: 'Hotel Ambika',
    location: 'Near Ramanathaswamy Temple',
    priceRange: { min: 2000, max: 3000 },
    rating: 4.3,
    type: 'Standard',
    highlights: [
      'Temple view',
      'Restaurant',
      'Free WiFi'
    ],
    whyChoose: 'Perfect location near the temple.',
    src: '/public/images/hotel-ambika.jpg'
  },
  {
    id: '2',
    name: 'Hotel Hare Rama Hare Krishna',
    location: 'Ramar Padham Road',
    priceRange: { min: 400, max: 600 },
    rating: 4.0,
    type: 'Budget',
    highlights: [
      'Budget-friendly',
      'Clean rooms',
      'Basic amenities'
    ],
    whyChoose: 'Affordable stay with essential facilities.',
    src: '/public/images/hare-rama.jpg'
  },
  {
    id: '3',
    name: 'Samys Inn Lodge',
    location: 'Rameshwaram',
    priceRange: { min: 350, max: 500 },
    rating: 4.1,
    type: 'Budget',
    highlights: [
      'Well-furnished rooms',
      'Quality service',
      'Basic amenities'
    ],
    whyChoose: 'Good value for money.',
    src: '/public/images/samys-inn.jpeg'
  },
  {
    id: '4',
    name: 'Hotel Harish',
    location: 'Rameshwaram',
    priceRange: { min: 1200, max: 1500 },
    rating: 4.2,
    type: 'Standard',
    highlights: [
      'Clean rooms',
      'Temple proximity',
      'Good service'
    ],
    whyChoose: 'Comfortable stay near the temple.',
    src: '/public/images/hotel-harish.jpg'
  },
  {
    id: '5',
    name: 'Hotel Ashoka',
    location: 'Near Ramanatha Swamy Temple',
    priceRange: { min: 3200, max: 4000 },
    rating: 4.5,
    type: 'Standard',
    highlights: [
      'Restaurant',
      'Free parking',
      'Temple view'
    ],
    whyChoose: 'Premium stay with good facilities.',
    src: '/public/images/hotel-ashoka.jpg'
  },
  {
    id: '6',
    name: 'Hotel Temple Towers',
    location: 'Rameshwaram',
    priceRange: { min: 1500, max: 1800 },
    rating: 4.3,
    type: 'Standard',
    highlights: [
      'Comfortable rooms',
      'Essential amenities',
      'Good location'
    ],
    whyChoose: 'Balanced stay with good facilities.',
    src: '/public/images/temple-towers.jpg'
  }
];

export const rameswaramRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Sri Murugan',
    location: 'Near Ramanathaswamy Temple',
    cuisine: 'South Indian',
    rating: 4.2,
    costForTwo: 300,
    highlights: [
      'Traditional food',
      'Vegetarian',
      'Temple view'
    ],
    timings: '7:00 AM – 10:00 PM',
    contact: '+91 4573 234567',
    src: '/public/images/sri-murugan.jpeg',
    isVegetarian: true
  },
  {
    id: '2',
    name: 'Mr. Fish',
    cuisine: 'Seafood',
    rating: 4.5,
    costForTwo: 400,
    location: 'Near Beach',
    highlights: [
      'Fresh seafood',
      'Local specialties',
      'Beach view'
    ],
    timings: '11:00 AM – 10:00 PM',
    contact: '+91 4573 234568',
    src: '/public/images/mr-fish.jpg',
    isVegetarian: false
  },
  {
    id: '3',
    name: 'Gujarat Bhavan',
    cuisine: 'North Indian',
    rating: 4.3,
    costForTwo: 350,
    location: 'Near Temple',
    highlights: [
      'Vegetarian meals',
      'North Indian flavors',
      'Clean environment'
    ],
    timings: '11:00 AM – 10:00 PM',
    contact: '+91 4573 234569',
    src: '/public/images/gujarat-bhavan.jpg',
    isVegetarian: true
  },
  {
    id: '4',
    name: 'Ahaan Restaurant',
    cuisine: 'Multi-cuisine',
    rating: 4.6,
    costForTwo: 500,
    location: 'Daiwik Hotels',
    highlights: [
      'Buffet options',
      'Vegetarian dishes',
      'Continental cuisine'
    ],
    timings: '7:00 AM – 10:00 PM',
    contact: '+91 4573 234570',
    src: '/public/images/ahaan.jpeg',
    isVegetarian: true
  },
  {
    id: '5',
    name: 'Cafe',
    cuisine: 'Indian',
    rating: 4.2,
    costForTwo: 300,
    location: 'Near Temple',
    highlights: [
      'Great lunch options',
      'Reasonable prices',
      'Quick service'
    ],
    timings: '8:00 AM – 9:00 PM',
    contact: '+91 4573 234571',
    src: '/public/images/cafe.jpg',
    isVegetarian: false
  },
  {
    id: '6',
    name: 'Hotel Guru',
    cuisine: 'South Indian',
    rating: 4.4,
    costForTwo: 250,
    location: 'Near Temple',
    highlights: [
      'Traditional meals',
      'Clean environment',
      'Budget-friendly'
    ],
    timings: '7:00 AM – 9:00 PM',
    contact: '+91 4573 234572',
    src: '/public/images/hotel-guru.jpg',
    isVegetarian: true
  }
];

export const rameswaramActivities: Activity[] = [
  {
    id: '1',
    name: 'Ramanathaswamy Temple',
    location: 'Rameswaram',
    highlights: [
      'Ancient temple',
      'Architecture',
      'Spiritual experience'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Ambika', 'Hotel Ashoka'],
    src: '/public/images/ramanatha-temple.jpeg'
  },
  {
    id: '2',
    name: 'Agni Theertham',
    location: 'Near Hotel Hare Rama',
    highlights: [
      'Sacred bathing spot',
      'Beach location',
      'Spiritual significance'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Hare Rama Hare Krishna'],
    src: '/public/images/agni-theertham.jpg'
  },
  {
    id: '3',
    name: 'Dhanushkodi Beach Point',
    location: 'Near Hotel Harish',
    highlights: [
      'Serene beach',
      'Panoramic views',
      'Historical significance'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Harish', 'Hotel Temple Towers'],
    src: '/public/images/dhanushkodi.jpg'
  },
  {
    id: '4',
    name: 'Adam\'s Bridge (Rama Setu)',
    location: 'Near Samys Inn Lodge',
    highlights: [
      'Limestone shoals',
      'Historical significance',
      'Natural wonder'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Samys Inn Lodge'],
    src: '/public/images/rama-setu.jpg'
  },
  {
    id: '5',
    name: 'Villoondi Theertham',
    location: 'Near Hotel Temple Towers',
    highlights: [
      'Freshwater spring',
      'Sacred spot',
      'Natural wonder'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Temple Towers'],
    src: '/public/images/villoondi.jpg'
  },
  {
    id: '6',
    name: 'APJ Abdul Kalam Memorial',
    location: 'Near Hotel Ashoka',
    highlights: [
      'Historical significance',
      'Educational value',
      'Modern architecture'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Ashoka'],
    src: '/public/images/kalam-memorial.jpeg'
  }
]; 