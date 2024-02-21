import { useState } from 'react';
import { useFormik } from 'formik';
import { FaUserCircle } from 'react-icons/fa';
import { usernameValidate, passwordValidate } from '../../helper/validate';
import { useAuthStore } from '../../store/store';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { verifyPassword } from '../../helper/helper';

const SignIn = () => {
   const setUsername = useAuthStore(state => state.setUsername);

   const [showPasswordForm, setShowPasswordForm] = useState(false);
   const [showUsernameForm, setShowUsernameForm] = useState(true);
   const [showModal, setShowModal] = useState(true);

   const navigate = useNavigate();

   // Set Username value from the form
   const userFormik = useFormik({
      initialValues: {
         username: ''
      },
      validate: usernameValidate,
      validateOnBlur: false,
      validateOnChange: false,
      onSubmit: async values => {
         setUsername(values.username);
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
            username: userFormik.values.username,
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
            <div className="modal-box bg-blue-800">
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
                        <FaUserCircle size={70} />
                     </div>
                     <div className="textbox flex flex-col items-center gap-6">
                        <input
                           {...userFormik.getFieldProps('username')}
                           type="text"
                           placeholder="Username"
                        />
                        <button type="submit">NEXT</button>
                     </div>
                     <div>
                        <p className="text-center py-4">
                           <span className="text-gray-500">
                              Not a Member{' '}
                              <Link to="/signup" className="text-red-500">
                                 Register Now
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
