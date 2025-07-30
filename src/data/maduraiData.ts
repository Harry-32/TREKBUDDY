import { Hotel, Restaurant, Activity } from './chennaiData';

export const maduraiHotels: Hotel[] = [
  {
    id: '1',
    name: 'Hotel Supreme',
    location: 'Near Meenakshi Temple',
    priceRange: { min: 2500, max: 3500 },
    rating: 4.6,
    type: 'Standard',
    highlights: [
      'Temple view',
      'Restaurant',
      'Free WiFi'
    ],
    whyChoose: 'Perfect location near Meenakshi Temple with great views and amenities.',
    src: '/public/images/hotel-supreme.jpg'
  },
  {
    id: '2',
    name: 'Hotel Padmam',
    location: 'West Perumal Maistry Street',
    priceRange: { min: 1200, max: 1800 },
    rating: 4.3,
    type: 'Budget',
    highlights: [
      'Clean rooms',
      'Friendly staff',
      'Walking distance to Meenakshi Temple'
    ],
    whyChoose: 'Great value for money with excellent location.',
    src: '/public/images/hotel-padmam.jpg'
  },
  {
    id: '3',
    name: 'Hotel North Gate',
    location: 'Near Mattuthavani Bus Stand',
    priceRange: { min: 1800, max: 2200 },
    rating: 4.4,
    type: 'Standard',
    highlights: [
      'Spacious rooms',
      'In-house restaurant',
      'Easy access to transportation hubs'
    ],
    whyChoose: 'Convenient location near bus stand with good amenities.',
    src: '/public/images/hotel-north-gate.jpeg'
  },
  {
    id: '4',
    name: 'Hotel Rajadhane',
    location: 'KK Nagar',
    priceRange: { min: 1500, max: 2000 },
    rating: 4.2,
    type: 'Standard',
    highlights: [
      'Modern amenities',
      'Complimentary breakfast',
      'Close to shopping areas'
    ],
    whyChoose: 'Modern hotel with good facilities in a prime location.',
    src: '/public/images/hotel-rajadhane.jpg'
  },
  {
    id: '5',
    name: 'Hotel Prem Nivas',
    location: 'Town Hall Road',
    priceRange: { min: 1000, max: 1500 },
    rating: 4.0,
    type: 'Budget',
    highlights: [
      'Budget-friendly',
      'Basic amenities',
      'Central location'
    ],
    whyChoose: 'Affordable option in the heart of the city.',
    src: '/public/images/hotel-prem-nivas.jpg'
  },
  {
    id: '6',
    name: 'Hotel Park Plaza',
    location: 'Near Railway Station',
    priceRange: { min: 1800, max: 2300 },
    rating: 4.3,
    type: 'Standard',
    highlights: [
      'Comfortable rooms',
      'Restaurant',
      'Convenient for transit travelers'
    ],
    whyChoose: 'Ideal for travelers arriving by train.',
    src: '/public/images/hotel-park-plaza.jpg'
  }
];

export const maduraiRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Amsavalli Bhavan',
    location: 'Near Meenakshi Temple',
    cuisine: 'South Indian',
    rating: 4.4,
    costForTwo: 300,
    highlights: [
      'Traditional food',
      'Vegetarian',
      'Temple view'
    ],
    timings: '7:00 AM – 11:00 PM',
    contact: '+91 452 2345678',
    src: '/public/images/amsavalli-bhavan.jpeg',
    isVegetarian: false
  },
  {
    id: '2',
    name: 'Modern Restaurant',
    cuisine: 'South Indian',
    rating: 4.3,
    costForTwo: 250,
    location: 'Nethaji Road',
    highlights: [
      'Traditional South Indian breakfast',
      'Famous for idly, dosa, and pongal',
      'Quick service'
    ],
    timings: '6:00 AM – 10:00 PM',
    contact: '+91 452 2345679',
    src: '/public/images/modern-restauran.jpg',
    isVegetarian: true
  },
  {
    id: '3',
    name: 'Phil\'s Bistro',
    cuisine: 'Continental',
    rating: 4.4,
    costForTwo: 500,
    location: 'KK Nagar',
    highlights: [
      'Continental cuisine',
      'Cozy ambiance',
      'Great desserts'
    ],
    timings: '12:00 PM – 10:30 PM',
    contact: '+91 452 2345680',
    src: '/public/images/phils-bistro.jpeg',
    isVegetarian: false
  },
  {
    id: '4',
    name: 'Bell Jumbo Restaurant',
    cuisine: 'Multi-cuisine',
    rating: 4.2,
    costForTwo: 400,
    location: 'Sammatipuram',
    highlights: [
      'Multi-cuisine offerings',
      'Spacious seating',
      'Family-friendly'
    ],
    timings: '8:00 AM – 11:30 PM',
    contact: '+91 452 2345681',
    src: '/public/images/bell-jumbo.jpg',
    isVegetarian: false
  },
  {
    id: '5',
    name: 'Dindigul Velu Biryani',
    cuisine: 'South Indian',
    rating: 4.6,
    costForTwo: 300,
    location: 'Ellis Nagar',
    highlights: [
      'Famous Dindigul-style biryani',
      'Authentic taste',
      'Quick service'
    ],
    timings: '11:00 AM – 11:00 PM',
    contact: '+91 452 2345682',
    src: '/public/images/dindigul-velu.jpg',
    isVegetarian: false
  },
  {
    id: '6',
    name: 'Anjappar Chettinad Restaurant',
    cuisine: 'Chettinad',
    rating: 4.4,
    costForTwo: 400,
    location: 'Opposite Mattuthavani Bus Stand',
    highlights: [
      'Chettinad cuisine',
      'Spicy dishes',
      'Authentic flavors'
    ],
    timings: '11:00 AM – 11:30 PM',
    contact: '+91 452 2345683',
    src: '/public/images/anjappar.jpg',
    isVegetarian: false
  }
];

export const maduraiActivities: Activity[] = [
  {
    id: '1',
    name: 'Meenakshi Temple',
    location: 'Madurai',
    highlights: [
      'Ancient temple',
      'Architecture',
      'Spiritual experience'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Supreme', 'Hotel Padmam'],
    src: '/public/images/meenakshi-temple.jpg'
  },
  {
    id: '2',
    name: 'Explore Gandhi Memorial Museum',
    location: 'Near Hotel North Gate',
    highlights: [
      'Learn about Mahatma Gandhi\'s life',
      'India\'s freedom struggle history',
      'Educational experience'
    ],
    idealFor: ['Families', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel North Gate'],
    src: '/public/images/gandhi-memorial.jpg'
  },
  {
    id: '3',
    name: 'Relax at Vandiyur Mariamman Teppakulam',
    location: 'Near Hotel Rajadhane',
    highlights: [
      'Serene temple tank',
      'Beautiful during festivals',
      'Peaceful atmosphere'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers'],
    nearbyHotels: ['Hotel Rajadhane'],
    src: '/public/images/teppakulam.jpeg'
  },
  {
    id: '4',
    name: 'Shop at Vishaal de Mal',
    location: 'Near Hotel North Gate',
    highlights: [
      'Madurai\'s largest mall',
      'Shopping, dining, and entertainment',
      'Modern facilities'
    ],
    idealFor: ['Families', 'Couples', 'Groups'],
    nearbyHotels: ['Hotel North Gate'],
    src: '/public/images/vishaal-mall.jpeg'
  },
  {
    id: '5',
    name: 'Visit Thirumalai Nayakkar Palace',
    location: 'Near Hotel Prem Nivas',
    highlights: [
      '17th-century palace',
      'Indo-Saracenic architecture',
      'Historical significance'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Prem Nivas'],
    src: '/public/images/nayakkar-palace.jpeg'
  },
  {
    id: '6',
    name: 'Enjoy at Athisayam Amusement Park',
    location: '12 km from city center',
    highlights: [
      'Fun-filled amusement rides',
      'Water rides',
      'Suitable for all ages'
    ],
    idealFor: ['Families', 'Groups'],
    nearbyHotels: ['Hotel Park Plaza'],
    src: '/public/images/athisayam-park.jpg'
  }
]; 