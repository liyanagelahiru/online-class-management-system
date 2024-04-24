import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import requestAuth from '../../../api/requestAuth';
import { deletePayment } from '../../../api/paymentAPI';

const ViewPayment = () => {
   const [payments, setPayments] = useState([]);

   const navigate = useNavigate();

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

   // View handler
   const handleView = async paymentId => {
      navigate(`/payment/${paymentId}`);
   };

   // Update handler
   const handleUpdate = async paymentId => {
      navigate(`/payment/update/${paymentId}`);
   };

   return (
      <div className="body-content min-h-[calc(100vh-270px)]">
         <h4 className="font-semibold text-3xl my-10 text-center">Payments</h4>
         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-[gray] dark:text-[gray]">
               <thead className="text-xs text-[white] uppercase bg-[gray] dark:bg-[black] dark:text-[white] text-center">
                  <tr>
                     <th scope="col" className="px-6 py-3">
                        Student Name
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Course Name
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Billing Date
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Billing Time
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Valid Date
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Billing Value
                     </th>
                     <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Actions</span>
                     </th>
                  </tr>
               </thead>
               <tbody className="text-center">
                  {payments.map((payment, index) => (
                     <tr
                        key={index}
                        className="bg-[white] border-b dark:bg-gray-800 dark:border-[gray] hover:bg-silver-mist dark:hover:bg-silver-mist">
                        <td className="px-6 py-4">{payment.studentName}</td>
                        <td className="px-6 py-4">{payment.courseName}</td>
                        <td className="px-6 py-4">
                           {new Date(payment.createdAt).getFullYear()}/
                           {String(
                              new Date(payment.createdAt).getMonth() + 1
                           ).padStart(2, '0')}
                           /
                           {String(
                              new Date(payment.createdAt).getDate()
                           ).padStart(2, '0')}
                        </td>
                        <td className="px-6 py-4">
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
                        <td className="px-6 py-4">
                           {new Date(payment.expireDate).getFullYear()}/
                           {String(
                              new Date(payment.expireDate).getMonth() + 1
                           ).padStart(2, '0')}
                           /
                           {String(
                              new Date(payment.expireDate).getDate()
                           ).padStart(2, '0')}
                        </td>
                        <td className="px-6 py-4">{payment.billingAmount}</td>
                        <td className="px-6 py-4">
                           <div className="">
                              {/* View Button */}
                              <button
                                 onClick={() => handleView(payment._id)}
                                 className="bg-[#0057FF] hover:bg-[#000D85] text-[white] font-bold py-1 px-4 rounded-full me-3">
                                 View
                              </button>
                              {/* Update Button */}
                              <button
                                 onClick={() => handleUpdate(payment._id)}
                                 className="bg-[#FFA500] hover:bg-[#FF8500] text-[white] font-bold py-1 px-4 rounded-full me-3">
                                 Update
                              </button>
                              {/* Delete Button */}
                              <button
                                 onClick={() => deletePayment(payment._id)}
                                 className="bg-[#FF0000] hover:bg-[#850000] text-[white] font-bold py-1 px-4 rounded-full">
                                 Delete
                              </button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ViewPayment;
