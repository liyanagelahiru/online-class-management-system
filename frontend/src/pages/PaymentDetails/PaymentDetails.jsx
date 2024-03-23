import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import requestAuth from '../../helper/requestAuth';
import { Button } from '../../components';

const PaymentDetails = () => {
   const [payment, setPayment] = useState();
   const { id } = useParams();

   // Fetch payment details for the specified user ID
   useEffect(() => {
      const fetchPaymentDetails = async () => {
         try {
            const response = await axios.get(`/api/payment/${id}`, requestAuth);
            setPayment(response.data.payment);
         } catch (error) {
            console.error('Error fetching payment details:', error);
         }
      };

      fetchPaymentDetails();
   }, [id]); // Include userId in the dependency array to fetch new data when userId changes

   if (!payment) {
      return <div>Wrong Payment ID...</div>;
   }

   return (
      <div className="container mx-auto px-4">
         <h4 className="text-2xl font-bold mb-4">Payment Details</h4>
         <div>
            <p>Enrolled Course: {payment.courseName}</p>
            <p>Value: {payment.billingAmount}</p>
            <p>email: {payment.email}</p>
            <p>studentName: {payment.studentName}</p>
            <p>cardHolderName: {payment.cardHolderName}</p>
            <p>courseValue: {payment.courseValue}</p>
            <p>createdAt: {payment.createdAt}</p>
            <p>updatedAt: {payment.updatedAt}</p>
         </div>
         <div>
            <Button text="Update Payment" />
         </div>
      </div>
   );
};

export default PaymentDetails;
