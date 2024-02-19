import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
   /*
   {
    "username": "Test User1",
    "password": "Test123",
    "email": "test@mail.com",
    "firstName": "TestF",
    "lastName": "TestL",
    "mobile": 0987655233,
    "address": "123/dsds, sdasdS, SWS",
    "profile": ""
   }
   */
   username: {
      type: String,
      required: [true, 'Username is required'],
      unique: [true, 'Username already exists']
   },
   password: {
      type: String,
      required: [true, 'Password is required'],
      unique: false
   },
   email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true
   },
   firstName: { type: String },
   lastName: { type: String },
   mobile: { type: Number },
   address: { type: String },
   profile: { type: String }
});

export default mongoose.model.Users || mongoose.model('User', UserSchema);
