import PaymentSchema from '../models/Payments.model.js';

/* Do Payment(POST) Data Controller */
export const insertPayment = async (req, res) => {
   try {
      // Extract user information from req.user
      const { username } = req.user;

      const { course, value } = req.body;

      // Create Payment Object with user information
      const payment = new PaymentSchema({ user: username, course, value });

      // Save Payment to Database
      await payment.save();

      // Send Success Message
      res.status(201).send({ msg: 'Payment Successfully' });
   } catch (error) {
      if (error.name === 'ValidationError') {
         // Validation Error
         const errors = Object.values(error.errors).map(val => val.message);
         return res.status(400).send({ error: errors });
      }
      // console.error(error);
      res.status(500).send({ error: 'Internal Server Error' });
   }
};

// View Payments (GET) Data Controller */
export const viewPayments = async (req, res) => {
   try {
      // Extract user information from req.user
      const { username } = req.user;

      // Get Payments from Database
      const payments = await PaymentSchema.find({ user: username });

      // Send Payments
      res.status(200).send(payments);
   } catch (error) {
      res.status(500).send({ error: 'Internal Server Error' });
   }
};
