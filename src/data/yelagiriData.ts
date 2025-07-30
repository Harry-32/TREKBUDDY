import { Hotel, Restaurant, Activity } from './chennaiData';

export const yelagiriHotels: Hotel[] = [
  {
    id: '1',
    name: 'Hotel Hills',
    location: 'Near Yelagiri Lake',
    priceRange: { min: 2000, max: 3000 },
    rating: 4.2,
    type: 'Standard',
    highlights: [
      'Lake view',
      'Restaurant',
      'Free WiFi'
    ],
    whyChoose: 'Great location near the lake.',
    src: '/public/images/hotel-hills.jpg'
  },
  {
    id: '2',
    name: 'Hotel Kumararraja Palace',
    location: 'Kottaiyur',
    priceRange: { min: 1500, max: 1800 },
    rating: 4.4,
    type: 'Standard',
    highlights: [
      'Spacious rooms',
      'Swimming pool',
      'Garden area'
    ],
    whyChoose: 'Luxurious stay with good facilities.',
    src: '/public/images/kumararraja.jpg'
  },
  {
    id: '3',
    name: 'Rhythms Lake View Resort',
    location: 'Opposite Yelagiri Lake',
    priceRange: { min: 1800, max: 2200 },
    rating: 4.5,
    type: 'Standard',
    highlights: [
      'Lake-facing rooms',
      'Serene views',
      'Calm ambiance'
    ],
    whyChoose: 'Beautiful lake views and peaceful stay.',
    src: '/public/images/rhythms-lake.jpg'
  },
  {
    id: '4',
    name: 'Hotel Landmark',
    location: 'Near Boat House Road',
    priceRange: { min: 2000, max: 2500 },
    rating: 4.3,
    type: 'Standard',
    highlights: [
      'Swimming pool',
      'Indoor games',
      'Well-maintained rooms'
    ],
    whyChoose: 'Good facilities with entertainment options.',
    src: '/public/images/hotel-landmark.jpg'
  },
  {
    id: '5',
    name: 'Peter\'s Park Resort',
    location: 'Manjankollaipudur',
    priceRange: { min: 2200, max: 2800 },
    rating: 4.6,
    type: 'Standard',
    highlights: [
      'Garden cottages',
      'Peaceful environment',
      'Beautiful views'
    ],
    whyChoose: 'Unique stay in nature surroundings.',
    src: '/public/images/peters-park.jpg'
  },
  {
    id: '6',
    name: 'Hotel Aruvi',
    location: 'Near Nilavoor Road',
    priceRange: { min: 1000, max: 1300 },
    rating: 4.1,
    type: 'Budget',
    highlights: [
      'Basic accommodations',
      'Friendly staff',
      'Good location'
    ],
    whyChoose: 'Affordable stay with good service.',
    src: '/public/images/hotel-aruvi.jpeg'
  }
];

export const yelagiriRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Nilgress',
    location: 'Near Yelagiri Lake',
    cuisine: 'South Indian',
    rating: 4.1,
    costForTwo: 300,
    highlights: [
      'Traditional food',
      'Vegetarian',
      'Lake view'
    ],
    timings: '7:00 AM – 10:00 PM',
    contact: '+91 4173 234567',
    src: '/public/images/nilgress.jpeg',
    isVegetarian: true
  },
  {
    id: '2',
    name: 'Hotel Landmark Restaurant',
    cuisine: 'Multi-cuisine',
    rating: 4.4,
    costForTwo: 500,
    location: 'Hotel Landmark',
    highlights: [
      'Chinese cuisine',
      'Indian specialties',
      'Variety of dishes'
    ],
    timings: '11:00 AM – 10:00 PM',
    contact: '+91 4173 234568',
    src: '/public/images/landmark-restauran.jpg',
    isVegetarian: false
  },
  {
    id: '3',
    name: 'Peter\'s Park Restaurant',
    cuisine: 'Multi-cuisine',
    rating: 4.5,
    costForTwo: 400,
    location: 'Peter\'s Park Resort',
    highlights: [
      'Home-style cooking',
      'Cozy setting',
      'Continental dishes'
    ],
    timings: '8:00 AM – 9:00 PM',
    contact: '+91 4173 234569',
    src: '/public/images/peters-park-restaurant.jpg',
    isVegetarian: false
  },
  {
    id: '4',
    name: 'Hotel Hills Restaurant',
    cuisine: 'South Indian',
    rating: 4.2,
    costForTwo: 250,
    location: 'Hotel Hills',
    highlights: [
      'Traditional breakfast',
      'South Indian meals',
      'Quick service'
    ],
    timings: '7:00 AM – 9:00 PM',
    contact: '+91 4173 234570',
    src: '/public/images/hills-restaurant.jpg',
    isVegetarian: true
  },
  {
    id: '5',
    name: 'Rhythms Lake View Restaurant',
    cuisine: 'Multi-cuisine',
    rating: 4.6,
    costForTwo: 450,
    location: 'Rhythms Lake View Resort',
    highlights: [
      'Lake view dining',
      'Variety of dishes',
      'Good ambiance'
    ],
    timings: '7:00 AM – 10:00 PM',
    contact: '+91 4173 234571',
    src: '/public/images/rhythms-restaurant.jpg',
    isVegetarian: false
  },
  {
    id: '6',
    name: 'Hotel Aruvi Restaurant',
    cuisine: 'South Indian',
    rating: 4.1,
    costForTwo: 200,
    location: 'Hotel Aruvi',
    highlights: [
      'Simple meals',
      'Vegetarian options',
      'Budget-friendly'
    ],
    timings: '7:00 AM – 9:00 PM',
    contact: '+91 4173 234572',
    src: '/public/images/aruvi-restaurant.jpg',
    isVegetarian: true
  }
];

export const yelagiriActivities: Activity[] = [
  {
    id: '1',
    name: 'Nature Park',
    location: 'Yelagiri',
    highlights: [
      'Nature walk',
      'Scenic views',
      'Peaceful environment'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Hills', 'Rhythms Lake View Resort'],
    src: '/public/images/nature-park.jpeg'
  },
  {
    id: '2',
    name: 'Yelagiri Lake (Punganoor Lake)',
    location: 'Near Rhythms Lake View Resort',
    highlights: [
      'Boating facilities',
      'Serene environment',
      'Relaxation spot'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Rhythms Lake View Resort', 'Hotel Landmark'],
    src: '/public/images/yelagiri-lake.jpg'
  },
  {
    id: '3',
    name: 'Cloud Forest Entertainment Park',
    location: 'Near Hotel Kumararraja Palace',
    highlights: [
      'Various activities',
      'Entertainment options',
      'Family fun'
    ],
    idealFor: ['Families', 'Couples', 'Groups'],
    nearbyHotels: ['Hotel Kumararraja Palace'],
    src: '/public/images/cloud-forest.jpg'
  },
  {
    id: '4',
    name: 'Swamimalai Hills',
    location: 'Near Peter\'s Park Resort',
    highlights: [
      'Trekking spot',
      'Panoramic views',
      'Nature trails'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Peter\'s Park Resort'],
    src: '/public/images/swamimalai.jpg'
  },
  {
    id: '5',
    name: 'Nature Walks and Bird Watching',
    location: 'Near Hotel Aruvi',
    highlights: [
      'Natural trails',
      'Bird watching',
      'Serene environment'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Aruvi', 'Hotel Hills'],
    src: '/public/images/nature-walks.jpg'
  },
  {
    id: '6',
    name: 'Local Handicraft Shopping',
    location: 'Near Hotel Landmark',
    highlights: [
      'Local handicrafts',
      'Souvenirs',
      'Artisan products'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Landmark', 'Hotel Aruvi'],
    src: '/public/images/handicraft-shopping.jpeg'
  }
]; 