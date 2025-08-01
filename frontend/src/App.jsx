import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login';
import ForgotPassword from "./components/Auth/ForgotPassword"
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import { useAuth } from './components/contexts/AuthContext';

function App() {

  const {isLoggedIn, user, checking} = useAuth();

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Register />,
    },
    // forget password
     {
      path: '/forgetpassword',
      element: <ForgotPassword />,
    },
     {
      path: '/user/resetpassword/:token',
      element: <ResetPassword />,
    },
  ]);
  return (

    
    <div  className='bg-[#000814] min-h-screen'>
      {
        checking && <p className='text-white' >Loding</p>
      }
      {
        !checking &&
      <RouterProvider router={appRouter} />
    }
    </div>
  );
}

export default App;
