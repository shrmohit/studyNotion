import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login';
import ForgotPassword from "./components/Auth/ForgotPassword"
import Register from './components/Auth/Register';

function App() {
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
  ]);
  return (
    <div  className='bg-[#000814] min-h-screen'>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
