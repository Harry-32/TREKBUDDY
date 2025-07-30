export interface Hotel {
  hotelCode: string;
  hotelName: string;
  cityName: string;
  region: "Northern" | "Central" | "Southern" | "Western" | "Hills";
  hotelRating: number;
  pricePerNight: number;
  address: string;
  attractions: string[];
  description: string;
  facilities: string[];
  specialFeatures: string[];
  localSpecialties: string[];
  location: {
    latitude: number;
    longitude: number;
  };
  phoneNumber: string;
  websiteUrl?: string;
}

export const hotels: Hotel[] = [
  // === CHENNAI (Northern TN) ===
  {
    hotelCode: "CHN001",
    hotelName: "ITC Grand Chola",
    cityName: "Chennai",
    region: "Northern",
    hotelRating: 5,
    pricePerNight: 8000,
    address: "63, Mount Road, Chennai",
    attractions: [
      "Marina Beach (4 km)",
      "Kapaleeshwarar Temple (6 km)",
      "Fort St. George (5 km)",
      "Express Avenue Mall (2 km)"
    ],
    description: "Luxury hotel showcasing Tamil heritage with modern amenities",
    facilities: [
      "Swimming Pool",
      "Spa",
      "Multiple Restaurants",
      "Gym",
      "Business Center",
      "Valet Parking"
    ],
    specialFeatures: [
      "Traditional Tamil Architecture",
      "Award-winning Restaurants",
      "Luxury Spa"
    ],
    localSpecialties: [
      "South Indian Thali",
      "Chennai Filter Coffee",
      "Local Food Tours"
    ],
    location: {
      latitude: 13.0167,
      longitude: 80.2701
    },
    phoneNumber: "+91-44-22200000"
  },

  // === MADURAI (Southern TN) ===
  {
    hotelCode: "MDU001",
    hotelName: "Heritage Madurai",
    cityName: "Madurai",
    region: "Southern",
    hotelRating: 4.5,
    pricePerNight: 4000,
    address: "11, Melakkal Main Road, Madurai",
    attractions: [
      "Meenakshi Amman Temple (2 km)",
      "Thirumalai Nayakkar Palace (3 km)",
      "Gandhi Museum (4 km)"
    ],
    description: "Heritage property designed by Geoffrey Bawa with traditional Tamil elements",
    facilities: [
      "Pool",
      "Restaurant",
      "Garden",
      "Spa",
      "Temple View Rooms"
    ],
    specialFeatures: [
      "Traditional Architecture",
      "Temple View",
      "Heritage Walking Tours"
    ],
    localSpecialties: [
      "Madurai Halwa",
      "Jigarthanda",
      "Temple Food Tour"
    ],
    location: {
      latitude: 9.9252,
      longitude: 78.1198
    },
    phoneNumber: "+91-452-2385455"
  },

  // === COIMBATORE (Western TN) ===
  {
    hotelCode: "CBE001",
    hotelName: "Le Meridien Coimbatore",
    cityName: "Coimbatore",
    region: "Western",
    hotelRating: 5,
    pricePerNight: 6000,
    address: "1429, Avinashi Road, Coimbatore",
    attractions: [
      "Marudhamalai Temple (12 km)",
      "Siruvani Falls (35 km)",
      "VOC Park (5 km)"
    ],
    description: "Modern luxury hotel in the Manchester of South India",
    facilities: [
      "Rooftop Pool",
      "Spa",
      "Multiple Restaurants",
      "Business Center"
    ],
    specialFeatures: [
      "City Views",
      "Business Facilities",
      "Weekend Getaway Packages"
    ],
    localSpecialties: [
      "Kongu Cuisine",
      "Filter Coffee",
      "Local Textile Tour"
    ],
    location: {
      latitude: 11.0168,
      longitude: 76.9558
    },
    phoneNumber: "+91-422-2345000"
  },

  // === OOTY (Hills) ===
  {
    hotelCode: "OTY001",
    hotelName: "Taj Savoy",
    cityName: "Ooty",
    region: "Hills",
    hotelRating: 4.5,
    pricePerNight: 7000,
    address: "77, Sylks Road, Ooty",
    attractions: [
      "Ooty Lake (2 km)",
      "Botanical Gardens (1 km)",
      "Doddabetta Peak (10 km)",
      "Rose Garden (3 km)"
    ],
    description: "Colonial-era heritage hotel with stunning mountain views",
    facilities: [
      "Heritage Rooms",
      "Restaurant",
      "Garden",
      "Bonfire",
      "Room Service"
    ],
    specialFeatures: [
      "Colonial Architecture",
      "Mountain Views",
      "Heritage Tours"
    ],
    localSpecialties: [
      "Nilgiri Tea",
      "Homemade Chocolates",
      "Local Tribal Cuisine"
    ],
    location: {
      latitude: 11.4102,
      longitude: 76.6950
    },
    phoneNumber: "+91-423-2444142"
  },

  // === THANJAVUR (Central TN) ===
  {
    hotelCode: "TNJ001",
    hotelName: "Svatma Thanjavur",
    cityName: "Thanjavur",
    region: "Central",
    hotelRating: 4.5,
    pricePerNight: 5000,
    address: "4/1116, Blake Hr Sec School Road, Thanjavur",
    attractions: [
      "Brihadeeswara Temple (2 km)",
      "Royal Palace (3 km)",
      "Saraswathi Mahal Library (2.5 km)"
    ],
    description: "Heritage boutique hotel celebrating art and culture",
    facilities: [
      "Heritage Rooms",
      "Ayurveda Center",
      "Cultural Center",
      "Restaurant"
    ],
    specialFeatures: [
      "Art Gallery",
      "Music Performances",
      "Cooking Classes"
    ],
    localSpecialties: [
      "Thanjavur Maratha Cuisine",
      "Traditional Art Classes",
      "Temple Food"
    ],
    location: {
      latitude: 10.7870,
      longitude: 79.1378
    },
    phoneNumber: "+91-4362-273999"
  }
];

export const getHotelsByPreferences = (
  cityName: string,
  minRating: number,
  maxBudget: number,
  region?: string
): Hotel[] => {
  return hotels.filter(hotel => 
    (cityName ? hotel.cityName === cityName : true) &&
    hotel.hotelRating >= minRating &&
    hotel.pricePerNight <= maxBudget &&
    (region ? hotel.region === region : true)
  );
};

export const getHotelById = (hotelCode: string): Hotel | undefined => {
  return hotels.find(hotel => hotel.hotelCode === hotelCode);
}; 