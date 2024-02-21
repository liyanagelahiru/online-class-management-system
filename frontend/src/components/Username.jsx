import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

import avatar from '../assets/react.svg';
import { usernameValidate } from '../helper/validate.js';
import { useAuthStore } from '../store/store.js';

export default function Username() {
   const navigate = useNavigate();
   const setUsername = useAuthStore(state => state.setUsername);

   const formik = useFormik({
      initialValues: {
         username: ''
      },
      validate: usernameValidate,
      validateOnBlur: false,
      validateOnChange: false,
      onSubmit: async values => {
         setUsername(values.username);
         navigate('/password');
      }
   });
   return (
      <div className="container mx-auto">
         <Toaster position="top-center" reverseOrder={false}></Toaster>

         <div className="flex h-screen">
            <div>
               <div className="title flex flex-col items-center">
                  <h4 className="text-5xl font-bold">Hello</h4>
                  <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                     Explore more with connecting with us.
                  </span>
               </div>

               <form className="py-1" onSubmit={formik.handleSubmit}>
                  <div className="profile flex justify-center py-4">
                     <img src={avatar} alt="avatar" />
                  </div>

                  <div className="textbox flex flex-col items-center gap-6">
                     <input
                        {...formik.getFieldProps('username')}
                        type="text"
                        placeholder="Username"
                     />
                     <button type="submit">Let&apos;s Go</button>
                  </div>

                  <div className="text-center py-4">
                     <span className="text-gray-500">
                        Not a Member{' '}
                        <Link className="text-red-500" to="/signup">
                           Register Now
                        </Link>
                     </span>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
