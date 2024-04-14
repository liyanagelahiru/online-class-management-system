import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { AuthorizedUser } from '../../middleware/auth';
import Swal from 'sweetalert2';

const ModelPapers = () => {
   const navigate = useNavigate();
   const { isAuthenticated } = AuthorizedUser();
   // TODO: Add offer value
   const offerValue = 10.0;
   console.log('isAuth:', isAuthenticated);

   const handleClick = () => {
      if (!isAuthenticated) {
         // Swall alert with Login and No button
         Swal.fire({
            title: 'You need to Sign In to enroll this course',
            showDenyButton: true,
            confirmButtonText: `Sign In`,
            denyButtonText: `Later`,
            icon: 'info'
         }).then(result => {
            if (result.isConfirmed) {
               navigate('/signin');
            } else if (result.isDenied) {
               console.log('User denied');
            }
         });
      } else {
         console.log('Enrolling...');
         navigate('/payment', {
            state: {
               courseName: 'course-01',
               courseValue: 100,
               offerValue: offerValue
            }
         });
      }
   };

   return (
      <div>
         <div className="p-4">
            {/* <button onClick={handleClick}>Enroll</button> */}
            <Button onClick={handleClick} text="Enroll" />
         </div>
      </div>
   );
};

export default ModelPapers;
