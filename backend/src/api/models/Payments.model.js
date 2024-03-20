import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
   user: {
      type: String
   },
   course: {
      type: String,
      required: [true, 'Course is required']
   },
   value: {
      type: Number,
      required: [true, 'Value is required']
   },
   paymentDate: {
      type: Date,
      default: Date.now
   }
});

export default mongoose.model.Payments ||
   mongoose.model('Payment', PaymentSchema);
