import dotenv from 'dotenv';
dotenv.config();

let configs;

// database uri
configs = {
   mongodb: { uri: process.env.MONGODB_URI },
   backend: { port: process.env.BACKEND_PORT },
   JWT_SECRET: process.env.JWT_SECRET,
   EMAIL: { mail: process.env.EMAIL, pass: process.env.EMAIL_PASS },
   RESEND_EMAIL_API: process.env.RESEND_EMAIL_API
};

export default configs;
