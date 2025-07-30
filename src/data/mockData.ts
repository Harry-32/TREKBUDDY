export interface City {
  id: string;
  name: string;
  description: string;
  image_url: string;
  rating: number;
  region: "Northern" | "Central" | "Southern" | "Western" | "Hills";
}

export interface TouristSpot {
  id: string;
  city_id: string;
  name: string;
  description: string;
  image_url: string;
  category: string;
  best_time_to_visit: string;
  entry_fee: number;
  rating: number;
  sentiment: "Positive" | "Neutral" | "Negative";
}

export interface Hotel {
  id: string;
  city_id: string;
  name: string;
  description: string;
  image_url: string;
  price_per_night: number;
  rating: number;
  amenities: string[];
  type: "Luxury" | "Standard" | "Budget" | "Heritage";
  sentiment: "Positive" | "Neutral" | "Negative";
  suitable_for: string[];
}

export interface Restaurant {
  id: string;
  city_id: string;
  name: string;
  description: string;
  image_url: string;
  cuisine_type: string[];
  price_per_person: number;
  rating: number;
  sentiment: "Positive" | "Neutral" | "Negative";
  suitable_for: string[];
}

export interface Activity {
  id: string;
  city_id: string;
  name: string;
  description: string;
  image_url: string;
  duration: string;
  price_per_person: number;
  suitable_for: string[];
  rating: number;
  sentiment: "Positive" | "Neutral" | "Negative";
  category: string;
}

export const cities: City[] = [
  {
    id: "1",
    name: "Chennai",
    description: "Capital city of Tamil Nadu, known for its cultural heritage and beaches",
    image_url: "/images/chennai.jpg",
    rating: 4.5,
    region: "Northern"
  },
  {
    id: "2",
    name: "Madurai",
    description: "Temple city famous for Meenakshi Amman Temple and rich history",
    image_url: "/images/madurai.jpg",
    rating: 4.7,
    region: "Southern"
  },
  {
    id: "3",
    name: "Ooty",
    description: "Queen of hill stations with pleasant weather and scenic beauty",
    image_url: "/images/ooty.jpg",
    rating: 4.6,
    region: "Hills"
  },
  {
    id: "4",
    name: "Coimbatore",
    description: "Manchester of South India with industrial heritage",
    image_url: "/images/coimbatore.jpg",
    rating: 4.4,
    region: "Western"
  },
  {
    id: "5",
    name: "Thanjavur",
    description: "Cultural capital known for Brihadeeswarar Temple",
    image_url: "/images/thanjavur.jpg",
    rating: 4.5,
    region: "Central"
  }
];

export const touristSpots: TouristSpot[] = [
  // Chennai Spots
  {
    id: "1",
    city_id: "1",
    name: "Marina Beach",
    description: "Second longest urban beach in the world, perfect for evening walks",
    image_url: "/images/marina-beach.jpg",
    category: "Beach",
    best_time_to_visit: "Evening",
    entry_fee: 0,
    rating: 4.8,
    sentiment: "Positive"
  },
  {
    id: "2",
    city_id: "1",
    name: "Kapaleeshwarar Temple",
    description: "Ancient Dravidian architecture temple dedicated to Lord Shiva",
    image_url: "/images/kapaleeshwarar.jpg",
    category: "Temple",
    best_time_to_visit: "Morning",
    entry_fee: 0,
    rating: 4.9,
    sentiment: "Positive"
  },
  {
    id: "3",
    city_id: "1",
    name: "Fort St. George",
    description: "First British fortress in India, now a museum",
    image_url: "/images/fort-st-george.jpg",
    category: "Historical",
    best_time_to_visit: "Morning",
    entry_fee: 50,
    rating: 4.5,
    sentiment: "Positive"
  },
  // Madurai Spots
  {
    id: "4",
    city_id: "2",
    name: "Meenakshi Amman Temple",
    description: "Historic Hindu temple with stunning architecture",
    image_url: "/images/meenakshi-temple.jpg",
    category: "Temple",
    best_time_to_visit: "Morning/Evening",
    entry_fee: 50,
    rating: 4.9,
    sentiment: "Positive"
  },
  {
    id: "5",
    city_id: "2",
    name: "Thirumalai Nayakkar Palace",
    description: "17th-century palace showcasing Indo-Saracenic architecture",
    image_url: "/images/thirumalai-palace.jpg",
    category: "Historical",
    best_time_to_visit: "Morning",
    entry_fee: 100,
    rating: 4.6,
    sentiment: "Positive"
  },
  // Ooty Spots
  {
    id: "6",
    city_id: "3",
    name: "Ooty Lake",
    description: "Artificial lake perfect for boating and picnics",
    image_url: "/images/ooty-lake.jpg",
    category: "Lake",
    best_time_to_visit: "Morning",
    entry_fee: 100,
    rating: 4.6,
    sentiment: "Positive"
  },
  {
    id: "7",
    city_id: "3",
    name: "Botanical Gardens",
    description: "Spread over 55 acres with diverse plant species",
    image_url: "/images/botanical-gardens.jpg",
    category: "Garden",
    best_time_to_visit: "Morning",
    entry_fee: 50,
    rating: 4.7,
    sentiment: "Positive"
  },
  // Coimbatore Spots
  {
    id: "8",
    city_id: "4",
    name: "Marudhamalai Temple",
    description: "Ancient temple dedicated to Lord Murugan",
    image_url: "/images/marudhamalai.jpg",
    category: "Temple",
    best_time_to_visit: "Morning",
    entry_fee: 0,
    rating: 4.5,
    sentiment: "Positive"
  },
  // Thanjavur Spots
  {
    id: "9",
    city_id: "5",
    name: "Brihadeeswarar Temple",
    description: "UNESCO World Heritage Site, masterpiece of Chola architecture",
    image_url: "/images/brihadeeswarar.jpg",
    category: "Temple",
    best_time_to_visit: "Morning",
    entry_fee: 0,
    rating: 4.9,
    sentiment: "Positive"
  }
];

export const hotels: Hotel[] = [
  // Chennai Hotels
  {
    id: "1",
    city_id: "1",
    name: "Hotel Savera",
    description: "Budget-friendly hotel in the heart of Chennai",
    image_url: "/images/hotel-savera.jpg",
    price_per_night: 1800,
    rating: 4.2,
    amenities: ["WiFi", "Restaurant", "AC", "Parking"],
    type: "Standard",
    sentiment: "Positive",
    suitable_for: ["family", "solo", "business"]
  },
  {
    id: "2",
    city_id: "1",
    name: "The Park Chennai",
    description: "Luxury hotel with sea view and modern amenities",
    image_url: "/images/park-hotel.jpg",
    price_per_night: 5000,
    rating: 4.6,
    amenities: ["Pool", "Spa", "WiFi", "Restaurant", "Gym"],
    type: "Luxury",
    sentiment: "Positive",
    suitable_for: ["family", "couple", "business"]
  },
  // Madurai Hotels
  {
    id: "3",
    city_id: "2",
    name: "Heritage Madurai",
    description: "Heritage hotel with traditional architecture",
    image_url: "/images/heritage-madurai.jpg",
    price_per_night: 3500,
    rating: 4.6,
    amenities: ["Pool", "WiFi", "Restaurant", "Garden"],
    type: "Heritage",
    sentiment: "Positive",
    suitable_for: ["family", "couple"]
  },
  {
    id: "4",
    city_id: "2",
    name: "Madurai Residency",
    description: "Budget hotel near Meenakshi Temple",
    image_url: "/images/madurai-residency.jpg",
    price_per_night: 1500,
    rating: 4.0,
    amenities: ["WiFi", "AC", "Restaurant"],
    type: "Budget",
    sentiment: "Positive",
    suitable_for: ["solo", "family"]
  },
  // Ooty Hotels
  {
    id: "5",
    city_id: "3",
    name: "Hilltop Resort",
    description: "Budget resort with mountain views",
    image_url: "/images/hilltop-resort.jpg",
    price_per_night: 3000,
    rating: 4.3,
    amenities: ["WiFi", "Restaurant", "Garden"],
    type: "Standard",
    sentiment: "Positive",
    suitable_for: ["family", "couple"]
  },
  {
    id: "6",
    city_id: "3",
    name: "Taj Savoy",
    description: "Colonial-style heritage hotel",
    image_url: "/images/taj-savoy.jpg",
    price_per_night: 6000,
    rating: 4.8,
    amenities: ["Fireplace", "Restaurant", "Garden", "WiFi"],
    type: "Luxury",
    sentiment: "Positive",
    suitable_for: ["family", "couple"]
  }
];

export const restaurants: Restaurant[] = [
  // Chennai Restaurants
  {
    id: "1",
    city_id: "1",
    name: "Annalakshmi",
    description: "Traditional South Indian vegetarian restaurant",
    image_url: "/images/annalakshmi.jpg",
    cuisine_type: ["South Indian", "Vegetarian"],
    price_per_person: 300,
    rating: 4.2,
    sentiment: "Positive",
    suitable_for: ["family", "solo"]
  },
  {
    id: "2",
    city_id: "1",
    name: "Murugan Idli Shop",
    description: "Popular for authentic Tamil breakfast",
    image_url: "/images/murugan-idli.jpg",
    cuisine_type: ["South Indian", "Vegetarian"],
    price_per_person: 200,
    rating: 4.6,
    sentiment: "Positive",
    suitable_for: ["family", "solo"]
  },
  // Madurai Restaurants
  {
    id: "3",
    city_id: "2",
    name: "Murugan Idli Shop",
    description: "Famous for soft idlis and authentic Madurai flavors",
    image_url: "/images/murugan-idli-madurai.jpg",
    cuisine_type: ["South Indian", "Vegetarian"],
    price_per_person: 200,
    rating: 4.5,
    sentiment: "Positive",
    suitable_for: ["family", "solo"]
  },
  {
    id: "4",
    city_id: "2",
    name: "Kumar Mess",
    description: "Famous for Madurai-style non-vegetarian dishes",
    image_url: "/images/kumar-mess.jpg",
    cuisine_type: ["South Indian", "Non Vegetarian"],
    price_per_person: 250,
    rating: 4.8,
    sentiment: "Positive",
    suitable_for: ["family", "friends"]
  },
  // Ooty Restaurants
  {
    id: "5",
    city_id: "3",
    name: "Cafe Coffee Day",
    description: "Popular cafe chain with mountain views",
    image_url: "/images/cafe-coffee-day.jpg",
    cuisine_type: ["Cafe", "Continental"],
    price_per_person: 400,
    rating: 4.0,
    sentiment: "Positive",
    suitable_for: ["solo", "couple"]
  },
  {
    id: "6",
    city_id: "3",
    name: "Earl's Secret",
    description: "Fine dining restaurant with continental cuisine",
    image_url: "/images/earls-secret.jpg",
    cuisine_type: ["Continental", "Chinese"],
    price_per_person: 800,
    rating: 4.6,
    sentiment: "Positive",
    suitable_for: ["couple", "family"]
  }
];

export const activities: Activity[] = [
  // Chennai Activities
  {
    id: "1",
    city_id: "1",
    name: "Marina Beach Walk",
    description: "Evening stroll along the second longest urban beach",
    image_url: "/images/marina-walk.jpg",
    duration: "2 hours",
    price_per_person: 0,
    suitable_for: ["family", "solo", "couple"],
    rating: 4.5,
    sentiment: "Positive",
    category: "Beach"
  },
  {
    id: "2",
    city_id: "1",
    name: "Heritage Walk",
    description: "Guided tour of historical places in Chennai",
    image_url: "/images/heritage-walk.jpg",
    duration: "3 hours",
    price_per_person: 500,
    suitable_for: ["family", "friends", "solo"],
    rating: 4.5,
    sentiment: "Positive",
    category: "Cultural"
  },
  // Madurai Activities
  {
    id: "3",
    city_id: "2",
    name: "Meenakshi Temple Visit",
    description: "Guided tour of the famous Meenakshi Temple",
    image_url: "/images/temple-visit.jpg",
    duration: "2 hours",
    price_per_person: 50,
    suitable_for: ["family", "solo", "couple"],
    rating: 4.8,
    sentiment: "Positive",
    category: "Cultural"
  },
  {
    id: "4",
    city_id: "2",
    name: "Street Food Tour",
    description: "Explore authentic Madurai street food",
    image_url: "/images/street-food.jpg",
    duration: "3 hours",
    price_per_person: 300,
    suitable_for: ["friends", "family"],
    rating: 4.7,
    sentiment: "Positive",
    category: "Food"
  },
  // Ooty Activities
  {
    id: "5",
    city_id: "3",
    name: "Ooty Lake Boating",
    description: "Enjoy boating in the scenic Ooty Lake",
    image_url: "/images/ooty-boating.jpg",
    duration: "1 hour",
    price_per_person: 200,
    suitable_for: ["family", "couple", "friends"],
    rating: 4.4,
    sentiment: "Positive",
    category: "Outdoor"
  },
  {
    id: "6",
    city_id: "3",
    name: "Tea Estate Tour",
    description: "Visit tea plantations and learn about tea making",
    image_url: "/images/tea-estate.jpg",
    duration: "3 hours",
    price_per_person: 600,
    suitable_for: ["family", "friends", "couple"],
    rating: 4.6,
    sentiment: "Positive",
    category: "Nature"
  }
]; 