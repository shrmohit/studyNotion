import { IoIosSearch } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { Button } from '../ui/button';
import Subtract from '../../assets/Subtract.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {

  const {isLoggedIn, user} = useAuth();

  return (
    <div className='w-full px-10 py-4 bg-[#161D29] text-white'>
      <div className='flex  items-center justify-between '>
        <div className='flex items-center'>
          <img
            src={Subtract}
            alt='logo'
            className='mr-2'
          />
          <span className='font-bold text-2xl'>Study Notion </span>
        </div>
        <div className='flex items-center px-40 space-x-3'>
          <div>Home</div>
          <div>Catalog</div>
          <div>About us</div>
          <div>Contact us</div>
        </div>
        <div className='flex space-x-3'>
          <div className='py-1'>
            <IoIosSearch className='size-6' />
          </div>
          <div className='py-1 '>
            <IoCartOutline className='size-6' />
          </div>
          <div className='flex space-x-3'>
            {
              isLoggedIn && 
               <Button
              variant='outline'
              className=' text-white bg-[#1a212b] border-2 hover:border-black'
            >
             logout
            </Button>
            }
            {
              !isLoggedIn && ( 
              <>
               <Button
              variant='outline'
              className=' text-white bg-[#1a212b] border-2'
            >
              <Link to='/login'>Login</Link>
            </Button>
            <Button
              variant='outline'
              className=' text-white bg-[#1a212b] border-2 hover:border-black'
            >
              <Link to='/signup'>Sign up</Link>
            </Button>
              </>
             )
            }
           
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
