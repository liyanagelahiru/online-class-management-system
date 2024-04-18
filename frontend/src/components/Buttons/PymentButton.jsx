import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthorizedUser } from '../../middleware/auth';
import { checkPayment } from '../../api/paymentAPI';

// get button text in a prop
const PaymentButton = ({ cName, price, offer, pathname }) => {
   const navigate = useNavigate();
   const { isAuthenticated } = AuthorizedUser();
   const [paymentStatus, setPaymentStatus] = useState(null);

   useState(() => {
      checkPayment()
         .then(() => {
            setPaymentStatus(true);
         })
         .catch(() => {
            setPaymentStatus(false);
         });
   }, []);

   const handleClick = () => {
      if (!isAuthenticated) {
         // Swall alert with Login and No button
         Swal.fire({
            title: 'You need to Sign In to enroll this course',
            showDenyButton: true,
            confirmButtonText: `Sign In`,
            denyButtonText: `Later`,
            icon: 'info'
         }).then(result => {
            if (result.isConfirmed) {
               navigate('/signin');
            } else if (result.isDenied) {
               console.log('User denied');
            }
         });
      } else if (paymentStatus === false) {
         console.log('Enrolling...');
         navigate('/payment', {
            state: {
               courseName: cName,
               courseValue: price,
               offerValue: offer
            }
         });
      } else if (paymentStatus === true) {
         console.log('Viewing...');
         navigate({ pathname });
      }
   };

   // Prop types
   PaymentButton.propTypes = {
      btnText: PropTypes.string.isRequired,
      cName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      offer: PropTypes.number.isRequired,
      pathname: PropTypes.string.isRequired
   };

   return (
      <div className="m-10 flex justify-center">
         <button
            onClick={handleClick}
            className={
               typeof paymentStatus === 'boolean'
                  ? 'bg-[#0057FF] hover:bg-[#000D85] text-[#FFFFFF] font-bold py-2 px-12 rounded-full w-auto'
                  : 'skeleton bg-[#0057FF] text-[#0057FF] font-bold py-2 px-12 rounded-full opacity-10 cursor-not-allowed w-auto'
            }>
            {paymentStatus === true
               ? 'View'
               : paymentStatus === false
               ? 'Enroll Now'
               : 'Loading'}
         </button>
      </div>
   );
};

export default PaymentButton;
