import { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router';
import Navbar from '../shared/Navbar';
import { forgotPassword } from '../../services/authServices';


export default function ForgotPassword() {

    const [isLinkSent, setIsLinkSent] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
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

        forgotPassword(formData).then((response) => {
            console.log("succes")
            setIsLinkSent(true)
        }).catch(err => {
            console.log("failed ",err)
        })
    }

    return (
        <>
        <Navbar/>
        <div className='flex justify-center items-center'>
            {isLinkSent &&
                <div className='text-white w-[380px] pt-30 '>

                    {/* Heading */}
                    <h1 className='text-3xl font-semibold'>Check email</h1>
                    <p className='mt-2 text-[1rem] text-gray-400'>
                        We have sent the reset email to {formData.email ? formData.email : 'youremailaccount@gmail.com'}.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className='flex w-full flex-col gap-y-4'>

                        {/* Button */}
                        <button
                            type='submit'
                            className='mt-6 rounded-md bg-yellow-400 py-2 px-4 font-medium text-black hover:bg-yellow-500 transition'
                        >
                            Resend email
                        </button>

                        <Link to='/login'>
                            <div className='flex items-center gap-2 hover:text-gray-400'>
                                <GoArrowLeft size={20} />
                                <span>Back to login</span>
                            </div>
                        </Link>
                    </form>
                </div>
            }
            {!isLinkSent &&
                <div className='text-white w-[380px] pt-30'>

                    {/* Heading */}
                    <h1 className='text-3xl font-semibold'>Reset your password</h1>
                    <p className='mt-2 text-[1rem] text-gray-400'>
                        Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery.
                    </p>

                    <br />
                    <br />

                    {/* Form */}
                    <form onSubmit={handleSubmit} className='flex w-full flex-col gap-y-4'>
                        {/* Email */}
                        <label className='w-full'>
                            <p className='mb-1 text-sm text-richblack-5 '>
                                Email Address <sup className='text-pink-800'>*</sup>
                            </p>
                            <input
                                required
                                type='email'
                                onChange={handleInputChange}
                                placeholder='Enter email address'
                                name='email'
                                value={formData.email}
                                className='w-full rounded-md  bg-[#161D29] p-3 text-richblack-5'
                            />
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