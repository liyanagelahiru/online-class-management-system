import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

import { registerValidation } from '../helper/validate';
import { registerUser } from '../helper/helper';

export default function Register() {
   const navigate = useNavigate();
   const formik = useFormik({
      initialValues: {
         email: '',
         username: '',
         password: ''
      },
      validate: registerValidation,
      validateOnBlur: false,
      validateOnChange: false,
      onSubmit: async (values) => {
         // values = await Object.assign(values);
         console.log(values);
         let registerPromise = registerUser(values);
         toast.promise(registerPromise, {
            loading: 'Registering...',
            success: <b>Registration Successfully!</b>,
            error: <b>Could not Register</b>
         });
         registerPromise.then(() => {
            navigate('/');
         });
      }
   });

   return (
      <div className='container mx-auto'>
         <Toaster position='top-center' reverseOrder={false}></Toaster>

         <div className='flex h-screen'>
            <div>
               <div className='title flex flex-col items-center'>
                  <h4 className='text-5xl font-bold'>Register</h4>
                  <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                     Explore more with connecting with us.
                  </span>
               </div>

               <form className='py-1' onSubmit={formik.handleSubmit}>
                  <div className='profile flex justify-center py-4'>
                     <label htmlFor='profile'></label>
                     <input type='file' id='profile' name='profile' />
                  </div>

                  <div className='textbox flex flex-col items-center gap-6'>
                     <input {...formik.getFieldProps('email')} type='text' placeholder='Email*' />
                     <input {...formik.getFieldProps('username')} type='text' placeholder='Username*' />
                     <input {...formik.getFieldProps('password')} type='password' placeholder='Password*' />

                     <button type='submit'>Register</button>
                  </div>

                  <div className='text-center py-4'>
                     <span className='text-gray-500'>
                        Already Registered?{' '}
                        <Link className='text-red-500' to='/'>
                           Login Now
                        </Link>
                     </span>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
