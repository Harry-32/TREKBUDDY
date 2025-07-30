import { maduraiHotels, maduraiRestaurants, maduraiActivities } from './maduraiData';
import { kanyakumariHotels, kanyakumariRestaurants, kanyakumariActivities } from './kanyakumariData';
import { ootyHotels, ootyRestaurants, ootyActivities } from './ootyData';
import { kodaikanalHotels, kodaikanalRestaurants, kodaikanalActivities } from './kodaikanalData';
import { thanjavurHotels, thanjavurRestaurants, thanjavurActivities } from './thanjavurData';
import { kanchipuramHotels, kanchipuramRestaurants, kanchipuramActivities } from './kanchipuramData';
import { coimbatoreHotels, coimbatoreRestaurants, coimbatoreActivities } from './coimbatoreData';
import { rameswaramHotels, rameswaramRestaurants, rameswaramActivities } from './rameswaramData';
import { yelagiriHotels, yelagiriRestaurants, yelagiriActivities } from './yelagiriData';

export interface Hotel {
  id: string;
  name: string;
  location: string;
  priceRange: {
    min: number;
    max: number;
  };
  rating: number;
  type: 'Luxury' | 'Standard' | 'Budget';
  highlights: string[];
  whyChoose: string;
  src: string;
}

export interface Restaurant {
  id: string;
  name: string;
  location: string;
  cuisine: string;
  rating: number;
  costForTwo: number;
  highlights: string[];
  timings: string;
  contact: string;
  src: string;
  isVegetarian: boolean;
}

export interface Activity {
  id: string;
  name: string;
  location: string;
  highlights: string[];
  idealFor: string[];
  nearbyHotels: string[];
  src: string;
}

export interface TravelPreferences {
  city: string;
  startDate: Date;
  endDate: Date;
  numPeople: number;
  isVegetarian: boolean;
  hotelType: 'Luxury' | 'Standard' | 'Budget';
  travelCompanions: 'Family' | 'Couple' | 'Solo' | 'Friends';
  maxBudget: number;
}

export const chennaiHotels: Hotel[] = [
  {
    id: '1',
    name: 'Taj Coromandel',
    location: 'Nungambakkam',
    priceRange: { min: 12000, max: 12000 },
    rating: 4.8,
    type: 'Luxury',
    highlights: [
      'Pool',
      'Spa',
      'Restaurant',
      'Free WiFi'
    ],
    whyChoose: 'Luxury 5-star hotel in heart of Chennai',
    src: '/images/TajCoromandel.jpeg'
  },
  {
    id: '2',
    name: 'The Park View Inn',
    location: 'Opposite Indian Oil, Church Road, Vepery',
    priceRange: { min: 560, max: 700 },
    rating: 4.3,
    type: 'Budget',
    highlights: [
      'Free Wi-Fi',
      'Parking facility',
      'Dining area'
    ],
    whyChoose: 'One of the most affordable options with essential amenities, suitable for short stays.',
    src: '/images/TheParkViewInn.jpg'
  },
  {
    id: '3',
    name: 'FabHotel Ishka Inn',
    location: 'T. Nagar, Chennai',
    priceRange: { min: 1500, max: 2500 },
    rating: 4.6,
    type: 'Standard',
    highlights: [
      'Located in Chennai\'s prime shopping district',
      'Close to Super Saravana Stores, Nalli Silks, and Pothys',
      'Easy access to Mambalam station and Saidapet Metro'
    ],
    whyChoose: 'Ideal for shoppers and those wanting to explore central Chennai.',
    src: '/images/FabHotelIshkaInn.jpg'
  },
  {
    id: '4',
    name: 'Upar Hotels',
    location: 'Thoraipakkam, Old Mahabalipuram Road (OMR)',
    priceRange: { min: 1900, max: 2300 },
    rating: 4.4,
    type: 'Standard',
    highlights: [
      'Free Wi-Fi',
      'Buffet breakfast',
      '24-hour front desk',
      'Wheelchair accessible'
    ],
    whyChoose: 'Perfect for business travelers and tourists exploring Chennai\'s IT corridor.',
    src: '/images/UparHotels.jpg'
  },
  {
    id: '5',
    name: 'Hotel Pandian',
    location: 'Egmore, Chennai',
    priceRange: { min: 1000, max: 2000 },
    rating: 4.2,
    type: 'Budget',
    highlights: [
      'Basic but clean and well-maintained rooms',
      '24-hour front desk and room service',
      'On-site restaurant'
    ],
    whyChoose: 'Offers a balance of affordability and comfort near major city attractions.',
    src: '/images/HotelPandian.jpg'
  },
  {
    id: '6',
    name: 'Hotel O Elite Residency',
    location: 'Periyamet, near Chennai Central Railway Station',
    priceRange: { min: 574, max: 800 },
    rating: 4.1,
    type: 'Budget',
    highlights: [
      'Free Wi-Fi',
      'Hair Dryer',
      'Reception services'
    ],
    whyChoose: 'Proximity to major transit hubs and budget-friendly rates make it perfect for travelers arriving by train.',
    src: '/images/HotelOEliteResidency.jpg'
  }
];

export const chennaiRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Murugan Idli Shop',
    location: 'T Nagar',
    cuisine: 'South Indian',
    rating: 4.5,
    costForTwo: 200,
    highlights: [
      'Famous for idlis and dosas'
    ],
    timings: '6:00 AM - 10:00 PM',
    contact: '+91 44 2434 2525',
    src: '/images/murugan_idly.jpeg',
    isVegetarian: true
  },
  {
    id: '2',
    name: 'Saravana Bhavan',
    location: 'Usman Road, T. Nagar, Chennai',
    cuisine: 'South Indian',
    rating: 4.5,
    costForTwo: 300,
    highlights: [
      'Popular vegetarian restaurant chain',
      'Mini Tiffin and Pongal specialties',
      'Authentic South Indian meal'
    ],
    timings: '7:00 AM – 11:00 PM',
    contact: '',
    src: '/images/saravana.jpg',
    isVegetarian: true
  },
  {
    id: '3',
    name: 'Anjappar Chettinad Restaurant',
    location: '3, Arcot Road, Kodambakkam, Chennai',
    cuisine: 'Chettinad',
    rating: 4.3,
    costForTwo: 400,
    highlights: [
      'Famous for Chettinad cuisine',
      'Chettinad Biryani and Mutton Curry',
      'Spicy and robust flavors'
    ],
    timings: '11:00 AM – 11:00 PM',
    contact: '',
    src: '/images/anjappar.jpg',
    isVegetarian: false
  },
  {
    id: '4',
    name: 'Sangeetha Veg Restaurant',
    location: 'G.N. Chetty Road, T. Nagar, Chennai',
    cuisine: 'South Indian',
    rating: 4.2,
    costForTwo: 250,
    highlights: [
      'Clean and comfortable setting',
      'Pesarattu and Mini Tiffin specialties',
      'Ideal for casual and family meals'
    ],
    timings: '7:00 AM – 10:30 PM',
    contact: '',
    src: '/images/sangeetha.jpg',
    isVegetarian: true
  },
  {
    id: '5',
    name: 'Dindigul Thalappakatti',
    location: 'T. Nagar, Mylapore, Chennai',
    cuisine: 'South Indian, Biryani',
    rating: 4.4,
    costForTwo: 400,
    highlights: [
      'Dindigul-style biryani',
      'Mutton Kola Urundai',
      'Quintessential Tamil Nadu biryani experience'
    ],
    timings: '11:00 AM – 11:00 PM',
    contact: '',
    src: '/images/thalapakati.jpg',
    isVegetarian: false
  },
  {
    id: '6',
    name: 'Hot Chips',
    location: 'Multiple Locations (e.g., Mylapore, Anna Nagar)',
    cuisine: 'South Indian',
    rating: 4.3,
    costForTwo: 200,
    highlights: [
      'Classic South Indian snacks',
      'Rava Dosa and Onion Uttapam',
      'Perfect for quick bites and relaxed meals'
    ],
    timings: '7:00 AM – 10:00 PM',
    contact: '',
    src: '/images/hot-chips.jpg',
    isVegetarian: true
  }
];

export const chennaiActivities: Activity[] = [
  {
    id: '1',
    name: 'Marina Beach Walk',
    location: 'Marina Beach',
    highlights: [
      'Evening walk along India\'s longest beach',
      'Beautiful sunset views and vibrant atmosphere'
    ],
    idealFor: ['Beach lovers', 'Families'],
    nearbyHotels: ['Hotel Greens Gate', 'Hotel O Elite Residency'],
    src: '/images/marina.jpg'
  },
  {
    id: '2',
    name: 'Government Museum',
    location: 'Egmore, Chennai',
    highlights: [
      'One of India\'s oldest museums',
      'Extensive collections in archaeology, numismatics, zoology',
      'Adjacent to the National Art Gallery and Connemara Public Library'
    ],
    idealFor: ['History enthusiasts', 'Art lovers'],
    nearbyHotels: ['Hotel Greens Gate', 'Hotel Pandian'],
    src: '/images/government-museum.jpg'
  },
  {
    id: '3',
    name: 'Pondy Bazaar',
    location: 'T. Nagar, Chennai',
    highlights: [
      'A bustling shopping district known for its variety of textiles, jewelry, and street food',
      'Home to famous stores like Pothys and Saravana Stores'
    ],
    idealFor: ['Shopaholics', 'Food lovers'],
    nearbyHotels: ['FabHotel Ishka Inn'],
    src: '/images/pondy-bazaar.jpg'
  },
  {
    id: '4',
    name: 'ISKCON Temple',
    location: 'Sholinganallur, Chennai',
    highlights: [
      'A serene temple dedicated to Lord Krishna',
      'Known for its stunning architecture and peaceful ambiance',
      'Hosts various cultural and spiritual events throughout the year'
    ],
    idealFor: ['Spiritual seekers', 'Architecture enthusiasts'],
    nearbyHotels: ['Upar Hotels'],
    src: '/images/iskcon-temple.jpg'
  },
  {
    id: '5',
    name: 'DakshinaChitra',
    location: 'Near OMR, Chennai',
    highlights: [
      'An open-air museum showcasing South Indian heritage',
      'Reconstructed houses, crafts, and performances',
      'Offers workshops and cultural programs'
    ],
    idealFor: ['Culture enthusiasts', 'Families'],
    nearbyHotels: ['Upar Hotels'],
    src: '/images/dakshinachitra.jpeg'
  },
  {
    id: '6',
    name: 'MGM Dizzee World',
    location: 'Near OMR, Chennai',
    highlights: [
      'A popular amusement park featuring a variety of rides',
      'Water slides and entertainment options',
      'Suitable for all age groups'
    ],
    idealFor: ['Thrill-seekers', 'Families'],
    nearbyHotels: ['Upar Hotels'],
    src: '/images/mgm-dizzee.jpg'
  }
];

// City data mapping
const cityData = {
  'Chennai': {
    hotels: chennaiHotels,
    restaurants: chennaiRestaurants,
    activities: chennaiActivities
  },
  'Madurai': {
    hotels: maduraiHotels,
    restaurants: maduraiRestaurants,
    activities: maduraiActivities
  },
  'Kanyakumari': {
    hotels: kanyakumariHotels,
    restaurants: kanyakumariRestaurants,
    activities: kanyakumariActivities
  },
  'Ooty': {
    hotels: ootyHotels,
    restaurants: ootyRestaurants,
    activities: ootyActivities
  },
  'Kodaikanal': {
    hotels: kodaikanalHotels,
    restaurants: kodaikanalRestaurants,
    activities: kodaikanalActivities
  },
  'Thanjavur': {
    hotels: thanjavurHotels,
    restaurants: thanjavurRestaurants,
    activities: thanjavurActivities
  },
  'Kanchipuram': {
    hotels: kanchipuramHotels,
    restaurants: kanchipuramRestaurants,
    activities: kanchipuramActivities
  },
  'Coimbatore': {
    hotels: coimbatoreHotels,
    restaurants: coimbatoreRestaurants,
    activities: coimbatoreActivities
  },
  'Rameshwaram': {
    hotels: rameswaramHotels,
    restaurants: rameswaramRestaurants,
    activities: rameswaramActivities
  },
  'Yelagiri': {
    hotels: yelagiriHotels,
    restaurants: yelagiriRestaurants,
    activities: yelagiriActivities
  }
};

// Budget calculation functions
export const calculateBudget = (preferences: TravelPreferences) => {
  const days = Math.ceil((preferences.endDate.getTime() - preferences.startDate.getTime()) / (1000 * 60 * 60 * 24));
  
  // Get city-specific data
  const cityInfo = cityData[preferences.city as keyof typeof cityData];
  if (!cityInfo) {
    throw new Error('Invalid city selected');
  }
  
  // Calculate costs based on duration and number of people
  const hotelCostPerDay = 2000; // Average hotel cost per day
  const foodCostPerDay = 500; // Average food cost per person per day
  
  const totalHotelCost = hotelCostPerDay * days;
  const totalFoodCost = foodCostPerDay * days * preferences.numPeople;
  
  const totalCost = totalHotelCost + totalFoodCost;
  
  // Ensure total cost doesn't exceed user's max budget
  const adjustedTotalCost = Math.min(totalCost, preferences.maxBudget);
  
  return {
    totalCost: adjustedTotalCost,
    suggestedHotels: cityInfo.hotels,
    suggestedRestaurants: cityInfo.restaurants,
    suggestedActivities: cityInfo.activities,
    costBreakdown: {
      hotelCost: Math.round(totalHotelCost),
      foodCost: Math.round(totalFoodCost),
      activityCost: 0, // Activities are just recommendations, not included in budget
      perPerson: Math.round(adjustedTotalCost / preferences.numPeople),
      duration: days
    }
  };
}; 