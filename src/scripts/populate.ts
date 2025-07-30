import { populateDatabase } from '../lib/populateDatabase';

// Run the population script
console.log('Starting database population...');
populateDatabase()
  .then(() => {
    console.log('Database population completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error populating database:', error);
    process.exit(1);
  }); 