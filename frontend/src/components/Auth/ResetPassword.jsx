import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { GoArrowLeft } from "react-icons/go";
import { Link, useParams } from 'react-router';
import Navbar from '../shared/Navbar';
import { resetPassword } from '../../services/authServices';

export default function ResetPassword() {
    const {token} = useParams();
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordChanged, setIsPasswordChanged] = useState(false);
    const [formData, setFormData] = useState({
        resetpassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("reset1",formData)
        resetPassword(formData,token)
    }

    return (
      <>
      <Navbar/>
        <div className='flex justify-center items-center'>
            {isPasswordChanged &&
                <div className='text-white w-[380px] pt-50'>

                    {/* Heading */}
                    <h1 className='text-3xl font-semibold'>Reset complete!</h1>
                    <p className='mt-2 text-[1rem] text-gray-400'>
                        Your password has been successfully updated. You can now log in with your new credentials.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className='flex w-full flex-col gap-y-4'>



                        {/* Button */}
                        <button
                            type='submit'
                            className='mt-6 rounded-md bg-yellow-400 py-2 px-4 font-medium text-black hover:bg-yellow-500 transition'
                        >
                            Back to login
                        </button>
                    </form>
                </div>
            }
            {!isPasswordChanged &&
                <div className='text-white w-[380px] pt-50'>

                    {/* Heading */}
                    <h1 className='text-3xl font-semibold'>Reset your password</h1>
                    <p className='mt-2 text-[1rem] text-gray-400'>
                        Almost done. Enter your new password and youre all set.
                    </p>

                    <br />

                    {/* Form */}
                    <form onSubmit={handleSubmit} className='flex w-full flex-col gap-y-4'>
                        {/* Password */}
                        <label className='relative w-full'>
                            <p className='mb-1 text-sm text-richblack-5'>
                                New Password <sup className='text-pink-800'>*</sup>
                            </p>
                            <input
                                required
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Enter Password'
                                onChange={handleInputChange}
                                name='resetpassword'
                                value={formData.resetpassword}
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
                        </label>

                        {/* Button */}
                        <button
                            type='submit'
                            className='mt-6 rounded-md bg-yellow-400 py-2 px-4 font-medium text-black hover:bg-yellow-500 transition'
                        >
                            Reset Password
                        </button>

                        <Link to="/login">
                            <div className='flex items-center gap-2 hover:text-gray-400'>
                                <GoArrowLeft size={20} />
                                <span>Back to login</span>
                            </div>
                        </Link>
                    </form>
                </div>
            }
        </div>
      </>
      
    );
}