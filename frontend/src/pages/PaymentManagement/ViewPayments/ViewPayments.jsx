import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import requestAuth from '../../../api/requestAuth';

const ViewPayment = () => {
   const [payments, setPayments] = useState([]);

   // Fetch payments data from the backend API
   useEffect(() => {
      const fetchPayments = async () => {
         try {
            const response = await axios.get('/api/payments', requestAuth); // Assuming this is your backend API endpoint to fetch payments
            setPayments(response.data.payments);
         } catch (error) {
            console.error('Error fetching payments:', error);
         }
      };
      fetchPayments();
   }, []);
   return (
      <div className="container mx-auto px-4">
         <h4 className="text-2xl font-bold mb-4">Payments</h4>
         <table className="table-auto border-collapse border-2 border-gray-500 w-full">
            <thead>
               <tr>
                  <th className="border-2 border-gray-400 px-4 py-2 text-gray-800">
                     Student Name
                  </th>
                  <th className="border-2 border-gray-400 px-4 py-2 text-gray-800">
                     Course Name
                  </th>
                  <th className="border-2 border-gray-400 px-4 py-2 text-gray-800">
                     Billing Date
                  </th>
                  <th className="border-2 border-gray-400 px-4 py-2 text-gray-800">
                     Billing Time
                  </th>
                  <th className="border-2 border-gray-400 px-4 py-2 text-gray-800">
                     Billing Value
                  </th>
               </tr>
            </thead>
            <tbody className="text-center">
               {payments.map((payment, index) => (
                  <tr key={index} className="bg-gray-100">
                     <td className="border-2 border-gray-400 px-4 py-2">
                        <Link to={`/payment/${payment._id}`}>
                           {payment.studentName}
                        </Link>
                     </td>
                     <td className="border-2 border-gray-400 px-4 py-2">
                        {payment.courseName}
                     </td>
                     <td className="border-2 border-gray-400 px-4 py-2">
                        {new Date(payment.createdAt).getFullYear()}/
                        {String(
                           new Date(payment.createdAt).getMonth() + 1
                        ).padStart(2, '0')}
                        /
                        {String(new Date(payment.createdAt).getDate()).padStart(
                           2,
                           '0'
                        )}
                     </td>
                     <td className="border-2 border-gray-400 px-4 py-2">
                        {String(
                           new Date(payment.createdAt).getHours()
                        ).padStart(2, '0')}
                        :
                        {String(
                           new Date(payment.createdAt).getMinutes()
                        ).padStart(2, '0')}
                        :
                        {String(
                           new Date(payment.createdAt).getSeconds()
                        ).padStart(2, '0')}
                     </td>
                     <td className="border-2 border-gray-400 px-4 py-2">
                        {payment.billingAmount}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default ViewPayment;
