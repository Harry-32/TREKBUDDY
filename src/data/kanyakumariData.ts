import { Hotel, Restaurant, Activity } from './chennaiData';

export const kanyakumariHotels: Hotel[] = [
  {
    id: '1',
    name: 'Hotel Temple Citi',
    location: 'Near Kanyakumari Temple',
    priceRange: { min: 2500, max: 3500 },
    rating: 4.5,
    type: 'Standard',
    highlights: [
      'Sea view rooms',
      'Restaurant',
      'Free WiFi'
    ],
    whyChoose: 'Perfect location with stunning sea views and easy access to attractions.',
    src: '/public/images/temple-citi.jpeg'
  },
  {
    id: '2',
    name: 'Hotel Sun World',
    location: 'Near the beach',
    priceRange: { min: 1200, max: 1800 },
    rating: 4.3,
    type: 'Budget',
    highlights: [
      'Cozy rooms',
      'Modern amenities',
      'Beach proximity'
    ],
    whyChoose: 'Great value for money with beach access.',
    src: '/public/images/sun-world.jpg'
  },
  {
    id: '3',
    name: 'Blue Home Stay',
    location: 'Near local attractions',
    priceRange: { min: 1000, max: 1500 },
    rating: 4.5,
    type: 'Budget',
    highlights: [
      'Recently renovated',
      'Garden area',
      'Peaceful environment'
    ],
    whyChoose: 'Homely atmosphere with modern comforts.',
    src: '/public/images/blue-homestay.jpeg'
  },
  {
    id: '4',
    name: 'Hotel SeaView',
    location: 'Near the beach',
    priceRange: { min: 1800, max: 2200 },
    rating: 3.1,
    type: 'Standard',
    highlights: [
      'Sea view rooms',
      'Close to landmarks',
      'Comfortable stay'
    ],
    whyChoose: 'Stunning sea views and convenient location.',
    src: '/public/images/seaview.jpg'
  },
  {
    id: '5',
    name: 'Sri Gowshiga Bhavan',
    location: 'Central location',
    priceRange: { min: 1500, max: 2000 },
    rating: 4.6,
    type: 'Standard',
    highlights: [
      'Free Wi-Fi',
      'Private parking',
      'Central location'
    ],
    whyChoose: 'Modern amenities in a central location.',
    src: '/public/images/gowshiga-bhavan.jpg'
  },
  {
    id: '6',
    name: 'Hotel Saravana',
    location: 'Near Kumari Amman Temple',
    priceRange: { min: 1300, max: 1800 },
    rating: 4.2,
    type: 'Budget',
    highlights: [
      'Temple proximity',
      'Basic amenities',
      'Affordable rates'
    ],
    whyChoose: 'Great location near the temple at affordable rates.',
    src: '/public/images/saravana-hotel.jpg'
  }
];

export const kanyakumariRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Temple Citi Restaurant',
    location: 'Near Kanyakumari Temple',
    cuisine: 'South Indian',
    rating: 4.3,
    costForTwo: 400,
    highlights: [
      'Sea view dining',
      'Fresh seafood',
      'Vegetarian options'
    ],
    timings: '7:00 AM – 10:00 PM',
    contact: '+91 4652 234567',
    src: '/public/images/temple-citi-restaurant.jpg',
    isVegetarian: false
  },
  {
    id: '2',
    name: 'Sangam Restaurant',
    cuisine: 'South Indian',
    rating: 4.3,
    costForTwo: 300,
    location: 'Near Kumari Amman Temple',
    highlights: [
      'Traditional South Indian cuisine',
      'Vegetarian options',
      'Quick service'
    ],
    timings: '6:00 AM – 10:00 PM',
    contact: '+91 4652 234568',
    src: '/public/images/sangam.jpeg',
    isVegetarian: true
  },
  {
    id: '3',
    name: 'Seafood Paradise',
    cuisine: 'Seafood',
    rating: 4.5,
    costForTwo: 500,
    location: 'Beach Road',
    highlights: [
      'Fresh seafood',
      'Beach view',
      'Local specialties'
    ],
    timings: '11:00 AM – 10:00 PM',
    contact: '+91 4652 234569',
    src: '/public/images/seafood-paradise.jpg',
    isVegetarian: false
  },
  {
    id: '4',
    name: 'Kanyakumari Cafe',
    cuisine: 'Multi-cuisine',
    rating: 4.2,
    costForTwo: 350,
    location: 'Near Gandhi Memorial',
    highlights: [
      'Local and continental cuisine',
      'Coffee shop',
      'Snacks and meals'
    ],
    timings: '8:00 AM – 9:00 PM',
    contact: '+91 4652 234570',
    src: '/public/images/kanyakumari-cafe.jpg',
    isVegetarian: false
  },
  {
    id: '5',
    name: 'Temple View Restaurant',
    cuisine: 'South Indian',
    rating: 4.4,
    costForTwo: 300,
    location: 'Near Kumari Amman Temple',
    highlights: [
      'Temple view dining',
      'Traditional cuisine',
      'Vegetarian options'
    ],
    timings: '7:00 AM – 9:00 PM',
    contact: '+91 4652 234571',
    src: '/public/images/temple-view.jpg',
    isVegetarian: true
  },
  {
    id: '6',
    name: 'Sunset Cafe',
    cuisine: 'Multi-cuisine',
    rating: 4.6,
    costForTwo: 450,
    location: 'Beach Road',
    highlights: [
      'Sunset views',
      'International cuisine',
      'Romantic ambiance'
    ],
    timings: '12:00 PM – 10:00 PM',
    contact: '+91 4652 234572',
    src: '/public/images/sunset-cafe.jpeg',
    isVegetarian: false
  }
];

export const kanyakumariActivities: Activity[] = [
  {
    id: '1',
    name: 'Vivekananda Rock Memorial',
    location: 'Kanyakumari',
    highlights: [
      'Historic monument',
      'Panoramic sea views',
      'Ferry ride experience'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Temple Citi', 'Hotel SeaView'],
    src: '/public/images/vivekananda-rock.jpg'
  },
  {
    id: '2',
    name: 'Explore Thiruvalluvar Statue',
    location: 'Adjacent to Vivekananda Rock Memorial',
    highlights: [
      '133-foot-tall statue',
      'Tamil poet and philosopher',
      'Architectural marvel'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Sun World', 'Blue Home Stay'],
    src: '/public/images/thiruvalluvar-statue.jpg'
  },
  {
    id: '3',
    name: 'Relax at Kanyakumari Beach',
    location: 'Walking distance from hotels',
    highlights: [
      'Sunrise and sunset views',
      'Confluence of three seas',
      'Beach activities'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Temple Citi', 'Hotel SeaView'],
    src: '/public/images/kanyakumari-beach.jpg'
  },
  {
    id: '4',
    name: 'Visit Kumari Amman Temple',
    location: 'Near Hotel Saravana',
    highlights: [
      'Ancient temple',
      'Spiritual significance',
      'Architectural beauty'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Saravana', 'Sangam Restaurant'],
    src: '/public/images/kumari-amman-temple.jpeg'
  },
  {
    id: '5',
    name: 'Explore Gandhi Memorial',
    location: 'Near Hotel Sun World',
    highlights: [
      'Historical significance',
      'Architectural design',
      'Peaceful atmosphere'
    ],
    idealFor: ['Families', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Sun World', 'Blue Home Stay'],
    src: '/public/images/gandhi-memorial.jpg'
  },
  {
    id: '6',
    name: 'Visit Our Lady of Ransom Church',
    location: 'Near Hotel SeaView',
    highlights: [
      'Gothic architecture',
      'Serene ambiance',
      'Historical significance'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel SeaView', 'Hotel Temple Citi'],
    src: '/public/images/ransom-church.jpg'
  }
]; 