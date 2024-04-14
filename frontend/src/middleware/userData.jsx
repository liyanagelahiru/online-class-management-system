import { useAuthStore } from '../store/authStore';
import { AuthorizedUser } from './auth';
// import { Avatar } from 'react-avatar';

// Return public user data
export const UserData = () => {
   const isAuth = AuthorizedUser();
   const {
      email,
      firstName,
      lastName,
      gender,
      mobileNumber,
      dateOfRegistration,
      dateOfUpdated
   } = useAuthStore();

   if (isAuth) {
      return {
         email,
         firstName,
         lastName,
         gender,
         mobileNumber,
         dateOfRegistration,
         dateOfUpdated
      };
   }
};
