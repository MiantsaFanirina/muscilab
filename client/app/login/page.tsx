'use client'
import {motion} from "framer-motion";
import {ChangeEvent, useCallback, useEffect, useState} from 'react';
import Image from 'next/image';
import {User} from "lucide-react";
import Link from "next/link";
import {login} from "@/features/login/services/login.service";
import {redirect} from "next/navigation";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const validateForm = useCallback(() => {
        let isValid = true;
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
            setIsLoading(false)
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
            setIsLoading(false)
        } else {
            setPasswordError('');
        }

        return isValid;
    }, [email, password]);

    const handleLogin = useCallback(async () => {
        if (validateForm()) {
            setIsLoading(true);
            const res = await login({ email, password });
            console.log(res);

            if (res.token) {
                localStorage.setItem('authToken', res.token);
                setIsLoading(false);
                redirect('/music');
            } else {
                if (!res.email) {
                    setEmailError('Invalid email');
                }
                if (!res.password) {
                    setPasswordError('Wrong password');
                }
                setIsLoading(false);
            }
        }
    }, [email, password, validateForm, setEmailError, setPasswordError, setIsLoading]);

    // Check if the Enter button is pressed
    useEffect(() => {
        const handleKeyDown = async (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                await handleLogin();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleLogin]);

    return (
        <motion.div
            initial={{opacity: 0.8, scale: 0.9}}
            animate={{opacity: 1, scale: 1, transition: {duration: 0.3}}}
        >
            <div className="flex flex-col items-center gap-6 text-slate-700">
                <div className="text-slate-700 shadow w-12 h-12 rounded-md flex items-center justify-center">
                    <User width={30} height={30}/>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <h1 className="font-bold text-3xl">Login</h1>
                    <h2>Welcome back! Please enter your credentials.</h2>

                    <div className="text-center text-xs">
                        <span>Don&#39;t have an account ? </span>
                        <Link href="/register" className="text-slate-700 underline hover:text-primary">
                            Click here to register
                        </Link>
                    </div>
                </div>

                <button className="btn btn-outline text-slate-700 flex items-center gap-2 w-full">
                    <Image src="/google.png" alt="google" width={25} height={25}/> Sign in with Google
                </button>

                <div className="divider my-0">OR</div>

                <div className="w-full lg:w-[400px] flex flex-col gap-1">
                    {/* Email Field */}
                    <label className="form-control w-full">
                        <div className="label font-semibold">
                            <span className="label-text text-slate-700">Email *</span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            placeholder="Enter your Email"
                            className={`input input-md input-bordered text-slate-700 bg-white text-sm w-full ${emailError && 'input-error'}`}
                        />
                        {emailError && <span className="text-red-500 text-xs mt-1">{emailError}</span>}
                    </label>

                    {/* Password Field */}
                    <label className="form-control w-full">
                        <div className="label font-semibold">
                            <span className="label-text text-slate-700">Password *</span>
                        </div>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            placeholder="Enter your Password"
                            className={`input input-md input-bordered text-slate-700 bg-white text-sm w-full ${passwordError && 'input-error'}`}
                        />
                        {passwordError && <span className="text-red-500 text-xs mt-1">{passwordError}</span>}
                    </label>
                </div>

                <button
                    onClick={handleLogin}
                    className="btn w-full bg-primary border-none text-white"
                    disabled={isLoading} // Disable button during loading
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>

                <div className="text-center text-xs underline">
                    <Link href="/forgot-password" className="text-slate-700 hover:text-primary">
                        Forgot your password ?
                    </Link>
                </div>

            </div>
        </motion.div>
    );
};

export default LoginPage;
