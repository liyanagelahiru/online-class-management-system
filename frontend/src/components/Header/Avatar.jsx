import { Link } from 'react-router-dom';

const Avatar = () => {
   return (
      <div>
         <div
            tabIndex={0}
            role="button"
            className="btn btn-circle avatar btn-ghost">
            <div className="w-10 rounded-full">
               <img alt="User" src="https://i.pravatar.cc/500?img=32" />
            </div>
         </div>
         <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary rounded-box w-40">
            <li>
               <Link
                  className="justify-between"
                  onClick={() =>
                     document.getElementById('sign-up').showModal()
                  }>
                  Profile
               </Link>
            </li>
            <li>
               <a>Settings</a>
            </li>
            <li>
               <a>Sign Out</a>
            </li>
         </ul>
      </div>
   );
};

export default Avatar;
