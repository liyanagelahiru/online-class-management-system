import { useFormik } from 'formik';
import { PiUserCirclePlusLight } from 'react-icons/pi';
import { usernameValidate } from '../../helper/validate';
import { useAuthStore } from '../../store/store';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SignUp = () => {
   const setUsername = useAuthStore(state => state.setUsername);

   // Set Username value from the form
   const formik = useFormik({
      initialValues: {
         username: ''
      },
      validate: usernameValidate,
      validateOnBlur: false,
      validateOnChange: false,
      onSubmit: async values => {
         setUsername(values.username);
         console.log(values.username);
      }
   });

   return (
      <dialog id="sign-up" className="modal">
         <Toaster position="top-center" reverseOrder={false}></Toaster>
         <div className="modal-box bg-blue-800">
            {/* Close Button */}
            <form method="dialog">
               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
               </button>
            </form>

            {/* Sign In Form */}
            {/* <SignIn /> */}
            <h3 className="font-bold text-lg text-center">SIGN UP</h3>
            <form className="py-1" onSubmit={formik.handleSubmit}>
               <div className="flex items-center justify-center p-3">
                  <PiUserCirclePlusLight size={70} />
               </div>
               <div className="textbox flex flex-col items-center gap-6">
                  <input
                     {...formik.getFieldProps('username')}
                     type="text"
                     placeholder="Username"
                  />
                  <button type="submit">SIGN UP</button>
               </div>
               <div>
                  <p className="text-center py-4">
                     <span className="text-gray-500">
                        Have an Account?{' '}
                        <Link
                           onClick={() =>
                              document.getElementById('sign-in').showModal()
                           }
                           className="text-red-500">
                           Register Now
                        </Link>
                     </span>
                  </p>
               </div>
            </form>
            <p className="py-4"></p>
         </div>
      </dialog>
   );
};

export default SignUp;
