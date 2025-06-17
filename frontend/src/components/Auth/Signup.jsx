import { useState } from 'react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import Navbar from '../shared/Navbar';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import signImg from '../../assets/signup.png';

export default function Signup() {
  const [accountType, setAccountType] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
            <div className='my-6 flex rounded-full bg-[#161D29] p-1 max-w-max gap-x-1'>
              <button
                onClick={() => setAccountType('student')}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-200 ${
                  accountType === 'student'
                    ? ' bg-[#000814] text-richblack-5'
                    : 'text-richblack-200'
                }`}
              >
                Student
              </button>
              <button
                onClick={() => setAccountType('instructor')}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-200 ${
                  accountType === 'instructor'
                    ? ' bg-[#000814] text-richblack-5'
                    : 'text-richblack-200'
                }`}
              >
                Instructors
              </button>
            </div>

            <form className='space-y-4'>
              <div className='flex gap-4'>
                <div className='flex-1'>
                  <label className='text-sm text-richblack-5'>
                    First Name <sup className='text-pink-800'>*</sup>
                  </label>
                  <Input
                    placeholder='Enter first name'
                    className='bg-richblack-800 text-richblack-5 focus-visible:ring-0 focus-visible:ring-offset-0'
                  />
                </div>
                <div className='flex-1'>
                  <label className='text-sm text-richblack-5'>
                    Last Name <sup className='text-pink-800'>*</sup>
                  </label>
                  <Input
                    placeholder='Enter last name'
                    className='bg-[#000814] text-richblack-5 focus-visible:ring-0 focus-visible:ring-offset-0'
                  />
                </div>
              </div>
              <div>
                <label className='text-sm text-richblack-5'>
                  Email Address <sup className='text-pink-800'>*</sup>
                </label>
                <Input
                  placeholder='Enter email address'
                  className='bg-[#000814] text-richblack-5 focus-visible:ring-0 focus-visible:ring-offset-0'
                />
              </div>
              <div>
                <label className='text-sm text-richblack-5'>
                  Phone Number <sup className='text-pink-800'>*</sup>
                </label>
                <div className='flex gap-2'>
                  <Input
                    placeholder='+91'
                    className='w-[80px] bg-[#000814] text-richblack-5 focus-visible:ring-0 focus-visible:ring-offset-0'
                  />
                  <Input
                    placeholder='12345 67890'
                    className='flex-1 bg-[#000814]text-richblack-5 focus-visible:ring-0 focus-visible:ring-offset-0'
                  />
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='relative w-full'>
                  <label className='text-sm text-richblack-5'>
                    Create Password <sup className='text-pink-800'>*</sup>
                  </label>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter Password'
                    className='bg-[#000814] text-richblack-5 pr-10 focus-visible:ring-0 focus-visible:ring-offset-0'
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-[36px] cursor-pointer text-lg'
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </span>
                </div>
                <div className='relative w-full'>
                  <label className='text-sm text-richblack-5'>
                    Confirm Password <sup className='text-pink-800'>*</sup>
                  </label>
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Enter Password'
                    className='bg-[#000814] text-richblack-5 pr-10 focus-visible:ring-0 focus-visible:ring-offset-0'
                  />
                  <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className='absolute right-3 top-[36px] cursor-pointer text-lg'
                  >
                    {showConfirmPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </span>
                </div>
              </div>
              <Button className='mt-4 w-full rounded-md bg-yellow-500 text-richblack-900 hover:bg-yellow-200'>
                Create Account
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
