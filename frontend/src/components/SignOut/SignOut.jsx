import { useNavigate } from 'react-router-dom';

export default function SignOut() {
   const navigate = useNavigate();

   // User Logout handler function
   const userLogout = () => {
      localStorage.removeItem('token');
      navigate('/');
   };

   return (
      <div>
         <dialog id="sign-out" className="modal">
            <div className="modal-box bg-blue-800">
               <h3 className="font-bold text-lg">Confirm...!</h3>
               <p className="py-4">Want You Signing Out...?</p>
               <div className="modal-action p-4">
                  <form method="dialog">
                     <button className="btn">Stay Logged In</button>
                     <button className="btn" onClick={userLogout}>
                        Sign Out
                     </button>
                  </form>
               </div>
            </div>
         </dialog>
      </div>
   );
}
