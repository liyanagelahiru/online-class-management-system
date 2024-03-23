import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentDetails = ({ match }) => {
   const [payment, setPayment] = useState(null);
   const userId = '65fd1e87587a5297c7952298';

   // Fetch payment details for the specified user ID
   useEffect(() => {
      const fetchPaymentDetails = async () => {
         try {
            const response = await axios.get(`/api/payment/${userId}`);
            setPayment(response.data.payment);
         } catch (error) {
            console.error('Error fetching payment details:', error);
         }
      };

      fetchPaymentDetails();
   }, [userId]); // Include userId in the dependency array to fetch new data when userId changes

   if (!payment) {
      return <div>Loading...</div>;
   }

   return (
      <div className="container mx-auto px-4">
         <h4 className="text-2xl font-bold mb-4">Payment Details</h4>
         <div>
            {/* <p>User Name: {payment.userName}</p> */}
            <p>Enrolled Course: {payment.enrolledCourse}</p>
            {/* <p>Date: {payment.date}</p> */}
            <p>Value: {payment.paidValue}</p>
         </div>
      </div>
   );
};

export default PaymentDetails;
