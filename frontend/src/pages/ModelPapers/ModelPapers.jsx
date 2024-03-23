import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';

const ModelPapers = () => {
   const navigate = useNavigate();
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   // TODO: Add offer value
   const offerValue = 10.0;

   useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
         setIsLoggedIn(true);
      }
   }, []);

   const handleClick = () => {
      if (!isLoggedIn) {
         console.log('Please login to enroll');
         // navigate('#');
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
