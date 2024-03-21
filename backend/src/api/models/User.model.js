import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
   firstName: {
      type: String,
      required: [true, 'First Name is required'],
      unique: false
   },
   lastName: {
      type: String,
      required: [true, 'Last Name is required'],
      unique: false
   },
   email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true
   },
   userRole: {
      type: String,
      default: 'student',
      required: [true, 'User Role is required'],
      unique: false
   },
   gender: {
      type: String,
      required: [true, 'Gender is required']
   },
   mobileNumber: {
      type: String,
      required: [true, 'Mobile Number is required'],
      unique: false
   },
   password: {
      type: String,
      required: [true, 'Password is required'],
      unique: false
   },
   registerDate: {
      type: Date,
      default: Date.now
   }

   // username: {
   //    type: String,
   //    required: [true, 'Username is required'],
   //    unique: [true, 'Username already exists']
   // },
});

export default mongoose.model.Users || mongoose.model('User', UserSchema);
