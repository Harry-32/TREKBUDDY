import { Hotel, Restaurant, Activity } from './chennaiData';

export const kanchipuramHotels: Hotel[] = [
  {
    id: '1',
    name: 'Hotel SSK Grand',
    location: 'Near Kamakshi Amman Temple',
    priceRange: { min: 2400, max: 2800 },
    rating: 4.3,
    type: 'Standard',
    highlights: [
      'Proximity to major attractions',
      'Free Wi-Fi',
      'Restaurant'
    ],
    whyChoose: 'Great location near the famous temple.',
    src: '/public/images/hotel-ssk.jpg'
  },
  {
    id: '2',
    name: 'MM Hotels',
    location: 'Close to Kanchipuram Bus Stand',
    priceRange: { min: 2000, max: 2400 },
    rating: 4.2,
    type: 'Standard',
    highlights: [
      'Easy access to transportation',
      'Air-conditioned rooms',
      'Free parking'
    ],
    whyChoose: 'Convenient location with good amenities.',
    src: '/public/images/mm-hotels.jpg'
  },
  {
    id: '3',
    name: 'Sree Sakthi Residency',
    location: 'Near Ekambareswarar Temple',
    priceRange: { min: 1800, max: 2200 },
    rating: 4.4,
    type: 'Budget',
    highlights: [
      'Clean rooms',
      'Friendly service',
      '24-hour front desk'
    ],
    whyChoose: 'Comfortable stay with good service.',
    src: '/public/images/SreeSakthiResidency.jpg'
  },
  {
    id: '4',
    name: 'Hotel TamilNadu',
    location: 'Central Kanchipuram',
    priceRange: { min: 1500, max: 1800 },
    rating: 4.0,
    type: 'Budget',
    highlights: [
      'Government-operated',
      'On-site dining',
      'Tour assistance'
    ],
    whyChoose: 'Affordable stay with reliable service.',
    src: '/public/images/HotelTamilNadu.jpg'
  },
  {
    id: '5',
    name: 'Sri Adhinath Residency',
    location: 'Near Varadharaja Perumal Temple',
    priceRange: { min: 1200, max: 1500 },
    rating: 4.5,
    type: 'Budget',
    highlights: [
      'Homely atmosphere',
      'Free Wi-Fi',
      'Breakfast included'
    ],
    whyChoose: 'Authentic local experience.',
    src: '/public/images/SriAdhinathResidency.jpg'
  },
  {
    id: '6',
    name: 'Jothis Residency',
    location: 'Close to Railway Station',
    priceRange: { min: 1000, max: 1300 },
    rating: 4.1,
    type: 'Budget',
    highlights: [
      'Near public transportation',
      'Air-conditioned rooms',
      'Room service'
    ],
    whyChoose: 'Convenient location for travelers.',
    src: '/public/images/JothisResidency.jpg'
  }
];

export const kanchipuramRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Hotel Saravana Bhavan',
    cuisine: 'South Indian',
    rating: 4.4,
    costForTwo: 300,
    location: 'Near Temple',
    highlights: [
      'Authentic dosas',
      'Idlis',
      'Traditional meals'
    ],
    timings: '7:00 AM – 10:00 PM',
    contact: '+91 442 234567',
    src: '/public/images/hotel-saravana.jpg',
    isVegetarian: true
  },
  {
    id: '2',
    name: 'Upashana Hotels',
    cuisine: 'South Indian',
    rating: 4.3,
    costForTwo: 250,
    location: 'Near Bus Stand',
    highlights: [
      'Hygienic food',
      'Traditional dishes',
      'Quick service'
    ],
    timings: '6:00 AM – 9:00 PM',
    contact: '+91 442 234568',
    src: '/public/images/upashana-hotels.jpeg',
    isVegetarian: true
  },
  {
    id: '3',
    name: 'Dakshin Restaurant',
    cuisine: 'Multi-cuisine',
    rating: 4.5,
    costForTwo: 400,
    location: 'Central Kanchipuram',
    highlights: [
      'Variety of dishes',
      'Modern ambiance',
      'Good service'
    ],
    timings: '11:00 AM – 10:00 PM',
    contact: '+91 442 234569',
    src: '/public/images/dakshin-restaurant.jpg',
    isVegetarian: false
  },
  {
    id: '4',
    name: 'Meat and Eat Family Restaurant',
    cuisine: 'Indian',
    rating: 4.2,
    costForTwo: 350,
    location: 'Near Temple',
    highlights: [
      'Quick service',
      'Traditional meals',
      'Family-friendly'
    ],
    timings: '11:00 AM – 11:00 PM',
    contact: '+91 442 234570',
    src: '/public/images/MeatandEatFamilyRestaurant.jpg',
    isVegetarian: false
  },
  {
    id: '5',
    name: 'Star Biryani Centre',
    cuisine: 'Indian',
    rating: 4.6,
    costForTwo: 300,
    location: 'Near Bus Stand',
    highlights: [
      'Biryani',
      'Local specialties',
      'Quick service'
    ],
    timings: '11:00 AM – 10:00 PM',
    contact: '+91 442 234571',
    src: '/public/images/StarBiryaniCentre.jpeg',
    isVegetarian: false
  },
  {
    id: '6',
    name: 'Nithya Amirtham',
    cuisine: 'South Indian',
    rating: 4.4,
    costForTwo: 200,
    location: 'Near Temple',
    highlights: [
      'Traditional meals',
      'Friendly service',
      'Vegetarian options'
    ],
    timings: '7:00 AM – 9:00 PM',
    contact: '+91 442 234572',
    src: '/public/images/NithyaAmirtham.jpg',
    isVegetarian: true
  }
];

export const kanchipuramActivities: Activity[] = [
  {
    id: '1',
    name: 'Kamakshi Amman Temple',
    location: 'Near Hotel SSK Grand',
    highlights: [
      'Shakti Peetha',
      'Spiritual significance',
      'Ancient architecture'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel SSK Grand', 'Upashana Hotels'],
    src: '/public/images/KamakshiAmmanTemple.jpg'
  },
  {
    id: '2',
    name: 'Ekambareswarar Temple',
    location: 'Near Sree Sakthi Residency',
    highlights: [
      'Largest temple in Kanchipuram',
      'Dedicated to Lord Shiva',
      'Architectural marvel'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Sree Sakthi Residency'],
    src: '/public/images/EkambareswararTemple.jpeg'
  },
  {
    id: '3',
    name: 'Kailasanathar Temple',
    location: 'Near MM Hotels',
    highlights: [
      '8th-century sandstone temple',
      'Intricate carvings',
      'Historical significance'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['MM Hotels'],
    src: '/public/images/KailasanatharTemple.jpg'
  },
  {
    id: '4',
    name: 'Varadharaja Perumal Temple',
    location: 'Near Sri Adhinath Residency',
    highlights: [
      'Significant Vishnu temple',
      'Rich history',
      'Beautiful architecture'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Sri Adhinath Residency'],
    src: '/public/images/VaradharajaPerumalTemple.jpg'
  },
  {
    id: '5',
    name: 'Kanchi Kudil',
    location: 'Near Hotel TamilNadu',
    highlights: [
      'Heritage home',
      'Traditional Tamil culture',
      'Lifestyle showcase'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Hotel TamilNadu'],
    src: '/public/images/kanchi-kudil.jpeg'
  },
  {
    id: '6',
    name: 'Devarajaswami Temple',
    location: 'Near Jothis Residency',
    highlights: [
      'Historic Vishnu temple',
      'Architectural beauty',
      'Spiritual significance'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Jothis Residency'],
    src: '/public/images/devarajaswami.jpg'
  }
]; 