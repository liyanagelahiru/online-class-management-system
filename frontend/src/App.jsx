import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* import all pages */
import Username from './components/Username';
import Password from './components/Password';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Register from './components/Register';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';

/** Auth Middlware */
import { AuthorizedUser, ProtectRoute } from './middleware/auth.jsx';

/* root routes */
const router = createBrowserRouter([
   {
      path: '/',
      element: <Username></Username>
   },
   {
      path: '/register',
      element: <Register></Register>
   },
   {
      path: '/password',
      element: (
         <ProtectRoute>
            <Password />
         </ProtectRoute>
      )
   },
   {
      path: '/profile',
      element: (
         <AuthorizedUser>
            <Profile />
         </AuthorizedUser>
      )
   },
   {
      path: '/recovery',
      element: <Recovery></Recovery>
   },
   {
      path: '/reset',
      element: <Reset></Reset>
   },
   {
      path: '/pagenotfound',
      element: <PageNotFound></PageNotFound>
   }
]);

function App() {
   return <RouterProvider router={router}></RouterProvider>;
}

export default App;
