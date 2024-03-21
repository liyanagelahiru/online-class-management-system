import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/store';

export const AuthorizedUser = ({ children }) => {
   const token = localStorage.getItem('token');
   if (!token) {
      return <Navigate to={'/'} replace={true}></Navigate>;
   }
   return children;
};

AuthorizedUser.propTypes = {
   children: PropTypes.node.isRequired
};

export const ProtectRoute = ({ children }) => {
   const email = useAuthStore.getState().auth.email;
   if (!email) {
      return <Navigate to={'/'} replace={true}></Navigate>;
   }
   return children;
};

ProtectRoute.propTypes = {
   children: PropTypes.node.isRequired
};
