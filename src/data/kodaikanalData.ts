import { Hotel, Restaurant, Activity } from './chennaiData';

export const kodaikanalHotels: Hotel[] = [
  {
    id: '1',
    name: 'JJ Cottage',
    location: 'Near Kodaikanal Lake',
    priceRange: { min: 2000, max: 3000 },
    rating: 4.2,
    type: 'Standard',
    highlights: [
      'Lake view',
      'Free WiFi',
      'Restaurant'
    ],
    whyChoose: 'Great location with essential amenities.',
    src: '/public/images/jj-cottage.jpeg'
  },
  {
    id: '2',
    name: 'Chennai Grand Residency',
    location: 'Within 2.2 miles of Chettiar Park',
    priceRange: { min: 1200, max: 1500 },
    rating: 4.3,
    type: 'Standard',
    highlights: [
      'On-site restaurant',
      'Free private parking',
      'Comfortable stay'
    ],
    whyChoose: 'Good amenities with dining options.',
    src: '/public/images/chennai-grand.jpg'
  },
  {
    id: '3',
    name: 'Brothers Holidays Kodaikanal',
    location: '2 miles from Chettiar Park',
    priceRange: { min: 1100, max: 1400 },
    rating: 4.4,
    type: 'Standard',
    highlights: [
      'Terrace access',
      'Free private parking',
      'Scenic views'
    ],
    whyChoose: 'Beautiful views with good facilities.',
    src: '/public/images/brothers-holidays.jpg'
  },
  {
    id: '4',
    name: 'KODAI RiYA PARADISE',
    location: '3-minute walk from Chettiar Park',
    priceRange: { min: 1000, max: 1300 },
    rating: 4.1,
    type: 'Budget',
    highlights: [
      'Near Bus Stand',
      'Free Wi-Fi',
      'Room service'
    ],
    whyChoose: 'Convenient location with basic amenities.',
    src: '/public/images/kodai-riya.jpg'
  },
  {
    id: '5',
    name: 'Fruitsnbeans Homestay',
    location: '1.1 miles from Fairy Falls',
    priceRange: { min: 1200, max: 1500 },
    rating: 4.5,
    type: 'Standard',
    highlights: [
      'Garden area',
      'Free Wi-Fi',
      'Homely atmosphere'
    ],
    whyChoose: 'Peaceful stay with nature surroundings.',
    src: '/public/images/fruitsnbeans.jpg'
  },
  {
    id: '6',
    name: 'Zack\'s Stone Cottage',
    location: 'Central Kodaikanal',
    priceRange: { min: 1300, max: 1600 },
    rating: 4.3,
    type: 'Standard',
    highlights: [
      'Central location',
      'Free Wi-Fi',
      'Room service'
    ],
    whyChoose: 'Perfect location for exploring Kodaikanal.',
    src: '/public/images/zacks-cottage.jpg'
  }
];

export const kodaikanalRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pastry Corner',
    location: 'Near Kodaikanal Lake',
    cuisine: 'Bakery',
    rating: 4.5,
    costForTwo: 300,
    highlights: [
      'Fresh pastries',
      'Coffee',
      'Lake view'
    ],
    timings: '8:00 AM – 8:00 PM',
    contact: '+91 4542 234567',
    src: '/public/images/pastry-corner.jpg',
    isVegetarian: true
  },
  {
    id: '2',
    name: 'Brother Tibet',
    cuisine: 'Tibetan',
    rating: 4.5,
    costForTwo: 300,
    location: 'Near Bus Stand',
    highlights: [
      'Authentic Tibetan dishes',
      'Chinese cuisine',
      'Local specialties'
    ],
    timings: '10:00 AM – 9:00 PM',
    contact: '+91 4542 234568',
    src: '/public/images/brother-tibet.jpg',
    isVegetarian: false
  },
  {
    id: '3',
    name: 'Passiflora Art Cafe',
    cuisine: 'Italian',
    rating: 4.6,
    costForTwo: 500,
    location: 'Near Lake',
    highlights: [
      'Italian cuisine',
      'Artistic ambiance',
      'Great views'
    ],
    timings: '11:00 AM – 10:00 PM',
    contact: '+91 4542 234569',
    src: '/public/images/passiflora.jpg',
    isVegetarian: false
  },
  {
    id: '4',
    name: 'Astoria Veg Restaurant',
    cuisine: 'South Indian',
    rating: 4.3,
    costForTwo: 400,
    location: 'Near Bus Stand',
    highlights: [
      'Vegetarian dishes',
      'Traditional cuisine',
      'Clean environment'
    ],
    timings: '7:00 AM – 9:00 PM',
    contact: '+91 4542 234570',
    src: '/public/images/astoria.jpg',
    isVegetarian: true
  },
  {
    id: '5',
    name: 'Tava Vegetarian Restaurant',
    cuisine: 'North Indian',
    rating: 4.4,
    costForTwo: 350,
    location: 'Near Lake',
    highlights: [
      'Vegetarian thalis',
      'Curries',
      'Traditional dishes'
    ],
    timings: '11:00 AM – 9:00 PM',
    contact: '+91 4542 234571',
    src: '/public/images/tava.jpg',
    isVegetarian: true
  },
  {
    id: '6',
    name: 'The Royal Tibet',
    cuisine: 'Tibetan',
    rating: 4.5,
    costForTwo: 300,
    location: 'Near Bus Stand',
    highlights: [
      'Tibetan momos',
      'Noodle soups',
      'Authentic flavors'
    ],
    timings: '10:00 AM – 9:00 PM',
    contact: '+91 4542 234572',
    src: '/public/images/royal-tibet.jpg',
    isVegetarian: false
  }
];

export const kodaikanalActivities: Activity[] = [
  {
    id: '1',
    name: 'Kodaikanal Lake',
    location: 'Kodaikanal',
    highlights: [
      'Boating',
      'Scenic views',
      'Walking path'
    ],
    idealFor: ['Families', 'Couples', 'Groups'],
    nearbyHotels: ['JJ Cottage', 'Chennai Grand Residency'],
    src: '/public/images/kodaikanal-lake.jpg'
  },
  {
    id: '2',
    name: 'Coaker\'s Walk',
    location: 'Near Brothers Holidays',
    highlights: [
      '1 km walking path',
      'Panoramic views',
      'Nature trail'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Brothers Holidays Kodaikanal'],
    src: '/public/images/coakers-walk.jpeg'
  },
  {
    id: '3',
    name: 'Bryant Park',
    location: 'Near KODAI RiYA PARADISE',
    highlights: [
      'Diverse plant species',
      'Serene environment',
      'Beautiful gardens'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['KODAI RiYA PARADISE'],
    src: '/public/images/bryant-park.jpg'
  },
  {
    id: '4',
    name: 'Kurinji Andavar Temple',
    location: 'Near Fruitsnbeans Homestay',
    highlights: [
      'Ancient temple',
      'Spiritual significance',
      'Peaceful atmosphere'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Fruitsnbeans Homestay'],
    src: '/public/images/kurinji-temple.jpeg'
  },
  {
    id: '5',
    name: 'Silver Cascade Falls',
    location: 'Near Zack\'s Stone Cottage',
    highlights: [
      'Picturesque waterfall',
      'Nature views',
      'Photography spot'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Zack\'s Stone Cottage'],
    src: '/public/images/silver-cascade.jpeg'
  },
  {
    id: '6',
    name: 'Bear Shola Falls',
    location: 'Near Brothers Holidays',
    highlights: [
      'Serene waterfall',
      'Dense forests',
      'Picnic spot'
    ],
    idealFor: ['Families', 'Couples', 'Solo travelers', 'Groups'],
    nearbyHotels: ['Brothers Holidays Kodaikanal'],
    src: '/public/images/bear-shola.jpeg'
  }
]; 