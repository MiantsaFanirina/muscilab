'use client'
import {Flag} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'motion/react'

const PersonalInfo = () => {
    return (
        <motion.div
            initial={{opacity: 0.8, scale: 1.1}}
            whileInView={{opacity: 1, scale: 1, transition: {duration: 0.3}}}
        >

            <div className={'flex flex-col items-center gap-6 text-slate-700'}>

                <div className={'text-slate-700 shadow w-12 h-12 rounded-md flex items-center justify-center'}>
                    <Flag
                        width={30} height={30}>
                    </Flag>
                </div>

                <div className={'flex flex-col items-center gap-1'}>
                    <h1 className={'font-bold text-3xl'}>Your details</h1>
                    <h2>Please provide your name and email.</h2>
                </div>

                <button className={'btn btn-outline text-slate-700 flex items-center gap-2 w-full'}>
                    <Image src={'/google.png'} alt={'google'} width={25} height={25}/> Sign up with Google
                </button>

                <div className="divider my-0">OR</div>

                <div className={'w-full lg:w-[400px] flex flex-col gap-1'}>

                    <label className="form-control w-full">
                        <div className="label font-semibold">
                            <span className="label-text text-slate-700">First name *</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter your First name"
                            className="input input-md input-bordered text-slate-700 bg-white text-sm w-full "
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label font-semibold">
                            <span className="label-text text-slate-700">Last name *</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter your Last name"
                            className="input input-md input-bordered text-slate-700 bg-white text-sm w-full "
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label font-semibold">
                            <span className="label-text text-slate-700">Email *</span>
                        </div>
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="input input-md input-bordered text-slate-700 bg-white text-sm w-full "
                        />
                    </label>
                </div>

                <Link href={'/register/password'} className={'btn w-full bg-primary border-none text-white'}>
                    Continue
                </Link>
            </div>
        </motion.div>
    );
};
export default PersonalInfo;
