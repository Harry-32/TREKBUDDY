import { Hotel, Restaurant, Activity } from './chennaiData';

export const ootyHotels: Hotel[] = [
  {
    id: '1',
    name: 'Hotel Maneck',
    location: 'Near Ooty Lake',
    priceRange: { min: 3000, max: 4000 },
    rating: 4.5,
    type: 'Standard',
    highlights: [
      'Lake view',
      'Restaurant',
      'Free WiFi'
    ],
    whyChoose: 'Perfect location with easy access to major attractions.',
    src: '/public/images/hotel-maneck.jpg'
  },
  {
    id: '2',
    name: 'Vinayaga Inn by Poppys',
    location: 'Ettines Road, Ooty',
    priceRange: { min: 1000, max: 1500 },
    rating: 4.4,
    type: 'Standard',
    highlights: [
      'Proximity to Ooty Lake',
      'Near Rose Garden',
      'Multi-cuisine restaurant'
    ],
    whyChoose: 'Great location with good amenities and food options.',
    src: '/public/images/vinayaga-inn.jpg'
  },
  {
    id: '3',
    name: 'The Hosteller Ooty',
    location: 'Fern Hill, Ooty',
    priceRange: { min: 800, max: 1200 },
    rating: 4.5,
    type: 'Budget',
    highlights: [
      'Dormitory and private rooms',
      'Common lounge',
      'Organized local tours'
    ],
    whyChoose: 'Perfect for backpackers and budget travelers.',
    src: '/public/images/hosteller-ooty.jpg'
  },
  {
    id: '4',
    name: 'Willow Hill by Nature Resorts',
    location: 'Near Ooty Lake',
    priceRange: { min: 1200, max: 1800 },
    rating: 4.6,
    type: 'Standard',
    highlights: [
      'Scenic views',
      'Colonial-style architecture',
      'Garden area'
    ],
    whyChoose: 'Beautiful property with great views and ambiance.',
    src: '/public/images/willow-hill.jpg'
  },
  {
    id: '5',
    name: 'White Legacy Ooty',
    location: 'Coonoor Road, Ooty',
    priceRange: { min: 1000, max: 1400 },
    rating: 4.2,
    type: 'Standard',
    highlights: [
      'Close to Bus Stand',
      'Near shopping areas',
      'Travel assistance'
    ],
    whyChoose: 'Convenient location with good connectivity.',
    src: '/public/images/white-legacy.jpg'
  },
  {
    id: '6',
    name: 'Karpagam Residency',
    location: 'Upper Bazaar, Ooty',
    priceRange: { min: 800, max: 1100 },
    rating: 4.0,
    type: 'Budget',
    highlights: [
      'Budget-friendly',
      'Near local markets',
      'Clean rooms'
    ],
    whyChoose: 'Affordable stay in a central location.',
    src: '/public/images/karpagam-residency.jpg'
  }
];

export const ootyRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Ooty Coffee House',
    location: 'Near Ooty Lake',
    cuisine: 'South Indian',
    rating: 4.3,
    costForTwo: 400,
    highlights: [
      'Fresh coffee',
      'Traditional food',
      'Lake view'
    ],
    timings: '7:00 AM – 9:00 PM',
    contact: '+91 423 2345678',
    src: '/public/images/ooty-coffee-house.jpg',
    isVegetarian: true
  },
  {
    id: '2',
    name: 'Shinkows Chinese Restaurant',
    cuisine: 'Chinese',
    rating: 4.3,
    costForTwo: 800,
    location: 'Commercial Road',
    highlights: [
      'Chinese delicacies',
      'Established eatery',
      'Authentic flavors'
    ],
    timings: '11:00 AM – 10:00 PM',
    contact: '+91 423 2345679',
    src: '/public/images/shinkows.jpg',
    isVegetarian: false
  },
  {
    id: '3',
    name: 'Hyderabad Biryani House',
    cuisine: 'North Indian',
    rating: 4.5,
    costForTwo: 500,
    location: 'Near Bus Stand',
    highlights: [
      'Flavorful biryanis',
      'Kebabs',
      'Spicy dishes'
    ],
    timings: '11:00 AM – 11:00 PM',
    contact: '+91 423 2345680',
    src: '/public/images/hyderabad-biryani.jpg',
    isVegetarian: false
  },
  {
    id: '4',
    name: 'Junior Kuppanna',
    cuisine: 'South Indian',
    rating: 4.4,
    costForTwo: 300,
    location: 'Commercial Road',
    highlights: [
      'Mutton dishes',
      'Traditional meals',
      'Local specialties'
    ],
    timings: '11:00 AM – 10:00 PM',
    contact: '+91 423 2345681',
    src: '/public/images/junior-kuppanna.jpg',
    isVegetarian: false
  },
  {
    id: '5',
    name: 'Willy\'s Coffee Pub',
    cuisine: 'Cafe',
    rating: 4.6,
    costForTwo: 200,
    location: 'Near Lake',
    highlights: [
      'Cozy ambiance',
      'Quick bites',
      'Great coffee'
    ],
    timings: '8:00 AM – 9:00 PM',
    contact: '+91 423 2345682',
    src: '/public/images/willys-coffee.jpg',
    isVegetarian: false
  },
  {
    id: '6',
    name: 'Adyar Ananda Bhavan (A2B)',
    cuisine: 'South Indian',
    rating: 4.3,
    costForTwo: 400,
    location: 'Commercial Road',
    highlights: [
      'Wide variety of dishes',
      'Clean environment',
      'Vegetarian options'
    ],
    timings: '7:00 AM – 10:00 PM',
    contact: '+91 423 2345683',
    src: '/public/images/a2b.jpg',
    isVegetarian: true
  }
];

export const ootyActivities: Activity[] = [
  {
    id: '1',
    name: 'Botanical Gardens',
    location: 'Ooty',
    highlights: [
      'Flower show',
      'Nature walk',
      'Scenic views'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Maneck', 'Vinayaga Inn'],
    src: '/public/images/botanical-gardens.jpg'
  },
  {
    id: '2',
    name: 'Ooty Lake Boating',
    location: 'Near Willow Hill',
    highlights: [
      'Paddle boating',
      'Scenic surroundings',
      'Water activities'
    ],
    idealFor: ['Families', 'Couples', 'Groups'],
    nearbyHotels: ['Willow Hill', 'The Hosteller Ooty'],
    src: '/public/images/ooty-lake.jpg'
  },
  {
    id: '3',
    name: 'Doddabetta Peak',
    location: 'Accessible from White Legacy',
    highlights: [
      'Highest point in Nilgiris',
      'Panoramic views',
      'Nature trails'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['White Legacy Ooty'],
    src: '/public/images/doddabetta.jpg'
  },
  {
    id: '4',
    name: 'Rose Garden',
    location: 'Near Karpagam Residency',
    highlights: [
      '20,000 varieties of roses',
      'Beautiful gardens',
      'Photography spots'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Karpagam Residency'],
    src: '/public/images/rose-garden.jpg'
  },
  {
    id: '5',
    name: 'Nilgiri Mountain Railway',
    location: 'Near Hotel Maneck',
    highlights: [
      'UNESCO World Heritage',
      'Toy train ride',
      'Picturesque landscapes'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Maneck', 'Vinayaga Inn'],
    src: '/public/images/mountain-railway.jpg'
  },
  {
    id: '6',
    name: 'St. Stephen\'s Church',
    location: 'Near Karpagam Residency',
    highlights: [
      'Gothic architecture',
      'Historical significance',
      'Peaceful atmosphere'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Karpagam Residency'],
    src: '/public/images/st-stephens.jpg'
  }
]; 