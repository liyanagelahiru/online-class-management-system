import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
   email: {
      type: String
   },
   username: {
      type: String
   },
   enrolledCourse: {
      type: String,
      required: [true, 'Course is required']
   },
   paidValue: {
      type: Number,
      required: [true, 'Value is required']
   },
   offerValue: {
      type: Number,
      default: 0
   },
   paymentDate: {
      type: Date,
      default: Date.now
   }
});

export default mongoose.model('Payment', PaymentSchema);
