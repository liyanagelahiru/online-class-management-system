import { useState } from 'react';
import { useFormik } from 'formik';
import { PiUserCircleLight } from 'react-icons/pi';
import { emailValidate, passwordValidate } from '../../helper/validate';
import { useAuthStore } from '../../store/store';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { verifyPassword } from '../../helper/helper';

const SignIn = () => {
   const setEmail = useAuthStore(state => state.setEmail);

   const [showPasswordForm, setShowPasswordForm] = useState(false);
   const [showUsernameForm, setShowUsernameForm] = useState(true);
   const [showModal, setShowModal] = useState(true);

   const navigate = useNavigate();

   // Set Username value from the form
   const userFormik = useFormik({
      initialValues: {
         email: ''
      },
      validate: emailValidate,
      validateOnBlur: false,
      validateOnChange: false,
      onSubmit: async values => {
         setEmail(values.email);
         setShowPasswordForm(true);
      }
   });

   // Set Username value from the form
   const passwordFormik = useFormik({
      initialValues: {
         password: ''
      },
      validate: passwordValidate,
      validateOnBlur: false,
      validateOnChange: false,
      onSubmit: async values => {
         let loginPromise = verifyPassword({
            email: userFormik.values.email,
            password: values.password
         });
         toast.promise(loginPromise, {
            loading: 'Logging In...',
            success: <b>Logged In Successfully!</b>,
            error: <b>Could not Login</b>
         });

         loginPromise.then(res => {
            let { token } = res.data;
            localStorage.setItem('token', token);
            setShowUsernameForm(false);
            setShowPasswordForm(false);
            setShowModal(false);
            navigate('/profile');
         });
      }
   });

   if (showModal) {
      return (
         <dialog id="sign-in" className="modal">
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <div className="modal-box bg-light-gray">
               {/* Close Button */}
               <form method="dialog">
                  <button
                     className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                     onClick={() => {
                        setShowPasswordForm(false);
                        setShowUsernameForm(true);
                     }}>
                     ✕
                  </button>
               </form>

               {/* Sign In Form */}
               <h3 className="font-bold text-lg text-center">SIGN IN</h3>
               {showPasswordForm ? (
                  // Password form
                  <form className="py-1" onSubmit={passwordFormik.handleSubmit}>
                     {/* Password form fields */}
                     <div className="textbox flex flex-col items-center gap-6">
                        <input
                           {...passwordFormik.getFieldProps('password')}
                           type="password"
                           placeholder="Password"
                        />
                        <button type="submit">SIGN IN</button>
                     </div>
                  </form>
               ) : (
                  // Username form
                  <form className="py-1" onSubmit={userFormik.handleSubmit}>
                     {/* Username form fields */}
                     <div className="flex items-center justify-center p-3">
                        <PiUserCircleLight size={120} />
                     </div>
                     <div className="textbox flex flex-col items-center gap-5">
                        <div className="flex flex-col w-[calc(100%-5rem)]">
                           <label htmlFor="signInEmail">E-mail</label>
                           <input
                              {...userFormik.getFieldProps('email')}
                              id="signInEmail"
                              type="email"
                              placeholder="Email"
                              autoComplete="on"
                              className="px-4 h-[27px] border-2 border-[#00000066] rounded-lg w-full"
                           />
                        </div>
                        <button
                           type="submit"
                           className="bg-[#0057FF] hover:bg-[#000D85] text-[#FFFFFF] font-bold py-2 px-16 rounded-full">
                           NEXT
                        </button>
                     </div>
                     <div>
                        <p className="text-center py-4">
                           <span className="text-gray-500">
                              Not a member yet?{' '}
                              <Link
                                 onClick={() =>
                                    document
                                       .getElementById('sign-up')
                                       .showModal()
                                 }
                                 className="text-[#0077B6]">
                                 Sign Up
                              </Link>
                           </span>
                        </p>
                     </div>
                  </form>
               )}
               <p className="py-4"></p>
            </div>
         </dialog>
      );
   }
};

export default SignIn;
