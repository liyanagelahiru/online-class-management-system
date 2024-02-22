import { Link } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';
import SignOut from '../SignOut';

import { FaUserCircle } from 'react-icons/fa';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import { useState } from 'react';

const Header = () => {
   const [getToken, setGetToken] = useState(false);

   const profileIconMenuHandler = () => {
      if (localStorage.getItem('token')) {
         setGetToken(true);
      } else {
         setGetToken(false);
      }
   };

   return (
      <div className="navbar bg-blue-800 text-primary-content">
         {/* Navbar Title */}
         <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
               COMBINED MATHS
            </Link>
         </div>
         {/* NavBar List */}
         <div className="flex-none">
            <ul className="menu menu-horizontal px-2">
               <li>
                  <Link to="/">HOME</Link>
               </li>
               <li>
                  <details>
                     <summary>COURSES</summary>
                     <ul className="p-2 bg-blue-800 rounded-t-none w-40">
                        <li>
                           <Link to="/theory-class">Theory Class</Link>
                        </li>
                        <li>
                           <a>Revision Class</a>
                        </li>
                        <li>
                           <a>Model Papers</a>
                        </li>
                     </ul>
                  </details>
               </li>
               <li>
                  <Link to="/about">ABOUT</Link>
               </li>
               <li>
                  <Link to="/contact">CONTACT</Link>
               </li>
            </ul>
         </div>
         {/* Theme Changer */}
         <div className="pr-3">
            <ThemeSwitch />
         </div>
         {/* User Icon Dropdown */}
         <SignIn /> {/* Sign In Pop Up function */}
         <SignUp /> {/* Sign Up Pop Up function */}
         <SignOut /> {/* Sign Out Pop Up function */}
         <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
               {/* User Icon */}
               <div
                  onClick={profileIconMenuHandler}
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                     <FaUserCircle size={40} />
                  </div>
               </div>

               {/* User Icon DropDown */}
               {getToken ? (
                  <ul
                     tabIndex={0}
                     className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-blue-800 rounded-box w-40">
                     <li>
                        <Link to="/profile">Profile</Link>
                     </li>
                     <li>
                        <Link
                           onClick={() =>
                              document.getElementById('sign-out').showModal()
                           }
                           className="justify-between">
                           Sign Out
                        </Link>
                     </li>
                  </ul>
               ) : (
                  <ul
                     tabIndex={0}
                     className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-blue-800 rounded-box w-40">
                     <li>
                        <Link
                           onClick={() =>
                              document.getElementById('sign-in').showModal()
                           }
                           className="justify-between">
                           Sign In
                        </Link>
                     </li>
                     <li>
                        <Link
                           onClick={() =>
                              document.getElementById('sign-up').showModal()
                           }
                           className="justify-between">
                           Sign Up
                        </Link>
                     </li>
                  </ul>
               )}
            </div>
         </div>
      </div>
   );
};

export default Header;
