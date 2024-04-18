import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import requestAuth from '../../api/requestAuth';
import { Button } from '../../components';

const PaymentDetails = () => {
   const [payment, setPayment] = useState();
   const { id } = useParams();
   const navigate = useNavigate();

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
   }, [id]);

   const verifyUnenroll = async () => {
      document.getElementById('unenroll_modal').showModal();
   };

   const handleDelete = async () => {
      try {
         await axios.delete(`/api/unenroll/${id}`, requestAuth);
         navigate('/payments');
      } catch (error) {
         console.error('Error deleting payment:', error);
      }
   };

   if (!payment) {
      return <div>Wrong Payment ID...</div>;
   }

   return (
      <div className="container mx-auto px-4">
         {/* Unenrollment Verification Modal */}
         <div>
            <dialog id="unenroll_modal" className="modal">
               <div className="modal-box">
                  <h3 className="font-bold text-lg">Are You Sure...?</h3>
                  <p className="py-4">
                     Please verify that you want to remove {payment.studentName}{' '}
                     from this Course.
                  </p>
                  <div className="modal-action">
                     <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Cancel</button>
                     </form>
                     <button
                        onClick={handleDelete}
                        className="btn bg-[red] text-[white] hover:bg-[darkred]">
                        Unenroll
                     </button>
                  </div>
               </div>
            </dialog>
         </div>
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
         <div className="grid grid-cols-2">
            <div className="p-5">
               <Button text="Update Payment" />
            </div>
            <div className="p-5">
               <Button text="Delete Payment" onClick={verifyUnenroll} />
            </div>
         </div>
      </div>
   );
};

export default PaymentDetails;
