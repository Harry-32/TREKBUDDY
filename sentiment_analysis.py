import pandas as pd
from textblob import TextBlob
import numpy as np
import os

class SentimentAnalyzer:
    def __init__(self):
        # Load data from CSV files
        data_dir = os.path.join(os.path.dirname(__file__), 'data')
        
        # Load hotels data
        self.hotels = pd.read_csv(os.path.join(data_dir, 'hotels.csv'))
        
        # Load restaurants data
        self.restaurants = pd.read_csv(os.path.join(data_dir, 'restaurants.csv'))
        
        # Load activities data
        self.activities = pd.read_csv(os.path.join(data_dir, 'activities.csv'))
        
        # Load cities data
        self.cities = pd.read_csv(os.path.join(data_dir, 'cities.csv'))
        
        # Load tourist spots data
        self.tourist_spots = pd.read_csv(os.path.join(data_dir, 'tourist_spots.csv'))

    def analyze_sentiment(self, text):
        """Analyze sentiment of a review text"""
        if pd.isna(text):
            return 0.0
        analysis = TextBlob(str(text))
        return analysis.sentiment.polarity

    def get_recommendations(self, city=None, min_rating=4.5):
        """Get recommendations based on rating and sentiment analysis"""
        # Filter hotels by city if specified
        hotels_df = self.hotels.copy()
        if city:
            hotels_df = hotels_df[hotels_df['city'].str.lower() == city.lower()]
        
        # Filter restaurants by city if specified
        restaurants_df = self.restaurants.copy()
        if city:
            restaurants_df = restaurants_df[restaurants_df['city'].str.lower() == city.lower()]
        
        # Add sentiment scores
        hotels_df['sentiment'] = hotels_df['description'].apply(self.analyze_sentiment)
        restaurants_df['sentiment'] = restaurants_df['description'].apply(self.analyze_sentiment)
        
        # Filter by rating and sort by sentiment
        recommended_hotels = hotels_df[hotels_df['rating'] >= min_rating].sort_values(
            by=['rating', 'sentiment'], ascending=[False, False]
        )
        
        recommended_restaurants = restaurants_df[restaurants_df['rating'] >= min_rating].sort_values(
            by=['rating', 'sentiment'], ascending=[False, False]
        )
        
        return recommended_hotels, recommended_restaurants

    def print_recommendations(self, city=None, min_rating=4.5):
        """Print formatted recommendations"""
        hotels, restaurants = self.get_recommendations(city, min_rating)
        
        print("\n=== Recommended Hotels (Rating >= 4.5) ===")
        for _, hotel in hotels.iterrows():
            print(f"\n{hotel['name']}")
            print(f"Location: {hotel['location']}")
            print(f"Rating: {hotel['rating']}")
            print(f"Price Range: ₹{hotel['price_range_min']} - ₹{hotel['price_range_max']}")
            print(f"Description: {hotel['description']}")
            print(f"Sentiment Score: {hotel['sentiment']:.2f}")

        print("\n=== Recommended Restaurants (Rating >= 4.5) ===")
        for _, restaurant in restaurants.iterrows():
            print(f"\n{restaurant['name']}")
            print(f"Location: {restaurant['location']}")
            print(f"Rating: {restaurant['rating']}")
            print(f"Cuisine: {restaurant['cuisine']}")
            print(f"Cost for Two: ₹{restaurant['cost_for_two']}")
            print(f"Description: {restaurant['description']}")
            print(f"Sentiment Score: {restaurant['sentiment']:.2f}")

if __name__ == "__main__":
    analyzer = SentimentAnalyzer()
    # Example: Get recommendations for Chennai
    analyzer.print_recommendations(city="Chennai") 