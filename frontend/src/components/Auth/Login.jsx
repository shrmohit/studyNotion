import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/image.png';
import Navbar from '../shared/Navbar';
import { login } from '../../services/authServices';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    login(formData);
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />
      <div className='min-h-screen flex items-center justify-center bg-[#000814]  px-4'>
        <div className='flex w-full max-w-6xl flex-col-reverse md:flex-row items-center justify-between'>
          {/* Left Form Panel */}
          <div className='w-full max-w-[450px] bg-richblack-800 text-white p-8 rounded-lg'>
            {/* Heading */}
            <h1 className='text-3xl font-semibold'>Welcome Back</h1>
            <p className='mt-2 text-[1rem] text-richblack-100'>
              Build skills for today, tomorrow, and beyond.
              <span className='italic text-blue-400'>
                Education to future-proof your career.
              </span>
            </p>

            {/* Form */}
            <form
              onSubmit={submitHandler}
              className='flex w-full flex-col gap-y-4'
            >
              {/* Email */}
              <label className='w-full'>
                <p className='mb-1 text-sm text-richblack-5 '>
                  Email Address <sup className='text-pink-800'>*</sup>
                </p>
                <input
                  required
                  type='email'
                  name='email'
                  value={formData?.email}
                  onChange={handleFormData}
                  placeholder='Enter email address'
                  className='w-full rounded-md  bg-[#161D29] p-3 text-richblack-5'
                />
              </label>

              {/* Password */}
              <label className='relative w-full'>
                <p className='mb-1 text-sm text-richblack-5'>
                  Password <sup className='text-pink-800'>*</sup>
                </p>
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={formData?.password}
                  onChange={handleFormData}
                  placeholder='Enter Password'
                  className='w-full rounded-md  bg-[#161D29] p-3 pr-12 text-richblack-5'
                />
                <span
                  className='absolute right-3 top-[38px] cursor-pointer text-richblack-200'
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </span>
                <Link to='/forgot-password'>
                  <p className='mt-1 text-right text-xs text-blue-300'>
                    Forgot password
                  </p>
                </Link>
              </label>

              {/* Button */}
              <button
                type='submit'
                className='mt-6 rounded-md bg-yellow-400 py-2 px-4 font-medium text-richblack-900 hover:bg-yellow-200 transition'
              >
                Login
              </button>
            </form>
          </div>

          {/* Right Image Panel */}
          <div className='w-full flex justify-center md:justify-end mb-6 md:mb-0'>
            <img
              src={loginImg} // Replace this with the actual image path
              alt='Student Learning'
              className='w-100 h-120 rounded-md '
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
