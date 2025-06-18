import { useState } from 'react';
import { Button } from '../ui/button';
import Navbar from '../shared/Navbar';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import signImg from '../../assets/signup.png';
import { register } from '../../services/authServices';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    accountType: 'student',
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAccountTypeInput = (type) => {
    setAccountType(type);
    setFormData({ ...formData, accountType: type });
  };

  const handleFormData = (e) => {
    e.preventDefault();
    console.log('register', formData);
    register(formData);
  };

  const [accountType, setAccountType] = useState('student');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />
      <div className='flex min-h-screen items-center justify-center  bg-[#000814] text-white'>
        <div className='flex w-full max-w-[1200px] flex-col-reverse items-center gap-5 px-4 md:flex-row md:items-start md:gap-16 md:px-12'>
          {/* Left form section */}
          <div className='w-full max-w-[500px]'>
            <h1 className='text-3xl font-semibold leading-tight text-richblack-5'>
              Join the millions learning to code with StudyNotion for free
            </h1>
            <p className='mt-2 text-sm font-medium text-richblack-100'>
              Build skills for today, tomorrow, and beyond.
              <span className='italic text-blue-400 '>
                Education to future-proof your career.
              </span>
            </p>

            {/* Account Toggle Buttons */}
            <div className='my-6 flex rounded-full bg-[#161D29]  p-1 max-w-max gap-x-1'>
              <button
                onClick={() => handleAccountTypeInput('student')}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-200 ${
                  accountType === 'student'
                    ? 'bg-[#000814] text-richblack-5'
                    : 'text-richblack-200'
                }`}
              >
                Student
              </button>
              <button
                onClick={() => handleAccountTypeInput('instructor')}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-200 ${
                  accountType === 'instructor'
                    ? 'bg-[#000814] text-richblack-5'
                    : 'text-richblack-200'
                }`}
              >
                Instructors
              </button>
            </div>

            {/* form */}
            <form
              onSubmit={handleFormData}
              className='space-y-4'
            >
              <div className='flex gap-4'>
                <div className='flex-1'>
                  <label className='text-sm text-richblack-5'>
                    First Name <sup className='text-pink-800'>*</sup>
                  </label>
                  <input
                    placeholder='Enter first name'
                    type='text'
                    name='firstName'
                    value={formData?.firstName}
                    onChange={handleInput}
                    className='bg-[#161D29] text-richblack-5 rounded-md  px-3 py-2 pr-10 focus-visible:ring-0 focus-visible:ring-offset-0'
                  />
                </div>
                <div className='flex-1'>
                  <label className='text-sm text-richblack-5'>
                    Last Name <sup className='text-pink-800'>*</sup>
                  </label>
                  <input
                    type='text'
                    placeholder='Enter last name'
                    name='lastName'
                    value={formData?.lastName}
                    onChange={handleInput}
                    className='bg-[#161D29] text-richblack-5 rounded-md  px-3 py-2 pr-10 focus-visible:ring-0 focus-visible:ring-offset-0'
                  />
                </div>
              </div>

              {/* email address */}
              <div className='flex flex-col'>
                <label className='text-sm text-richblack-5'>
                  Email Address <sup className='text-pink-800'>*</sup>
                </label>
                <input
                  type='email'
                  placeholder='Enter email address'
                  name='email'
                  value={formData?.email}
                  onChange={handleInput}
                  className='bg-[#161D29] text-richblack-5 rounded-md  px-3 py-2 pr-10 focus-visible:ring-0 focus-visible:ring-offset-0'
                />
              </div>

              {/* password */}
              <div className='relative w-full'>
                <label className='text-sm text-richblack-5'>
                  Password <sup className='text-pink-800'>*</sup>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter Password'
                  name='password'
                  value={formData?.password}
                  onChange={handleInput}
                  className='bg-[#161D29] text-richblack-5 w-full rounded-md px-3 py-2 pr-10 outline-none focus:ring-0 border-none'
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-[36px] cursor-pointer text-lg'
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>

              <Button
                type='Submit'
                className='mt-4 w-full rounded-md bg-yellow-500 text-richblack-900 hover:bg-yellow-200'
              >
                Register
              </Button>
            </form>
          </div>

          {/* Right Image */}
          <div className='w-full max-w-[550px]'>
            <img
              src={signImg}
              alt='signup illustration'
              className='rounded-md'
            />
          </div>
        </div>
      </div>
    </>
  );
}
