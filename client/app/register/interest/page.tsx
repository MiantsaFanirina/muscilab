'use client';
import { useContext, useState } from 'react';
import { ChevronLeft, Headphones } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RegisterDataContext } from '@/features/register/contexts/registerDataContext';

const Interest = () => {
    const context = useContext(RegisterDataContext);
    const MAX_CHARACTERS = 300;
    const [charCount, setCharCount] = useState(0);
    const [selectedInterest, setSelectedInterest] = useState('');
    const [error, setError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    // Handle the case where the context might be undefined
    if (!context) {
        throw new Error('RegisterDataContext is not available');
    }

    const { user, setUser } = context;

    // Handle text area change
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;

        if (text.length <= MAX_CHARACTERS) {
            setUser({ ...user, description: text });
            setCharCount(text.length);
            setDescriptionError(''); // Clear error when user types
        }
    };

    // Handle interest selection
    const handleInterestClick = (interest: string) => {
        setSelectedInterest(interest);
        setError(''); // Clear error when an interest is selected
        setUser({ ...user, interest });
    };

    // Handle continue button click
    const handleRegister = () => {
        let hasError = false;

        if (!selectedInterest) {
            setError('You should choose one interest.');
            hasError = true;
        }

        if (!user.description || user.description.trim().length === 0) {
            setDescriptionError('Description is required.');
            hasError = true;
        }

        if (!hasError) {
            setError('');
            setDescriptionError('');
            // Proceed to the next step
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0.8, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
        >
            <div className="relative flex flex-col items-center gap-6 text-slate-700">
                <div className="text-slate-700 shadow w-12 h-12 rounded-md flex items-center justify-center">
                    <Headphones width={30} height={30} />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <h1 className="font-bold text-3xl">Choose your interest</h1>
                    <h2>Tell us about yourself.</h2>
                </div>

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
                            {descriptionError
                                ? <span className="label-text-alt text-red-500 text-xs">{descriptionError}</span>
                                : <span className="label-text-alt"></span>
                            }
                            <span
                                className={`
                                    label-text-alt 
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
                    {error && <span className="text-red-500 text-xs mt-1">{error}</span>}

                    {/* Continue Button */}
                    <button
                        onClick={handleRegister}
                        className="btn w-full bg-primary border-none text-white"
                    >
                        Register
                    </button>
                </div>

                {/* Previous Link */}
                <Link
                    href="/register/password"
                    className="absolute -top-16 lg:-top-20 -left-6 lg:-left-36 flex items-center text-sm hover:text-primary"
                >
                    <ChevronLeft width={20} height={20} />
                    Previous
                </Link>
            </div>
        </motion.div>
    );
};

export default Interest;
