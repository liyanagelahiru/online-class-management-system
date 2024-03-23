import axios from 'axios';
import requestAuth from './requestAuth.js';

export async function doPayment(values) {
   try {
      const {
         data: { msg }
      } = await axios.post('/api/enroll', values, requestAuth);
      return Promise.resolve(msg);
   } catch (error) {
      return Promise.reject({ error });
   }
}
