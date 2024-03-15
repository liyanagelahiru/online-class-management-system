import { Link } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';
import SignOut from '../SignOut';

import { FaUserCircle } from 'react-icons/fa';
import { ImUserCheck } from 'react-icons/im';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import { useState } from 'react';

const Header = () => {
   const [avatarComponent, setAvatarComponent] = useState(
      <FaUserCircle size={40} />
   );
   const [isSigned, setIsSigned] = useState(false);

   const profileIconMenuHandler = () => {
      if (localStorage.getItem('token')) {
         setAvatarComponent(<ImUserCheck size={40} />);
         setIsSigned(true);
      } else {
         setAvatarComponent(<FaUserCircle size={40} />);
         setIsSigned(false);
      }
   };

   return (
      <div className="navbar bg-cold-gray h-[70px] text-base-content">
         {/* Navbar Title */}
         <div className="flex-1">
            <Link to="/" className="font-light font-Rowdies text-base">
               MADURA KODITHUWAKKU
            </Link>
         </div>
         {/* NavBar List */}
         <div className="flex-none">
            <ul className="menu menu-horizontal px-2">
               <li>
                  <Link to="/">HOME</Link>
               </li>
               <li>
                  <Link to="/">COURSES</Link>
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
                  <div className="w-10 rounded-full">{avatarComponent}</div>
               </div>

               {/* User Icon DropDown */}
               {isSigned ? (
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
