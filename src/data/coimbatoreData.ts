import { Hotel, Restaurant, Activity } from './chennaiData';

export const coimbatoreHotels: Hotel[] = [
  {
    id: '1',
    name: 'Hotel CAG Pride',
    location: 'Gandhipuram',
    priceRange: { min: 2500, max: 3000 },
    rating: 4.3,
    type: 'Standard',
    highlights: [
      'Proximity to major attractions',
      'Free Wi-Fi',
      'Restaurant'
    ],
    whyChoose: 'Great location with modern amenities.',
    src: '/public/images/hotel-cag.jpg'
  },
  {
    id: '2',
    name: 'Hotel Heritage Inn',
    location: 'Gandhipuram',
    priceRange: { min: 2000, max: 2400 },
    rating: 4.2,
    type: 'Standard',
    highlights: [
      'Easy access to transportation',
      'Air-conditioned rooms',
      'Free parking'
    ],
    whyChoose: 'Convenient location with good amenities.',
    src: '/public/images/hotel-heritage.jpg'
  },
  {
    id: '3',
    name: 'Hotel Vijay Park Inn',
    location: 'Gopalapuram',
    priceRange: { min: 1800, max: 2200 },
    rating: 4.4,
    type: 'Budget',
    highlights: [
      'Clean rooms',
      'Friendly service',
      '24-hour front desk'
    ],
    whyChoose: 'Comfortable stay with good service.',
    src: '/public/images/hotel-vijay.jpeg'
  },
  {
    id: '4',
    name: 'Hotel Alankar Grande',
    location: 'Gandhipuram',
    priceRange: { min: 2200, max: 2600 },
    rating: 4.5,
    type: 'Standard',
    highlights: [
      'Reputed group',
      'On-site dining',
      'Tour assistance'
    ],
    whyChoose: 'Quality service with good facilities.',
    src: '/public/images/hotel-alankar.jpg'
  },
  {
    id: '5',
    name: 'Hotel SBS Grand',
    location: 'Peelamedu',
    priceRange: { min: 1500, max: 1800 },
    rating: 4.1,
    type: 'Budget',
    highlights: [
      'Homely atmosphere',
      'Free Wi-Fi',
      'Breakfast included'
    ],
    whyChoose: 'Affordable stay with good service.',
    src: '/public/images/hotel-sbs.jpg'
  },
  {
    id: '6',
    name: 'Hotel Mangala International',
    location: 'Gandhipuram',
    priceRange: { min: 1200, max: 1500 },
    rating: 4.0,
    type: 'Budget',
    highlights: [
      'Near public transportation',
      'Air-conditioned rooms',
      'Room service'
    ],
    whyChoose: 'Convenient location for travelers.',
    src: '/public/images/hotel-mangala.jpg'
  }
];

export const coimbatoreRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Sree Annapoorna Sree Gowrishankar',
    cuisine: 'South Indian',
    rating: 4.4,
    costForTwo: 300,
    location: 'Gandhipuram',
    highlights: [
      'Authentic dosas',
      'Idlis',
      'Traditional meals'
    ],
    timings: '7:00 AM – 10:00 PM',
    contact: '+91 422 234567',
    src: '/public/images/annapoorna.jpg',
    isVegetarian: true
  },
  {
    id: '2',
    name: 'Haribhavanam',
    cuisine: 'South Indian',
    rating: 4.5,
    costForTwo: 500,
    location: 'RS Puram',
    highlights: [
      'Chettinad cuisine',
      'Hygienic food',
      'Traditional dishes'
    ],
    timings: '11:00 AM – 11:00 PM',
    contact: '+91 422 234568',
    src: '/public/images/haribhavanam.jpg',
    isVegetarian: false
  },
  {
    id: '3',
    name: 'Junior Kuppanna',
    cuisine: 'South Indian',
    rating: 4.3,
    costForTwo: 600,
    location: 'Gandhipuram',
    highlights: [
      'Non-vegetarian dishes',
      'Traditional meals',
      'Good service'
    ],
    timings: '11:00 AM – 10:00 PM',
    contact: '+91 422 234569',
    src: '/public/images/junior-kuppanna.jpg',
    isVegetarian: false
  },
  {
    id: '4',
    name: 'Annapoorna Gowrishankar',
    cuisine: 'South Indian',
    rating: 4.2,
    costForTwo: 250,
    location: 'Peelamedu',
    highlights: [
      'Quick service',
      'Traditional meals',
      'Vegetarian options'
    ],
    timings: '6:00 AM – 9:00 PM',
    contact: '+91 422 234570',
    src: '/public/images/annapoorna-gowrishankar.jpeg',
    isVegetarian: true
  },
  {
    id: '5',
    name: 'Kovai Kitchen',
    cuisine: 'South Indian',
    rating: 4.6,
    costForTwo: 400,
    location: 'RS Puram',
    highlights: [
      'Home-style cooking',
      'Local flavors',
      'Traditional dishes'
    ],
    timings: '11:00 AM – 10:00 PM',
    contact: '+91 422 234571',
    src: '/public/images/kovai-kitchen.jpg',
    isVegetarian: false
  },
  {
    id: '6',
    name: 'Sree Subbu Mess',
    cuisine: 'South Indian',
    rating: 4.4,
    costForTwo: 200,
    location: 'Gandhipuram',
    highlights: [
      'Traditional meals',
      'Friendly service',
      'Budget-friendly'
    ],
    timings: '7:00 AM – 9:00 PM',
    contact: '+91 422 234572',
    src: '/public/images/sree-subbu.jpg',
    isVegetarian: true
  }
];

export const coimbatoreActivities: Activity[] = [
  {
    id: '1',
    name: 'Gass Forest Museum',
    location: 'Near Hotel CAG Pride',
    highlights: [
      'Natural history museum',
      'Forest biodiversity',
      'Educational value'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel CAG Pride', 'Hotel Heritage Inn'],
    src: '/public/images/gass-museum.jpg'
  },
  {
    id: '2',
    name: 'VOC Park and Zoo',
    location: 'Near Hotel Vijay Park Inn',
    highlights: [
      'Zoological garden',
      'Amusement park',
      'Family entertainment'
    ],
    idealFor: ['Families', 'Couples', 'Groups'],
    nearbyHotels: ['Hotel Vijay Park Inn', 'Hotel Alankar Grande'],
    src: '/public/images/voc-park.jpeg'
  },
  {
    id: '3',
    name: 'Gedee Car Museum',
    location: 'Near Hotel SBS Grand',
    highlights: [
      'Vintage cars',
      'Classic automobiles',
      'Automotive history'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel SBS Grand'],
    src: '/public/images/gedee-museum.jpg'
  },
  {
    id: '4',
    name: 'Brookefields Mall',
    location: 'Near Hotel Mangala International',
    highlights: [
      'Shopping mall',
      'Retail outlets',
      'Food court'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel Mangala International'],
    src: '/public/images/brookefields.png'
  },
  {
    id: '5',
    name: 'TNAU Botanical Garden',
    location: 'Near Hotel SBS Grand',
    highlights: [
      'Plant species',
      'Walking paths',
      'Serene environment'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel SBS Grand'],
    src: '/public/images/tnau-garden.jpeg'
  },
  {
    id: '6',
    name: 'Marudhamalai Temple',
    location: 'Near Hotel CAG Pride',
    highlights: [
      'Hilltop temple',
      'Panoramic views',
      'Spiritual significance'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel CAG Pride', 'Hotel Heritage Inn'],
    src: '/public/images/marudhamalai.jpg'
  }
]; 