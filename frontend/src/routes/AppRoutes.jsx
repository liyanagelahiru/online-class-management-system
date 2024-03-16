import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* import all pages */
import {
   Header,
   Footer,
   Register,
   Recovery,
   Reset,
   PageNotFound
} from '../components';
import { Home, Courses, Contact, About, TheoryClass, Profile } from '../pages';

/** Auth Middleware */
import { AuthorizedUser, ProtectRoute } from '../middleware/auth.jsx';

/* Define your routes as an array of Route components */
const routes = [
   { path: '/', element: <Home /> },
   { path: '/courses', element: <Courses /> },
   { path: '/contact', element: <Contact /> },
   { path: '/about', element: <About /> },
   { path: '/signup', element: <Register /> },
   { path: '/theory-class', element: <TheoryClass /> },
   // {
   //    path: '/password',
   //    element: (
   //       <ProtectRoute>
   //          <Password />
   //       </ProtectRoute>
   //    )
   // },
   {
      path: '/profile',
      element: (
         <AuthorizedUser>
            <Profile />
         </AuthorizedUser>
      )
   },
   { path: '/recovery', element: <Recovery /> },
   { path: '/reset', element: <Reset /> },
   { path: '/pagenotfound', element: <PageNotFound /> }
];

/* AppRoutes component */
function AppRoutes() {
   return (
      <div>
         <Router>
            <Header />
            <Routes>
               {routes.map((route, index) => (
                  <Route
                     key={index}
                     path={route.path}
                     element={route.element}
                  />
               ))}
            </Routes>
            <Footer />
         </Router>
      </div>
   );
}

export default AppRoutes;
