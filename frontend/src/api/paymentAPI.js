import axios from 'axios';
import requestAuth from './requestAuth.js';

// Insert Payment
export async function insertPayment(values) {
   try {
      const response = await axios.post('/api/enroll', values, requestAuth);
      return response;
   } catch (error) {
      throw error.response;
   }
}

// Check Payment status
export async function checkPayment(cName) {
   try {
      const response = await axios.get(
         `/api/checkPayment/${cName}`,
         requestAuth
      );
      return response;
   } catch (error) {
      throw error.response;
   }
}

export async function getPayments() {
   try {
      const {
         data: { payment }
      } = await axios.get('/api/payment/:id', requestAuth);
      return Promise.resolve(payment);
   } catch (error) {
      return Promise.reject({ error });
   }
}
