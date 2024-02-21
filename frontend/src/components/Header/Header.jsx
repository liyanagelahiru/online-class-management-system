import { Link, useNavigate } from 'react-router-dom';
import Avatar from './Avatar';
import ThemeSwitch from './ThemeSwitch';

import { FaUserCircle } from 'react-icons/fa';
import SignIn from '../SignIn';

const Header = () => {
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
         {/* User Icon Dropdown */}
         <SignIn /> {/* Sign In Pop Up function */}
         <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
               {/* User Icon */}
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                     <FaUserCircle size={40} />
                  </div>
               </div>

               {/* User Icon DropDown */}
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
                  {/* <li>
                     <a>Settings</a>
                  </li>
                  <li>
                     <a>Log Out</a>
                  </li> */}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Header;
// const Header = () => {
//    const navigate = useNavigate();

//    return (
//       <div>
//          <div>{/* <SignUp /> */}</div>
//          <div className="navbar bg-primary text-primary-content px-3">
//             <div className="navbar-start">
//                <div className="dropdown">
//                   {/* Dropdow Icon */}
//                   <div
//                      tabIndex={0}
//                      role="button"
//                      className="btn btn-ghost lg:hidden">
//                      <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor">
//                         <path
//                            strokeLinecap="round"
//                            strokeLinejoin="round"
//                            strokeWidth="2"
//                            d="M4 6h16M4 12h8m-8 6h16"
//                         />
//                      </svg>
//                   </div>
//                   {/* Dropdown Content */}
//                   <ul
//                      tabIndex={0}
//                      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52">
//                      <li>
//                         <Link to="/">HOME</Link>
//                      </li>
//                      <li>
//                         <a>COURSES</a>
//                         <ul className="p-2">
//                            <li>
//                               <a>Theory Clases</a>
//                            </li>
//                            <li>
//                               <a>Paper Discussions</a>
//                            </li>
//                         </ul>
//                      </li>
//                      <li>
//                         <Link to="/about">ABOUT</Link>
//                      </li>
//                      <li>
//                         <Link to="/contact">CONTACT US</Link>
//                      </li>
//                   </ul>
//                </div>
//                <button
//                   className="hidden sm:inline-block btn btn-ghost text-xl"
//                   onClick={() => navigate('/')}>
//                   MADURA KODITHUWAKKU
//                </button>
//             </div>
//             {/* Center Block of Header */}
//             <div className="navbar-center hidden lg:flex">
//                <ul className="menu menu-horizontal px-1">
//                   <li>
//                      <Link to="/">HOME</Link>
//                   </li>
//                   <li>
//                      <details>
//                         <summary>COURSES</summary>
//                         <ul className="p-2 z-[1] shadow menu bg-primary w-40 dropdown-content rounded-box">
//                            <li>
//                               <Link>Theory Clases</Link>
//                            </li>
//                            <li>
//                               <Link>Paper Discussions</Link>
//                            </li>
//                         </ul>
//                      </details>
//                   </li>
//                   <li>
//                      <Link to="/about">ABOUT</Link>
//                   </li>
//                   <li>
//                      <Link to="/contact">CONTACT US</Link>
//                   </li>
//                </ul>
//             </div>
//             {/* End Of Header */}
//             <div className="navbar-end p-px">
//                <div className="pr-3">
//                   <ThemeSwitch />
//                </div>
//                <div className="dropdown dropdown-end">
//                   <Avatar />
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };
