import pandas as pd
import os

class BudgetCalculator:
    def __init__(self):
        # Load data from CSV files
        data_dir = os.path.join(os.path.dirname(__file__), 'data')
        
        # Load hotels data
        self.hotels = pd.read_csv(os.path.join(data_dir, 'hotels.csv'))
        
        # Load restaurants data
        self.restaurants = pd.read_csv(os.path.join(data_dir, 'restaurants.csv'))
        
        # Load cities data
        self.cities = pd.read_csv(os.path.join(data_dir, 'cities.csv'))

        # City-specific multipliers based on cost of living
        self.city_multipliers = {
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
        }

    def get_average_costs(self, city, budget_type):
        """Get average costs for hotels and restaurants in a city"""
        # Filter hotels by city and budget type
        city_hotels = self.hotels[
            (self.hotels['city'].str.lower() == city.lower()) & 
            (self.hotels['type'].str.lower() == budget_type.lower())
        ]
        
        # Filter restaurants by city
        city_restaurants = self.restaurants[
            self.restaurants['city'].str.lower() == city.lower()
        ]
        
        # Calculate average hotel cost
        avg_hotel_cost = city_hotels['price_range_min'].mean() if not city_hotels.empty else 0
        
        # Calculate average restaurant cost
        avg_restaurant_cost = city_restaurants['cost_for_two'].mean() if not city_restaurants.empty else 0
        
        return avg_hotel_cost, avg_restaurant_cost

    def calculate_budget(self, city, budget_type, num_people, duration):
        """Calculate total budget with breakdown"""
        # Get base rates from actual data
        avg_hotel_cost, avg_restaurant_cost = self.get_average_costs(city, budget_type)
        
        # Apply city multiplier
        city_multiplier = self.city_multipliers.get(city, 1.0)
        
        # Calculate daily costs
        hotel_cost_per_day = avg_hotel_cost * city_multiplier
        food_cost_per_person_per_day = (avg_restaurant_cost / 2) * city_multiplier  # Cost per person
        
        # Calculate total costs
        total_hotel_cost = hotel_cost_per_day * duration
        total_food_cost = food_cost_per_person_per_day * duration * num_people
        total_cost = total_hotel_cost + total_food_cost
        buffer_amount = total_cost * 0.2
        total_cost_with_buffer = total_cost + buffer_amount
        per_person_cost = total_cost_with_buffer / num_people

        return {
            'total_cost': round(total_cost),
            'total_cost_with_buffer': round(total_cost_with_buffer),
            'hotel_cost': round(total_hotel_cost),
            'food_cost': round(total_food_cost),
            'buffer_amount': round(buffer_amount),
            'per_person_cost': round(per_person_cost),
            'duration': duration,
            'num_people': num_people,
            'city': city,
            'budget_type': budget_type,
            'hotel_cost_per_day': round(hotel_cost_per_day),
            'food_cost_per_person_per_day': round(food_cost_per_person_per_day)
        }

    def print_budget_breakdown(self, city, budget_type, num_people, duration):
        """Print formatted budget breakdown"""
        budget = self.calculate_budget(city, budget_type, num_people, duration)
        
        print("\n=== Budget Breakdown ===")
        print(f"City: {budget['city']}")
        print(f"Budget Type: {budget['budget_type']}")
        print(f"Duration: {budget['duration']} days")
        print(f"Number of People: {budget['num_people']}")
        print(f"\nDaily Costs:")
        print(f"Hotel Cost per Day: ₹{budget['hotel_cost_per_day']}")
        print(f"Food Cost per Person per Day: ₹{budget['food_cost_per_person_per_day']}")
        print(f"\nTotal Costs:")
        print(f"Hotel Cost: ₹{budget['hotel_cost']}")
        print(f"Food Cost: ₹{budget['food_cost']}")
        print(f"Buffer Amount (20%): ₹{budget['buffer_amount']}")
        print(f"\nTotal Cost: ₹{budget['total_cost']}")
        print(f"Total Cost with Buffer: ₹{budget['total_cost_with_buffer']}")
        print(f"Cost per Person: ₹{budget['per_person_cost']}")

if __name__ == "__main__":
    # Example usage
    calculator = BudgetCalculator()
    calculator.print_budget_breakdown(
        city="Chennai",
        budget_type="Standard",
        num_people=7,
        duration=3
    ) 