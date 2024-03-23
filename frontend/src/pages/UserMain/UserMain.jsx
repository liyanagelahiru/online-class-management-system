import ButtonX from "../../components/ButtonX/ButtonX";

var TCellStyle = "px-5 py-2 bg-neutral-300 text-neutral-950"
var THeadStyle = "px-5 py-2 bg-[#0057FF] "

export default function UserMain() {
 
   return (
    <>
      <div>
         <div className="bg-neutral-400">
            User Manegement
         </div>
         <div className="bg-silver-mist text-neutral-300">
            <div className=" bg-neutral-150 flex t-">
               <div className=" w-96">
                     
               </div>
               <div className=" w-96">
                     
               </div>
               <div className="p-4">
                     <ButtonX Details="Add User"></ButtonX>
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
