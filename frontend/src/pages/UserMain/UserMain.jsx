import { useNavigate, Link } from 'react-router-dom';
import Button2 from '../../components/Button/Button2';
import axios from 'axios';
import { useEffect, useState } from 'react';

var TCellStyle = 'px-5 py-2 bg-neutral-300 text-neutral-950';
var THeadStyle = 'px-5 py-2 bg-[#0057FF] ';

export default function UserMain() {
   const navigate = useNavigate();
   const [Data, setData] = useState([]);

   const AddUser = () => {
      navigate('./AddUser');
   };

   useEffect(() => {
      // This function will run after every render
      UpdateData();

      // If you want to clean up after this effect, return a cleanup function
      return () => {
         // Cleanup code here
      };
   }, []);

   function UpdateData() {
      const url = 'http://localhost:5000/api/usermain/getall';
      const config = {
         headers: {
            'x-apikey': 'API_KEY'
         },
         dataType: 'json'
      };

      axios.get(url, config).then(response => {
         setData(response.data);
      });
   }

   function DeleteUser(key) {
      const email = Data[key].email;
      const url = 'http://localhost:5000/api/usermain/delete';
      const config = {
         headers: {
            'x-apikey': 'API_KEY'
         }
      };
      const payload = {
         email
      };
      console.log(payload);
      axios
         .post(url, payload, config)
         .then(res => {
            UpdateData();
            console.log(res);
         })
         .catch(error => {
            console.log(error);
         });
   }

   const RowGen = () => {
      return Data.map((User, index) => (
         <tr className="py-4" key={index}>
            <td className={TCellStyle}>{User.firstName}</td>
            <td className={TCellStyle}>{User.lastName}</td>
            <td className={TCellStyle}>{User.email}</td>
            <td className={TCellStyle}>{User.userRole}</td>
            <td className={TCellStyle}>{User.gender}</td>
            <td className={TCellStyle}>{User.mobileNumber}</td>
            <td className={TCellStyle}>{User.registerDate}</td>
            <td className={TCellStyle}>
               <button onClick={() => DeleteUser(index)}>Delete User</button>
               <br />
               <Link
                  to={{
                     pathname: '/UserMain/UpdateUser',
                     search: `?key=${User.email}`
                  }}>
                  Update User
               </Link>
            </td>
         </tr>
      ));
   };

   return (
      <>
         <div>
            <div className="bg-neutral-400 align-middle text-center font-bold">
               User Management
            </div>
            <div className="bg-silver-mist text-neutral-300 font-light">
               <div className=" bg-neutral-150 flex ">
                  <div className=" w-96"></div>
                  <div className=" w-96"></div>
                  <div className="p-4">
                     <Button2 onClickfun={AddUser} Details="Add User"></Button2>
                  </div>
               </div>

               <div>
                  <table className="border-2 ">
                     <thead>
                        <th className={THeadStyle}>FirstName</th>
                        <th className={THeadStyle}>LastName</th>
                        <th className={THeadStyle}>Email</th>
                        <th className={THeadStyle}>Role</th>
                        <th className={THeadStyle}>Gender</th>
                        <th className={THeadStyle}>Mobile</th>
                        <th className={THeadStyle}>RegisterDate</th>
                        <th className={THeadStyle}>Actions</th>
                     </thead>
                     <tbody>
                        <RowGen />
                     </tbody>
                  </table>
               </div>
            </div>
            <div></div>
         </div>
      </>
   );
}
