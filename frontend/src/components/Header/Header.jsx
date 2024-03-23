import { Link } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';
import SignOut from '../SignOut';

import { FiUser } from 'react-icons/fi';
import { LuUserCheck } from 'react-icons/lu';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import { useState, useEffect } from 'react';

const Header = () => {
   const [avatarComponent, setAvatarComponent] = useState(<FiUser size={24} />);
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
         setIsLoggedIn(true);
         setAvatarComponent(<LuUserCheck size={24} />);
      } else {
         setIsLoggedIn(false);
         setAvatarComponent(<FiUser size={24} />);
      }
   }, []);

   return (
      <div className="fixed top-0 left-0 w-full navbar bg-cold-gray h-[70px] text-base-content z-50 shadow-[0px_8px_12px_-6px_rgba(0,0,0,0.8)]">
         {/* Navbar Title */}
         <div className="flex-none">
            <Link to="/" className="font-light font-Rowdies text-base">
               MADURA KODITHUWAKKU
            </Link>
         </div>
         {/* NavBar List */}
         <div className="place-content-center w-full">
            <ul className="menu menu-horizontal px-3">
               <li>
                  <Link to="/">HOME</Link>
               </li>
               <li>
                  <Link to="/courses">COURSES</Link>
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
                  // onClick={profileIconMenuHandler}
                  tabIndex={0}
                  role="button"
                  className="avatar">
                  <div>{avatarComponent}</div>
               </div>

               {/* User Icon DropDown */}
               {isLoggedIn ? (
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
