'use client';
import { ChevronLeft, KeyRound } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChangeEvent, MouseEvent, useContext, useState } from 'react';
import { RegisterDataContext } from '@/features/register/contexts/registerDataContext';
import { redirect } from 'next/navigation';

const Password = () => {
    const context = useContext(RegisterDataContext);
    const [passwordError, setPasswordError] = useState<string>('');
    const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');
    const [isFormValid, setIsFormValid] = useState<boolean>(true);

    // Handle the case where the context might be undefined
    if (!context) {
        throw new Error('RegisterDataContext is not available');
    }

    const { user, setUser } = context;

    // Handle input changes for both password and confirm password fields
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
        setPasswordError('');
        setConfirmPasswordError('');

        // Check if password meets criteria (at least 8 characters)
        if (user.password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
        }

        // Check if confirmed password matches the original password
        if (user.password !== user.confirmedPassword) {
            setConfirmPasswordError('Passwords do not match');
        }

        // Final form validation
        const isFormValid = user.password.length >= 8 && user.password === user.confirmedPassword;
        setIsFormValid(isFormValid);

        if (isFormValid) {
            redirect('/register/interest');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0.8, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
        >
            <div className="relative flex flex-col items-center gap-6 text-slate-700">
                <div className="text-slate-700 shadow w-12 h-12 rounded-md flex items-center justify-center">
                    <KeyRound width={30} height={30} />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <h1 className="font-bold text-3xl">Choose a password</h1>
                    <h2>Make your account secure.</h2>
                </div>

                <div className="w-full lg:w-[400px] flex flex-col gap-1">
                    <label className="form-control w-full">
                        <div className="label font-semibold">
                            <span className="label-text text-slate-700">Password *</span>
                            <span className="font-light text-xs text-slate-400">(Must be at least 8 characters)</span>
                        </div>
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            className={`input input-md input-bordered text-slate-700 bg-white text-sm w-full ${
                                passwordError && 'input-error'
                            }`}
                        />
                        {passwordError && <span className="text-red-500 text-xs mt-1">{passwordError}</span>}
                    </label>

                    <label className="form-control w-full">
                        <div className="label font-semibold">
                            <span className="label-text text-slate-700">Confirm your password *</span>
                        </div>
                        <input
                            type="password"
                            name="confirmedPassword"
                            value={user.confirmedPassword}
                            onChange={handleInputChange}
                            placeholder="Retype your password"
                            className={`input input-md input-bordered text-slate-700 bg-white text-sm w-full ${
                                confirmPasswordError && 'input-error'
                            }`}
                        />
                        {confirmPasswordError && <span className="text-red-500 text-xs mt-1">{confirmPasswordError}</span>}
                    </label>
                </div>


                <button onClick={handleContinue} className="btn w-full bg-primary border-none text-white">
                    Continue
                </button>

                <Link
                    href="/register/personal-info"
                    className="absolute -top-36 -left-10 lg:-left-36 flex items-center text-sm hover:text-primary"
                >
                    <ChevronLeft width={20} height={20} />
                    Previous
                </Link>
            </div>
        </motion.div>
    );
};

export default Password;
