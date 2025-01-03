'use client';

import {useContext, useState, useEffect, useCallback} from 'react';
import { ChevronLeft, Headphones } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RegisterDataContext } from '@/features/register/contexts/registerDataContext';
import { redirect } from 'next/navigation';
import { register } from '@/features/register/services/register.service'; // Import the server action

const Interest = () => {
    // Access the context for user data
    const context = useContext(RegisterDataContext);
    const MAX_CHARACTERS = 300;

    // State for tracking character count, selected interest, and errors
    const [charCount, setCharCount] = useState(0);
    const [selectedInterest, setSelectedInterest] = useState('');
    const [error, setError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Ensure context is available
    if (!context) {
        throw new Error('RegisterDataContext is not available');
    }

    const { user, setUser } = context;
    console.log(user)

    // Redirect to personal info step if required fields are missing
    useEffect(() => {
        if (user.googleUserToken === '' && (!user.firstName || !user.lastName || !user.email))
        {
            redirect('/register/personal-info');
        }
    }, [user.firstName, user.lastName, user.email, user.googleUserToken]);

    // Redirect to password step if password fields are missing
    useEffect(() => {
        if(user.googleUserToken === '' && (!user.password || !user.confirmedPassword)) {
            redirect('/register/password');
        }
    }, [user.password, user.confirmedPassword, user.googleUserToken]);

    // Handle text area input for the description
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;

        if (text.length <= MAX_CHARACTERS) {
            setUser({ ...user, description: text });
            setCharCount(text.length);
            setDescriptionError(''); // Clear any existing description error
        }
    };

    // Handle interest selection by updating state and user context
    const handleInterestClick = (interest: string) => {
        setSelectedInterest(interest);
        setError(''); // Clear any existing interest error
        setUser({ ...user, interest });
    };

    // Handle the registration process when the Register button is clicked
    const handleRegister = useCallback(async () => {
        let hasError = false;

        // Check if an interest is selected
        if (!selectedInterest) {
            setError('You should choose one interest.');
            hasError = true;
        }

        // Check if the description field is filled
        if (!user.description || user.description.trim().length === 0) {
            setDescriptionError('Description is required.');
            hasError = true;
        }

        // If there are no errors, proceed with registration
        if (!hasError) {
            setError('');
            setDescriptionError('');
            setIsLoading(true); // Indicate loading state

            const token = await register(user);
            if (token) {
                // Save the token in local storage
                localStorage.setItem('authToken', token.token);
                setIsLoading(false);
                redirect('/music');
            }
        }
    }, [selectedInterest, user, setError, setDescriptionError, setIsLoading]);

    // Check if the Enter button is pressed
    useEffect(() => {
        const handleKeyDown = async (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                await handleRegister();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleRegister]);

    return (
        <motion.div
            initial={{ opacity: 0.8, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
        >
            <div className="relative flex flex-col items-center gap-6 text-slate-700">
                {/* Icon Header */}
                <div className="text-slate-700 shadow w-12 h-12 rounded-md flex items-center justify-center">
                    <Headphones width={30} height={30} />
                </div>

                {/* Title and Subtitle */}
                <div className="flex flex-col items-center gap-1">
                    <h1 className="font-bold text-3xl">Choose your interest</h1>
                    <h2>Tell us about yourself.</h2>
                </div>

                {/* Form Section */}
                <div className="w-full lg:w-[400px] flex flex-col gap-4">
                    {/* Description Field */}
                    <label className="form-control w-full">
                        <div className="label font-semibold">
                            <span className="label-text text-slate-700">Description about you *</span>
                        </div>
                        <textarea
                            value={user.description}
                            onChange={handleTextChange}
                            placeholder="Describe yourself"
                            className={`input input-md input-bordered py-3 text-slate-700 bg-white text-sm w-full h-32 resize-none ${
                                descriptionError && 'input-error'
                            }`}
                        ></textarea>
                        <div className="label">
                            {/* Display description error if any */}
                            {descriptionError ? (
                                <span className="label-text-alt text-red-500 text-xs">{descriptionError}</span>
                            ) : (
                                <span className="label-text-alt"></span>
                            )}
                            {/* Character count with dynamic styling */}
                            <span
                                className={`label-text-alt 
                                    ${charCount > 0 ? 'text-primary' : ''}                                  
                                    ${charCount >= 200 && charCount < 250 ? 'text-warning' : ''}
                                    ${charCount >= 250 && charCount <= 300 ? 'text-error' : ''} 
                                `}
                            >
                                {charCount} / {MAX_CHARACTERS}
                            </span>
                        </div>
                    </label>

                    {/* Interest Selection */}
                    <div className="label font-semibold">
                        <span className="label-text text-slate-700">Show us your interest *</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {['I want to learn', 'I want to share my music', "I want to listen to other's music", 'other'].map((interest) => (
                            <button
                                key={interest}
                                className={`btn btn-outline btn-sm hover:bg-primary hover:text-white ${
                                    selectedInterest === interest ? 'bg-primary text-white' : ''
                                }`}
                                onClick={() => handleInterestClick(interest)}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>
                    {/* Display interest error if any */}
                    {error && <span className="text-red-500 text-xs mt-1">{error}</span>}

                    {/* Continue/Register Button */}
                <button
                    onClick={handleRegister}
                    className="btn w-full bg-primary border-none text-white"
                    disabled={isLoading} // Disable button during loading
                >
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
                </div>

                {/* Previous Link */}
                {user.googleUserToken === '' ? <Link
                    href="/register/password"
                    className="absolute -top-10 lg:-top-20 -left-6 lg:-left-36 flex items-center text-sm hover:text-primary"
                >
                    <ChevronLeft width={20} height={20}/>
                    Previous
                </Link> : <></>}
            </div>
        </motion.div>
    );
};

export default Interest;
