export interface Restaurant {
  restaurantCode: string;
  name: string;
  cityName: string;
  region: "Northern" | "Central" | "Southern" | "Western" | "Hills";
  rating: number;
  priceForTwo: number;
  cuisine: string[];
  address: string;
  description: string;
  specialties: string[];
  facilities: string[];
  location: {
    latitude: number;
    longitude: number;
  };
  phoneNumber: string;
  timings: string;
}

export const restaurants: Restaurant[] = [
  // === CHENNAI (Northern TN) ===
  {
    restaurantCode: "CHN_REST001",
    name: "Saravana Bhavan",
    cityName: "Chennai",
    region: "Northern",
    rating: 4.5,
    priceForTwo: 600,
    cuisine: ["South Indian", "Tamil"],
    address: "Anna Nagar, Chennai",
    description: "Iconic South Indian vegetarian restaurant chain",
    specialties: [
      "Ghee Pongal",
      "Filter Coffee",
      "Mysore Masala Dosa",
      "Special Meals"
    ],
    facilities: ["AC", "Family Section", "Take Away", "Pure Veg"],
    location: {
      latitude: 13.0827,
      longitude: 80.2707
    },
    phoneNumber: "+91-44-26268882",
    timings: "7:00 AM - 11:00 PM"
  },

  // === MADURAI (Southern TN) ===
  {
    restaurantCode: "MDU_REST001",
    name: "Murugan Idli Shop",
    cityName: "Madurai",
    region: "Southern",
    rating: 4.6,
    priceForTwo: 300,
    cuisine: ["South Indian", "Tamil"],
    address: "West Masi Street, Madurai",
    description: "Famous for soft idlis and authentic Madurai flavors",
    specialties: [
      "Soft Idli",
      "Podi Dosa",
      "Jigarthanda",
      "Special Chutney"
    ],
    facilities: ["AC", "Pure Veg", "Take Away"],
    location: {
      latitude: 9.9252,
      longitude: 78.1198
    },
    phoneNumber: "+91-452-2345678",
    timings: "6:30 AM - 11:00 PM"
  },

  // === COIMBATORE (Western TN) ===
  {
    restaurantCode: "CBE_REST001",
    name: "Annapoorna",
    cityName: "Coimbatore",
    region: "Western",
    rating: 4.5,
    priceForTwo: 400,
    cuisine: ["South Indian", "Kongu"],
    address: "R.S. Puram, Coimbatore",
    description: "Traditional Kongu Nadu cuisine with modern ambiance",
    specialties: [
      "Kongu Parotta",
      "Nattu Kozhi Kulambu",
      "Filter Coffee",
      "Special Thali"
    ],
    facilities: ["AC", "Family Section", "Pure Veg"],
    location: {
      latitude: 11.0168,
      longitude: 76.9558
    },
    phoneNumber: "+91-422-2231451",
    timings: "7:00 AM - 10:30 PM"
  },

  // === THANJAVUR (Central TN) ===
  {
    restaurantCode: "TNJ_REST001",
    name: "Thillana",
    cityName: "Thanjavur",
    region: "Central",
    rating: 4.4,
    priceForTwo: 500,
    cuisine: ["South Indian", "Thanjavur"],
    address: "Near Big Temple, Thanjavur",
    description: "Traditional Thanjavur Maratha cuisine",
    specialties: [
      "Thanjavur Maratha Thali",
      "Puliyodharai",
      "Sambhar Rice",
      "Temple Prasadam"
    ],
    facilities: ["AC", "Family Section", "Cultural Ambience"],
    location: {
      latitude: 10.7870,
      longitude: 79.1378
    },
    phoneNumber: "+91-4362-273666",
    timings: "11:00 AM - 10:30 PM"
  },

  // === OOTY (Hills) ===
  {
    restaurantCode: "OTY_REST001",
    name: "Earl's Secret",
    cityName: "Ooty",
    region: "Hills",
    rating: 4.6,
    priceForTwo: 2000,
    cuisine: ["Continental", "Indian", "Nilgiri"],
    address: "Taj Savoy Hotel, Ooty",
    description: "Fine dining with mountain views and local ingredients",
    specialties: [
      "Nilgiri Herbs Soup",
      "Local Trout",
      "Chocolate Desserts",
      "High Tea"
    ],
    facilities: ["Fine Dining", "Mountain View", "Bar", "Romantic Setting"],
    location: {
      latitude: 11.4102,
      longitude: 76.6950
    },
    phoneNumber: "+91-423-2444142",
    timings: "12:30 PM - 10:30 PM"
  }
];

export const getRestaurantsByPreferences = (
  cityName: string,
  minRating: number,
  maxBudgetPerPerson: number,
  cuisineTypes: string[],
  region?: string
): Restaurant[] => {
  return restaurants.filter(restaurant => 
    (cityName ? restaurant.cityName === cityName : true) &&
    restaurant.rating >= minRating &&
    (restaurant.priceForTwo / 2) <= maxBudgetPerPerson &&
    (cuisineTypes.length === 0 || restaurant.cuisine.some(c => cuisineTypes.includes(c))) &&
    (region ? restaurant.region === region : true)
  );
};

export const getRestaurantById = (restaurantCode: string): Restaurant | undefined => {
  return restaurants.find(restaurant => restaurant.restaurantCode === restaurantCode);
}; 