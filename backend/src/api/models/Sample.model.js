import mongoose from 'mongoose';

export const SampleSchema = new mongoose.Schema({
   name: {
      type: String
   }
});

export default mongoose.model.Samples || mongoose.model('Sample', SampleSchema);
