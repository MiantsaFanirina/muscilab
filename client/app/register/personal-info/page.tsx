'use client';
import { Flag } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChangeEvent, MouseEvent, useContext, useState } from 'react';
import { RegisterDataContext } from '@/features/register/contexts/registerDataContext';
import { validateEmail } from '@/features/register/utils/utils';
import { redirect } from 'next/navigation';

const PersonalInfo = () => {
    const context = useContext(RegisterDataContext);
    const [emailError, setEmailError] = useState<string>('');
    const [firstNameError, setFirstNameError] = useState<string>('');
    const [lastNameError, setLastNameError] = useState<string>('');

    // Handle the case where the context might be undefined
    if (!context) {
        throw new Error('RegisterDataContext is not available');
    }

    const { user, setUser } = context;

    // Handle input changes
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    // Form validation
    const handleContinue = (e: MouseEvent) => {
        e.preventDefault();

        // Reset errors
        setEmailError('');
        setFirstNameError('');
        setLastNameError('');

        let valid = true;

        if (!user.firstName) {
            setFirstNameError('First name is required');
            valid = false;
        }

        if (!user.lastName) {
            setLastNameError('Last name is required');
            valid = false;
        }

        if (!user.email) {
            setEmailError('Email is required');
            valid = false;
        } else if (!validateEmail(user.email)) {
            setEmailError('Please enter a valid email address');
            valid = false;
        }

        if (valid) {
            redirect('/register/password');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0.8, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
        >
            <div className="flex flex-col items-center gap-6 text-slate-700">
                <div className="text-slate-700 shadow w-12 h-12 rounded-md flex items-center justify-center">
                    <Flag width={30} height={30} />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <h1 className="font-bold text-3xl">Your details</h1>
                    <h2>Please provide your name and email.</h2>
                </div>

                <button className="btn btn-outline text-slate-700 flex items-center gap-2 w-full">
                    <Image src="/google.png" alt="google" width={25} height={25} /> Sign up with Google
                </button>

                <div className="divider my-0">OR</div>

                <div className="w-full lg:w-[400px] flex flex-col gap-1">
                    {/* First Name Field */}
                    <label className="form-control w-full">
                        <div className="label font-semibold">
                            <span className="label-text text-slate-700">First name *</span>
                        </div>
                        <input
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleInputChange}
                            placeholder="Enter your First name"
                            className={`input input-md input-bordered text-slate-700 bg-white text-sm w-full capitalize ${
                                firstNameError && 'input-error'
                            }`}
                        />
                        {firstNameError && <span className="text-red-500 text-xs mt-1">{firstNameError}</span>}
                    </label>

                    {/* Last Name Field */}
                    <label className="form-control w-full">
                        <div className="label font-semibold">
                            <span className="label-text text-slate-700">Last name *</span>
                        </div>
                        <input
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleInputChange}
                            placeholder="Enter your Last name"
                            className={`input input-md input-bordered text-slate-700 bg-white text-sm w-full capitalize ${
                                lastNameError && 'input-error'
                            }`}
                        />
                        {lastNameError && <span className="text-red-500 text-xs mt-1">{lastNameError}</span>}
                    </label>

                    {/* Email Field */}
                    <label className="form-control w-full">
                        <div className="label font-semibold">
                            <span className="label-text text-slate-700">Email *</span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                            placeholder="Enter your Email"
                            className={`input input-md input-bordered text-slate-700 bg-white text-sm w-full ${
                                emailError && 'input-error'
                            }`}
                        />
                        {emailError && <span className="text-red-500 text-xs mt-1">{emailError}</span>}
                    </label>
                </div>


                <button onClick={handleContinue} className="btn w-full bg-primary border-none text-white">
                    Continue
                </button>
            </div>
        </motion.div>
    );
};

export default PersonalInfo;
