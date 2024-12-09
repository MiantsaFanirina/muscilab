'use client'
import {ChevronLeft, KeyRound} from "lucide-react";
import Link from "next/link";
import {motion} from "motion/react";

const Password = () => {
    return (
        <motion.div
            initial={{opacity: 0.8, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1, transition: {duration: 0.3}}}
        >
            <div className={'relative flex flex-col items-center gap-6 text-slate-700'}>

                <div className={'text-slate-700 shadow w-12 h-12 rounded-md flex items-center justify-center'}>
                    <KeyRound
                        width={30} height={30}>
                    </KeyRound>
                </div>

                <div className={'flex flex-col items-center gap-1'}>
                    <h1 className={'font-bold text-3xl'}>Choose a password</h1>
                    <h2>Make your account secured.</h2>
                </div>

                <div className={'w-full lg:w-[400px] flex flex-col gap-1'}>

                    <label className="form-control w-full">
                        <div className="label font-semibold">
                            <span className="label-text text-slate-700">Password * </span>
                            <span className={'font-light text-xs text-slate-400'}>( Must be at least 8 characters )</span>
                        </div>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-md input-bordered text-slate-700 bg-white text-sm w-full "
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label font-semibold">
                            <span className="label-text text-slate-700">Confirm your password *</span>
                        </div>
                        <input
                            type="passowrd"
                            placeholder="Retype your password"
                            className="input input-md input-bordered text-slate-700 bg-white text-sm w-full "
                        />
                    </label>
                </div>

                <Link href={'/register/interest'} className={'btn w-full bg-primary border-none text-white'}>
                    Continue
                </Link>

                <Link
                    href={'/register/personal-info'}
                    className={`
                        absolute -top-36 -left-10 lg:-left-36
                        flex items-center
                        text-sm
                        hover:text-primary
                    `}
                >
                    <ChevronLeft width={20} height={20}></ChevronLeft>
                    Previous
                </Link>
            </div>
        </motion.div>
    );
};
export default Password;
