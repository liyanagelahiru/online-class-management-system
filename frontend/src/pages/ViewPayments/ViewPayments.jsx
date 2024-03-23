import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewPayment = () => {
   const [payments, setPayments] = useState([]);

   // Fetch payments data from the backend API
   useEffect(() => {
      const fetchPayments = async () => {
         try {
            const response = await axios.get('/api/payments'); // Assuming this is your backend API endpoint to fetch payments
            setPayments(response.data.payments);
         } catch (error) {
            console.error('Error fetching payments:', error);
         }
      };

      fetchPayments();
   }, []); // Empty
   const userId = '65fd1e87587a5297c7952298';
   return (
      <div className="container mx-auto px-4">
         <h4 className="text-2xl font-bold mb-4">Payments</h4>
         <table className="table-auto border-collapse border-2 border-gray-500 w-full">
            <thead>
               <tr>
                  <th className="border-2 border-gray-400 px-4 py-2 text-gray-800">
                     User Name
                  </th>
                  <th className="border-2 border-gray-400 px-4 py-2 text-gray-800">
                     Course Name
                  </th>
                  <th className="border-2 border-gray-400 px-4 py-2 text-gray-800">
                     Date
                  </th>
                  <th className="border-2 border-gray-400 px-4 py-2 text-gray-800">
                     Value
                  </th>
               </tr>
            </thead>
            <tbody className="text-center">
               {payments.map((payment, index) => (
                  <tr key={index} className="bg-gray-100">
                     <td className="border-2 border-gray-400 px-4 py-2">
                        <Link to={`/payment/${userId}`}>
                           {payment.userName} Sample User
                        </Link>
                     </td>
                     <td className="border-2 border-gray-400 px-4 py-2">
                        {payment.enrolledCourse}
                     </td>
                     <td className="border-2 border-gray-400 px-4 py-2">
                        2024/1/1
                     </td>
                     <td className="border-2 border-gray-400 px-4 py-2">
                        {payment.paidValue}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default ViewPayment;
