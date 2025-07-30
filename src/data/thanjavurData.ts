import { Hotel, Restaurant, Activity } from './chennaiData';

export const thanjavurHotels: Hotel[] = [
  {
    id: '1',
    name: 'Hotel Gnanam',
    location: 'Near Brihadeeswarar Temple',
    priceRange: { min: 2500, max: 3500 },
    rating: 4.4,
    type: 'Standard',
    highlights: [
      'Temple view',
      'Restaurant',
      'Free WiFi'
    ],
    whyChoose: 'Great location near the famous temple.',
    src: '/public/images/hotel-gnanam.jpeg'
  },
  {
    id: '2',
    name: 'Hotel Victoriyah',
    location: 'Close to Thanjavur Junction',
    priceRange: { min: 1200, max: 1500 },
    rating: 4.2,
    type: 'Budget',
    highlights: [
      'Easy access to transportation',
      'Air-conditioned rooms',
      'Free parking'
    ],
    whyChoose: 'Convenient location with good amenities.',
    src: '/public/images/hotel-victoriyah.jpg'
  },
  {
    id: '3',
    name: 'Hotel Parisutham',
    location: 'Near Thanjavur Palace',
    priceRange: { min: 1800, max: 2200 },
    rating: 4.5,
    type: 'Standard',
    highlights: [
      'Heritage-style architecture',
      'Swimming pool',
      'Fitness center'
    ],
    whyChoose: 'Luxurious stay with heritage charm.',
    src: '/public/images/hotel-parisutham.jpg'
  },
  {
    id: '4',
    name: 'Hotel TamilNadu',
    location: 'Central Thanjavur',
    priceRange: { min: 1000, max: 1300 },
    rating: 4.0,
    type: 'Budget',
    highlights: [
      'Government-operated',
      'On-site dining',
      'Tour assistance'
    ],
    whyChoose: 'Affordable stay with reliable service.',
    src: '/public/images/hotel-tamilnadu.jpg'
  },
  {
    id: '5',
    name: 'TANJORE HOME STAY',
    location: 'Near Saraswathi Mahal Library',
    priceRange: { min: 900, max: 1200 },
    rating: 4.4,
    type: 'Budget',
    highlights: [
      'Homely atmosphere',
      'Free Wi-Fi',
      'Breakfast included'
    ],
    whyChoose: 'Authentic local experience.',
    src: '/public/images/tanjore-homestay.jpeg'
  },
  {
    id: '6',
    name: 'Hotel Sumi Palace',
    location: 'Close to Thanjavur Bus Stand',
    priceRange: { min: 1100, max: 1400 },
    rating: 4.1,
    type: 'Budget',
    highlights: [
      'Near public transportation',
      'Air-conditioned rooms',
      'Room service'
    ],
    whyChoose: 'Convenient location for travelers.',
    src: '/public/images/hotel-sumi.jpeg'
  }
];

export const thanjavurRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Sree Ariya',
    location: 'Near Brihadeeswarar Temple',
    cuisine: 'South Indian',
    rating: 4.3,
    costForTwo: 300,
    highlights: [
      'Traditional food',
      'Vegetarian',
      'Temple view'
    ],
    timings: '7:00 AM – 10:00 PM',
    contact: '+91 4362 234567',
    src: '/public/images/sree-ariya.jpg',
    isVegetarian: true
  },
  {
    id: '2',
    name: 'Dhanyam',
    cuisine: 'Indian',
    rating: 4.5,
    costForTwo: 500,
    location: 'Near Palace',
    highlights: [
      'Hygienic food',
      'Barbecue dishes',
      'Flavorful cuisine'
    ],
    timings: '11:00 AM – 11:00 PM',
    contact: '+91 4362 234568',
    src: '/public/images/dhanyam.jpg',
    isVegetarian: false
  },
  {
    id: '3',
    name: 'Sathars',
    cuisine: 'Multi-cuisine',
    rating: 4.3,
    costForTwo: 600,
    location: 'Central Thanjavur',
    highlights: [
      'Variety of dishes',
      'Modern ambiance',
      'Good service'
    ],
    timings: '11:00 AM – 10:00 PM',
    contact: '+91 4362 234569',
    src: '/public/images/sathars.jpg',
    isVegetarian: false
  },
  {
    id: '4',
    name: 'Hotel Vasantha Bhavan',
    cuisine: 'South Indian',
    rating: 4.2,
    costForTwo: 250,
    location: 'Near Bus Stand',
    highlights: [
      'Quick service',
      'Traditional meals',
      'Vegetarian options'
    ],
    timings: '6:00 AM – 9:00 PM',
    contact: '+91 4362 234570',
    src: '/public/images/vasantha-bhavan.jpg',
    isVegetarian: true
  },
  {
    id: '5',
    name: 'Chellammal\'s Manpaanai Samayal',
    cuisine: 'Indian',
    rating: 4.6,
    costForTwo: 400,
    location: 'Near Library',
    highlights: [
      'Home-style cooking',
      'Local flavors',
      'Traditional dishes'
    ],
    timings: '11:00 AM – 10:00 PM',
    contact: '+91 4362 234571',
    src: '/public/images/chellammal.jpg',
    isVegetarian: false
  },
  {
    id: '6',
    name: 'Hotel New Thevars',
    cuisine: 'Indian',
    rating: 4.4,
    costForTwo: 500,
    location: 'Near Temple',
    highlights: [
      'Biryani',
      'Non-vegetarian dishes',
      'Local specialties'
    ],
    timings: '11:00 AM – 11:00 PM',
    contact: '+91 4362 234572',
    src: '/public/images/new-thevars.jpg',
    isVegetarian: false
  }
];

export const thanjavurActivities: Activity[] = [
  {
    id: '1',
    name: 'Brihadeeswarar Temple',
    location: 'Thanjavur',
    highlights: [
      'Ancient temple',
      'Architecture',
      'Spiritual experience'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Gnanam', 'Hotel Parisutham'],
    src: '/public/images/brihadeeswarar-temple.jpg'
  },
  {
    id: '2',
    name: 'Thanjavur Royal Palace and Art Gallery',
    location: 'Near Hotel Victoriyah',
    highlights: [
      'Historical artifacts',
      'Paintings collection',
      'Royal architecture'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Victoriyah', 'TANJORE HOME STAY'],
    src: '/public/images/royal-palace.jpg'
  },
  {
    id: '3',
    name: 'Saraswathi Mahal Library',
    location: 'Near TANJORE HOME STAY',
    highlights: [
      'Ancient manuscripts',
      'Historical significance',
      'Educational value'
    ],
    idealFor: ['Families', 'Solo travelers', 'Groups'],
    nearbyHotels: ['TANJORE HOME STAY'],
    src: '/public/images/saraswathi-mahal.jpg'
  },
  {
    id: '4',
    name: 'Rajarajan Mani Mandapam',
    location: 'Near Hotel TamilNadu',
    highlights: [
      'Historical memorial',
      'Chola architecture',
      'Cultural significance'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel TamilNadu'],
    src: '/public/images/rajarajan-mandapam.jpeg'
  },
  {
    id: '5',
    name: 'Schwartz Church',
    location: 'Near Hotel Sumi Palace',
    highlights: [
      '18th-century architecture',
      'Historical significance',
      'Peaceful atmosphere'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Sumi Palace'],
    src: '/public/images/schwartz-church.jpeg'
  },
  {
    id: '6',
    name: 'Vijayanagar Fort',
    location: 'Near Hotel Parisutham',
    highlights: [
      'Historical fort',
      'Ancient architecture',
      'Cultural heritage'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Parisutham'],
    src: '/public/images/vijayanagar-fort.jpeg'
  }
]; 