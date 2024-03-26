import { useNavigate } from "react-router-dom";
import Button2 from "../../components/Button/Button2";

var TCellStyle = "px-5 py-2 bg-neutral-300 text-neutral-950"
var THeadStyle = "px-5 py-2 bg-[#0057FF] "

export default function UserMain() {
   const navigate = useNavigate();


   const AddUser = () => {
      navigate('./AddUser')
   }

   return (
    <>
      <div>
         <div className="bg-neutral-400 align-middle text-center font-bold">
            User Management
         </div>
         <div className="bg-silver-mist text-neutral-300 font-light">
            <div className=" bg-neutral-150 flex ">
               <div className=" w-96">
                     
               </div>
               <div className=" w-96">
                     
               </div>
               <div className="p-4">
                     <Button2 onClickfun={AddUser} Details="Add User" ></Button2>
               </div> 
            </div>  

            <div>
            <table className="border-2 ">
               <thead>
                  <th className={THeadStyle} >FirstName</th>
                  <th className= {THeadStyle} >LastName</th>      
                  <th className= {THeadStyle} >Email</th>    
                  <th className= {THeadStyle} >Role</th>
                  <th className= {THeadStyle} >Gender</th>      
                  <th className= {THeadStyle} >Mobile</th>     
                  <th className= {THeadStyle} >RegisterDate</th>                   
                  <th className= {THeadStyle} >Actions</th>                                                   
               </thead>
               <tbody>
               <td className= {TCellStyle} >Dimuthu</td>
               <td className= {TCellStyle} >Dhananjaya</td>
               <td className= {TCellStyle} >DimuthuAro@Gmail.com</td>
               <td className= {TCellStyle} >User</td>
               <td className= {TCellStyle} >Male</td>
               <td className= {TCellStyle} >0768378625</td>
               <td className= {TCellStyle} >2024/03/05</td>
               <td className= {TCellStyle} >Actions</td>            
               </tbody>
            </table>
            
            </div>                  
         </div>
         <div>
         </div>                  
      </div>
    </>
   );
}
