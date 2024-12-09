import {CircleCheck} from "lucide-react";

const Steps = ({step} : {step: number}) => {
    return (
        <div className={'flex flex-col gap-6'}>
            <div
                className={`flex gap-2 ${step > 0 ? "text-slate-700" : ""}`}
                style={{transition: 'all 0.3s ease-in-out', msTransitionDelay: '0.3s'}}
            >
                <CircleCheck width={25} height={25} className={`${step > 0 ? "text-primary" : ""}`}></CircleCheck>
                <div>
                    <h1 className={'font-bold'}>Your details</h1>
                    <p style={{whiteSpace: 'nowrap'}}>Please provide your name and email</p>
                </div>
            </div>


            <div
                className={`flex gap-2 ${step > 1 ? "text-slate-700" : ""}`}
                style={{transition: 'all 0.3s ease-in-out', msTransitionDelay: '0.3s'}}
            >
                <CircleCheck width={25} height={25} className={`${step > 1 ? "text-primary" : ""}`} ></CircleCheck>
                <div>
                    <h1 className={'font-bold'} style={{whiteSpace: 'nowrap'}}>Choose a password</h1>
                    <p style={{whiteSpace: 'nowrap'}}>Must be at least 8 characters</p>
                </div>
            </div>

            <div
                className={`flex gap-2 ${step > 2 ? "text-slate-700" : ""}`}
                style={{transition: 'all 0.3s ease-in-out', msTransitionDelay: '0.3s'}}
            >
                <CircleCheck width={25} height={25} className={`${step > 2 ? "text-primary" : ""}`}></CircleCheck>
                <div>
                    <h1 className={'font-bold'} style={{whiteSpace: 'nowrap'}}>Choose your interest</h1>
                    <p style={{whiteSpace: 'nowrap'}}>What makes you come to MusicLab</p>
                </div>
            </div>
        </div>
    )
};
export default Steps;