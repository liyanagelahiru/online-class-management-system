import { useFormik } from 'formik';
import { validatePayment } from '../../validations/paymentValidations';
import { insertPayment } from '../../api/paymentAPI';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { Button } from '../../components';

const UpdateEnrollment = () => {
   const location = useLocation();
   const { courseName, courseValue, offerValue } = location.state || {};
   const formik = useFormik({
      initialValues: {
         holderFName: '',
         holderLName: '',
         cardNumber: '',
         exDate: '',
         csvNum: ''
      },
      validate: validatePayment,
      validateOnBlur: false,
      validateOnChange: false,
      onSubmit: async values => {
         const otherData = {
            courseName: courseName,
            courseValue: courseValue,
            offerValue: offerValue
         };
         values = { ...values, ...otherData };
         console.log(values);
         let paymentPromise = insertPayment(values);
         toast.promise(paymentPromise, {
            loading: 'Payment Processing...',
            success: <b>Payment Successfully!</b>,
            error: <b>Could not Pay</b>
         });
      }
   });
   return (
      <div className="w-full p-4 ">
         <Toaster position="top-center" reverseOrder={false}></Toaster>
         <div className="text-center py-3 text-xl">
            <p>Pay To Enroll</p>
         </div>

         <div className="grid grid-cols-2 textbox items-center gap-4">
            <form onSubmit={formik.handleSubmit} className="grid">
               {/* Card Payments */}
               <div className="grid grid-cols-2 gap-4">
                  <div className="grid grid-rows-2">
                     <label htmlFor="holderFName">
                        Card Holder&apos;s First Name
                     </label>
                     <input
                        {...formik.getFieldProps('holderFName')}
                        type="text"
                        id="holderFName"
                        name="holderFName"
                        placeholder="Card Holder First Name"
                        className="px-4 h-[27px] w-full border-2 border-[#00000066] rounded-lg"
                     />
                  </div>
                  <div className="grid grid-rows-2">
                     <label htmlFor="holderLName">
                        Card Holder&apos;s Last Name
                     </label>
                     <input
                        {...formik.getFieldProps('holderLName')}
                        type="text"
                        id="holderLName"
                        name="holderLName"
                        placeholder="Card Holder Last Name"
                        className="px-4 h-[27px] w-full border-2 border-[#00000066] rounded-lg"
                     />
                  </div>
               </div>
               <div>
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                     {...formik.getFieldProps('cardNumber')}
                     type="text"
                     id="cardNumber"
                     name="cardNumber"
                     placeholder="Card Number"
                     className="px-4 h-[27px] w-full border-2 border-[#00000066] rounded-lg"
                  />
               </div>
               <div>
                  <div>
                     <label htmlFor="exDate">Expiry Date</label>
                     <input
                        {...formik.getFieldProps('exDate')}
                        type="text"
                        id="exDate"
                        name="exDate"
                        placeholder="Expiry Date"
                        className="px-4 h-[27px] w-full border-2 border-[#00000066] rounded-lg"
                     />
                  </div>
                  <div>
                     <label htmlFor="csvNum">CSV</label>
                     <input
                        {...formik.getFieldProps('csvNum')}
                        type="text"
                        id="csvNum"
                        name="csvNum"
                        placeholder="CSV"
                        className="px-4 h-[27px] w-full border-2 border-[#00000066] rounded-lg"
                     />
                  </div>
               </div>
               <Button
                  type="submit"
                  className="btn w-40"
                  text="Pay And Enroll"
               />
            </form>
            <div>
               <div>Payment Details</div>
               <div>
                  <p>Course Name: {courseName}</p>
                  <p>Course Fee: Rs. {courseValue}</p>
                  {offerValue !== 0 && <p>Offer Value: Rs. {offerValue}</p>}
                  <p>Total Payable: Rs. {courseValue - offerValue}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UpdateEnrollment;
