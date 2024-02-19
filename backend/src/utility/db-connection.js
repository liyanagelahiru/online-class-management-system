import mongoose from 'mongoose';
import config from '../config/index.js';

const uri = config.mongodb.uri;

async function connect() {
   try {
      mongoose.set('strictQuery', true);
      await mongoose.connect(uri);
      console.log('Connected to MongoDB database');
      return true;
   } catch (error) {
      console.log('Cannot connect to the database');
   }
}

export default connect;
