import { db, collections } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const kanchipuramData = {
  city: {
    id: 'kanchipuram',
    name: 'Kanchipuram',
    state: 'Tamil Nadu',
    description: 'Known as the City of Thousand Temples, Kanchipuram is famous for its silk sarees and ancient temples.',
    image_url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
  },
  hotels: [
    {
      id: 'kanchi_hotel1',
      name: 'Sree Sakthi Residency',
      city_id: 'kanchipuram',
      rating: 4.0,
      location: 'Near major temples',
      description: 'Offering clean rooms',
      price_per_night: 1500,
      amenities: ['WiFi', 'AC', 'Parking'],
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      id: 'kanchi_hotel2',
      name: 'Vasanth Villa',
      city_id: 'kanchipuram',
      rating: 4.2,
      location: 'City center',
      description: 'Provides basic amenities with good service',
      price_per_night: 1200,
      amenities: ['WiFi', 'AC', 'Parking'],
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      id: 'kanchi_hotel3',
      name: 'Gayathri Stay',
      city_id: 'kanchipuram',
      rating: 4.1,
      location: 'City center',
      description: 'Comfortable stay options close to the city center',
      price_per_night: 1300,
      amenities: ['WiFi', 'AC', 'Parking'],
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      id: 'kanchi_hotel4',
      name: 'Adhi Residency',
      city_id: 'kanchipuram',
      rating: 4.3,
      location: 'Near temples',
      description: 'Known for its friendly staff and proximity to temples',
      price_per_night: 1400,
      amenities: ['WiFi', 'AC', 'Parking'],
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      id: 'kanchi_hotel5',
      name: 'SBK Park Inn',
      city_id: 'kanchipuram',
      rating: 4.0,
      location: 'Near shopping areas',
      description: 'Offers well-maintained rooms near shopping areas',
      price_per_night: 1600,
      amenities: ['WiFi', 'AC', 'Parking'],
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    }
  ],
  restaurants: [
    {
      id: 'kanchi_rest1',
      name: 'Saravana Bhavan',
      city_id: 'kanchipuram',
      rating: 4.5,
      location: 'City center',
      description: 'Renowned for South Indian vegetarian meals',
      cuisine: 'South Indian',
      price_per_person: 200,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      id: 'kanchi_rest2',
      name: 'A2B (Adyar Ananda Bhavan)',
      city_id: 'kanchipuram',
      rating: 4.4,
      location: 'City center',
      description: 'Offers a variety of sweets and snacks',
      cuisine: 'South Indian',
      price_per_person: 250,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      id: 'kanchi_rest3',
      name: 'Sangeetha Veg Restaurant',
      city_id: 'kanchipuram',
      rating: 4.3,
      location: 'City center',
      description: 'Known for its dosas and filter coffee',
      cuisine: 'South Indian',
      price_per_person: 180,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      id: 'kanchi_rest4',
      name: 'Hotel Sakthi Ganapathi',
      city_id: 'kanchipuram',
      rating: 4.2,
      location: 'City center',
      description: 'Serves traditional Tamil meals',
      cuisine: 'South Indian',
      price_per_person: 150,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      id: 'kanchi_rest5',
      name: 'Balaji Bhavan',
      city_id: 'kanchipuram',
      rating: 4.1,
      location: 'City center',
      description: 'Popular for quick service and tasty food',
      cuisine: 'South Indian',
      price_per_person: 170,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    }
  ],
  activities: [
    {
      id: 'kanchi_act1',
      name: 'Kamakshi Amman Temple',
      city_id: 'kanchipuram',
      rating: 4.8,
      activity_type: 'religious',
      suitable_for: ['family', 'friends'],
      location: 'City center',
      description: 'A prominent Shakti temple in the city',
      duration: '1-2 hours',
      price_per_person: 0,
      cost_per_person: 0,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      id: 'kanchi_act2',
      name: 'Ekambareswarar Temple',
      city_id: 'kanchipuram',
      rating: 4.7,
      activity_type: 'religious',
      suitable_for: ['family', 'friends'],
      location: 'City center',
      description: 'One of the largest temples dedicated to Lord Shiva',
      duration: '1-2 hours',
      price_per_person: 0,
      cost_per_person: 0,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      id: 'kanchi_act3',
      name: 'Kanchi Kudil',
      city_id: 'kanchipuram',
      rating: 4.5,
      activity_type: 'cultural',
      suitable_for: ['family', 'friends'],
      location: 'City center',
      description: 'A heritage home showcasing traditional Tamil culture',
      duration: '1-2 hours',
      price_per_person: 50,
      cost_per_person: 50,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      id: 'kanchi_act4',
      name: 'Varadharaja Perumal Temple',
      city_id: 'kanchipuram',
      rating: 4.6,
      activity_type: 'religious',
      suitable_for: ['family', 'friends'],
      location: 'City center',
      description: 'Known for its magnificent architecture',
      duration: '1-2 hours',
      price_per_person: 0,
      cost_per_person: 0,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      id: 'kanchi_act5',
      name: 'Kailasanathar Temple',
      city_id: 'kanchipuram',
      rating: 4.7,
      activity_type: 'religious',
      suitable_for: ['family', 'friends'],
      location: 'City center',
      description: 'An ancient temple with intricate carvings',
      duration: '1-2 hours',
      price_per_person: 0,
      cost_per_person: 0,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    }
  ]
};

async function addKanchipuramData() {
  try {
    // Add city data
    await addDoc(collection(db, collections.cities), kanchipuramData.city);

    // Add hotels
    for (const hotel of kanchipuramData.hotels) {
      await addDoc(collection(db, collections.hotels), hotel);
    }

    // Add restaurants
    for (const restaurant of kanchipuramData.restaurants) {
      await addDoc(collection(db, collections.restaurants), restaurant);
    }

    // Add activities
    for (const activity of kanchipuramData.activities) {
      await addDoc(collection(db, collections.activities), activity);
    }

    console.log('Kanchipuram data added successfully!');
  } catch (error) {
    console.error('Error adding Kanchipuram data:', error);
  }
}

addKanchipuramData(); 