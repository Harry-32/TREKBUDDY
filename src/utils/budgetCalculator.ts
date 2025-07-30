import { Hotel, Restaurant } from '../data/chennaiData';

type RoomType = 'single' | 'double' | 'triple' | 'quad';

interface HotelCosts {
  single: number;
  double: number;
  triple: number;
  quad: number;
}

interface FoodCosts {
  breakfast: number;
  lunch: number;
  dinner: number;
}

interface TransportCosts {
  local: number;
  sightseeing: number;
}

interface BudgetCosts {
  hotel: HotelCosts;
  food: FoodCosts;
  transport: TransportCosts;
}

interface BudgetCalculation {
  totalCost: number;
  hotelCost: number;
  foodCost: number;
  transportCost: number;
  perPersonCost: number;
  duration: number;
  budgetExceeded: boolean;
  details: {
    hotelPerDay: number;
    mealsPerDay: number;
    totalMeals: number;
    roomsNeeded: number;
    peoplePerRoom: number;
    transportPerDay: number;
  };
}

// Base costs for different budget types (per day)
const baseCosts: Record<'Budget Friendly' | 'Standard' | 'Luxury', BudgetCosts> = {
  'Budget Friendly': {
    hotel: {
      single: 500,    // per room per night
      double: 800,    // per room per night
      triple: 1000,   // per room per night
      quad: 1200      // per room per night
    },
    food: {
      breakfast: 80,  // per person
      lunch: 120,     // per person
      dinner: 120     // per person
    },
    transport: {
      local: 150,     // per person
      sightseeing: 200 // per person
    }
  },
  'Standard': {
    hotel: {
      single: 1500,
      double: 2000,
      triple: 2500,
      quad: 3000
    },
    food: {
      breakfast: 150,
      lunch: 250,
      dinner: 250
    },
    transport: {
      local: 300,
      sightseeing: 400
    }
  },
  'Luxury': {
    hotel: {
      single: 3000,
      double: 4000,
      triple: 5000,
      quad: 6000
    },
    food: {
      breakfast: 300,
      lunch: 500,
      dinner: 500
    },
    transport: {
      local: 500,
      sightseeing: 700
    }
  }
};

// City-specific multipliers (affects all costs)
const cityMultipliers: Record<string, number> = {
  'Chennai': 1.2,    // Metro city, higher costs
  'Madurai': 0.8,    // Tier 2 city, lower costs
  'Kanyakumari': 0.9,// Tourist destination, moderate costs
  'Ooty': 1.3,       // Popular hill station, premium costs
  'Kodaikanal': 1.3, // Popular hill station, premium costs
  'Thanjavur': 0.7,  // Cultural city, lower costs
  'Kanchipuram': 0.8,// Temple town, moderate costs
  'Coimbatore': 1.0, // Industrial city, standard costs
  'Rameswaram': 0.9, // Religious destination, moderate costs
  'Yelagiri': 1.1    // Emerging hill station, slightly higher costs
};

export const calculateBudget = (
  budgetType: 'Budget Friendly' | 'Standard' | 'Luxury',
  city: string,
  numberOfPeople: number,
  duration: number
): BudgetCalculation => {
  // Input validation
  if (numberOfPeople < 1) numberOfPeople = 1;
  if (duration < 1) duration = 1;
  if (!city) city = 'Chennai'; // Default city

  const costs = baseCosts[budgetType];
  const cityMultiplier = cityMultipliers[city] || 1.0;

  // Calculate rooms needed based on group size
  let roomsNeeded = 1;
  let roomType: RoomType = 'single';
  if (numberOfPeople <= 2) {
    roomsNeeded = 1;
    roomType = 'double';
  } else if (numberOfPeople <= 4) {
    roomsNeeded = Math.ceil(numberOfPeople / 2);
    roomType = 'double';
  } else if (numberOfPeople <= 6) {
    roomsNeeded = Math.ceil(numberOfPeople / 3);
    roomType = 'triple';
  } else {
    roomsNeeded = Math.ceil(numberOfPeople / 4);
    roomType = 'quad';
  }

  // Calculate hotel cost
  const hotelPerDay = Math.round(costs.hotel[roomType as keyof HotelCosts] * cityMultiplier);
  const hotelCost = hotelPerDay * roomsNeeded * duration;

  // Calculate food cost (3 meals per day)
  const mealsPerDay = 3;
  const foodPerDay = Math.round(
    (costs.food.breakfast + costs.food.lunch + costs.food.dinner) * cityMultiplier
  );
  const foodCost = foodPerDay * numberOfPeople * duration;

  // Calculate transport cost (local + sightseeing)
  const transportPerDay = Math.round(
    (costs.transport.local + costs.transport.sightseeing) * cityMultiplier
  );
  const transportCost = transportPerDay * numberOfPeople * duration;

  // Calculate total cost
  const totalCost = hotelCost + foodCost + transportCost;
  const perPersonCost = totalCost / numberOfPeople;

  // Calculate buffer (20%)
  const bufferAmount = Math.round(totalCost * 0.2);
  const totalCostWithBuffer = totalCost + bufferAmount;

  // Check if budget is exceeded (₹1,00,000 limit for luxury)
  const budgetExceeded = budgetType === 'Luxury' && totalCostWithBuffer > 100000;

  return {
    totalCost: Math.round(totalCostWithBuffer),
    hotelCost: Math.round(hotelCost),
    foodCost: Math.round(foodCost),
    transportCost: Math.round(transportCost),
    perPersonCost: Math.round(perPersonCost),
    duration,
    budgetExceeded,
    details: {
      hotelPerDay,
      mealsPerDay,
      totalMeals: mealsPerDay * duration * numberOfPeople,
      roomsNeeded,
      peoplePerRoom: Math.ceil(numberOfPeople / roomsNeeded),
      transportPerDay
    }
  };
};

// City-specific budget recommendations with duration-based adjustments
export const getBudgetRecommendation = (
  city: string,
  budget: number,
  numberOfPeople: number,
  duration: number
): string => {
  // Base daily rates for different budget types
  const dailyRates = {
    'Budget': {
      hotel: 1200,
      food: 600
    },
    'Standard': {
      hotel: 2500,
      food: 900
    },
    'Luxury': {
      hotel: 5000,
      food: 1500
    }
  };

  // City-specific multipliers
  const cityMultipliers: Record<string, number> = {
    'Chennai': 1.2,
    'Madurai': 0.9,
    'Kanyakumari': 1.0,
    'Ooty': 1.3,
    'Kodaikanal': 1.3,
    'Thanjavur': 0.9,
    'Kanchipuram': 1.0,
    'Coimbatore': 1.1,
    'Rameswaram': 1.0,
    'Yelagiri': 1.2
  };

  const cityMultiplier = cityMultipliers[city] || 1.0;
  const baseBudget = (dailyRates.Standard.hotel + (dailyRates.Standard.food * numberOfPeople)) * duration;
  const adjustedBudget = baseBudget * cityMultiplier;

  return `For ${duration} days in ${city} with ${numberOfPeople} people, a budget of ₹${budget} is ${budget < adjustedBudget ? 'tight' : 'comfortable'}. Consider adjusting your stay duration or number of people.`;
};

interface CityBudgetConfig {
  budget: { max: number; hotelSplit: number; restaurantSplit: number };
  standard: { max: number; hotelSplit: number; restaurantSplit: number };
  luxury: { min: number; hotelSplit: number; restaurantSplit: number };
}

const cityBudgetConfigs: Record<string, CityBudgetConfig> = {
  Chennai: {
    budget:   { max: 32000, hotelSplit: 0.7, restaurantSplit: 0.3 },
    standard: { max: 60000, hotelSplit: 0.65, restaurantSplit: 0.35 },
    luxury:   { min: 85000, hotelSplit: 0.6, restaurantSplit: 0.4 }
  },
  Ooty: {
    budget:   { max: 35000, hotelSplit: 0.75, restaurantSplit: 0.25 },
    standard: { max: 65000, hotelSplit: 0.7, restaurantSplit: 0.3 },
    luxury:   { min: 90000, hotelSplit: 0.65, restaurantSplit: 0.35 }
  },
  Kodaikanal: {
    budget:   { max: 33000, hotelSplit: 0.7, restaurantSplit: 0.3 },
    standard: { max: 62000, hotelSplit: 0.65, restaurantSplit: 0.35 },
    luxury:   { min: 85000, hotelSplit: 0.6, restaurantSplit: 0.4 }
  },
  Madurai: {
    budget:   { max: 30000, hotelSplit: 0.68, restaurantSplit: 0.32 },
    standard: { max: 55000, hotelSplit: 0.6, restaurantSplit: 0.4 },
    luxury:   { min: 80000, hotelSplit: 0.55, restaurantSplit: 0.45 }
  },
  Kanyakumari: {
    budget:   { max: 31000, hotelSplit: 0.7, restaurantSplit: 0.3 },
    standard: { max: 58000, hotelSplit: 0.65, restaurantSplit: 0.35 },
    luxury:   { min: 82000, hotelSplit: 0.6, restaurantSplit: 0.4 }
  },
  Thanjavur: {
    budget:   { max: 30000, hotelSplit: 0.7, restaurantSplit: 0.3 },
    standard: { max: 52000, hotelSplit: 0.6, restaurantSplit: 0.4 },
    luxury:   { min: 80000, hotelSplit: 0.55, restaurantSplit: 0.45 }
  },
  Kanchipuram: {
    budget:   { max: 30000, hotelSplit: 0.7, restaurantSplit: 0.3 },
    standard: { max: 50000, hotelSplit: 0.6, restaurantSplit: 0.4 },
    luxury:   { min: 80000, hotelSplit: 0.55, restaurantSplit: 0.45 }
  },
  Coimbatore: {
    budget:   { max: 32000, hotelSplit: 0.7, restaurantSplit: 0.3 },
    standard: { max: 60000, hotelSplit: 0.65, restaurantSplit: 0.35 },
    luxury:   { min: 85000, hotelSplit: 0.6, restaurantSplit: 0.4 }
  },
  Rameswaram: {
    budget:   { max: 31000, hotelSplit: 0.7, restaurantSplit: 0.3 },
    standard: { max: 58000, hotelSplit: 0.65, restaurantSplit: 0.35 },
    luxury:   { min: 82000, hotelSplit: 0.6, restaurantSplit: 0.4 }
  },
  Yelagiri: {
    budget:   { max: 32000, hotelSplit: 0.7, restaurantSplit: 0.3 },
    standard: { max: 60000, hotelSplit: 0.65, restaurantSplit: 0.35 },
    luxury:   { min: 85000, hotelSplit: 0.6, restaurantSplit: 0.4 }
  }
};

interface PersonalizedBudgetResult {
  totalNights: number;
  hotelCost: number;
  foodCost: number;
  transportCost: number;
  totalCost: number;
  budgetType: string;
  city: string;
  numberOfPeople: number;
  startDate: string;
  endDate: string;
  warning?: string;
  suggestion?: string;
  fitsBudget: boolean;
  details: {
    roomsNeeded: number;
    peoplePerRoom: number;
    hotelPerDay: number;
    foodPerDay: number;
    transportPerDay: number;
  };
}

export function calculatePersonalizedBudget(
  city: string,
  budgetType: 'Budget Friendly' | 'Standard' | 'Luxury',
  numberOfPeople: number,
  startDate: string,
  endDate: string
): PersonalizedBudgetResult {
  // Parse dates and calculate nights
  const start = new Date(startDate);
  const end = new Date(endDate);
  const msPerDay = 1000 * 60 * 60 * 24;
  let totalNights = Math.round((end.getTime() - start.getTime()) / msPerDay);
  if (totalNights < 1) totalNights = 1; // Minimum 1 night

  // Get base costs and city multiplier
  const costs = baseCosts[budgetType];
  const cityMultiplier = cityMultipliers[city] || 1.0;

  // Calculate number of rooms needed
  let roomsNeeded = 1;
  let roomType: RoomType = 'single';
  if (numberOfPeople <= 2) {
    roomsNeeded = 1;
    roomType = 'double';
  } else if (numberOfPeople <= 4) {
    roomsNeeded = Math.ceil(numberOfPeople / 2);
    roomType = 'double';
  } else if (numberOfPeople <= 6) {
    roomsNeeded = Math.ceil(numberOfPeople / 3);
    roomType = 'triple';
  } else {
    roomsNeeded = Math.ceil(numberOfPeople / 4);
    roomType = 'quad';
  }

  // Calculate daily costs with city multiplier
  const hotelPerDay = Math.round(costs.hotel[roomType as keyof HotelCosts] * cityMultiplier);
  const foodPerDay = Math.round(
    (costs.food.breakfast + costs.food.lunch + costs.food.dinner) * cityMultiplier
  );
  const transportPerDay = Math.round(
    (costs.transport.local + costs.transport.sightseeing) * cityMultiplier
  );

  // Calculate total costs
  const hotelCost = hotelPerDay * roomsNeeded * totalNights;
  const foodCost = foodPerDay * numberOfPeople * totalNights;
  const transportCost = transportPerDay * numberOfPeople * totalNights;
  const totalCost = hotelCost + foodCost + transportCost;

  // Budget fit logic
  let fitsBudget = true;
  let warning: string | undefined;
  let suggestion: string | undefined;

  if (totalCost > 100000) {
    fitsBudget = false;
    warning = "⚠️ Your plan exceeds ₹1,00,000!";
    suggestion = "Try: 1) Reducing trip duration 2) Choosing a lower budget type 3) Reducing group size 4) Selecting a different city";
  } else {
    warning = "✅ Your trip plan fits within budget.";
  }

  return {
    totalNights,
    hotelCost: Math.round(hotelCost),
    foodCost: Math.round(foodCost),
    transportCost: Math.round(transportCost),
    totalCost: Math.round(totalCost),
    budgetType,
    city,
    numberOfPeople,
    startDate,
    endDate,
    warning,
    suggestion,
    fitsBudget,
    details: {
      roomsNeeded,
      peoplePerRoom: Math.ceil(numberOfPeople / roomsNeeded),
      hotelPerDay,
      foodPerDay,
      transportPerDay
    }
  };
} 