'use client'
import {Music} from "lucide-react";
import Steps from "@/features/register/components/steps";
import {useEffect, useState} from "react";
import StepIndicator from "@/features/register/components/stepIndicator";
import {usePathname} from "next/navigation";

const RegisterLayout = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    const [step, setStep] = useState<number>(0);

    // Get Current step
    const pathname = usePathname()

    useEffect(() => {
        switch (pathname) {
            case "/register/personal-info":
                setStep(1)
                break;
            case "/register/password":
                setStep(2)
                break;
            case "/register/interest":
                setStep(3)
                break
        }
    }, [pathname])

    return (
        <div className="w-full h-screen bg-slate-50 flex">


            <div className={'h-full hidden lg:block p-12 pr-32'}>
                {/*LOGO*/}
                <div className={'flex items-center gap-2 mb-16'}>
                    <Music width={25} height={25} className={'text-primary'}/>
                    <h1 className={'text-xl font-bold text-slate-700'}>MusicLab</h1>
                </div>

                {/*STEPS*/}
                <Steps step={step}/>
            </div>

            <div className={'w-full h-full bg-white flex justify-center items-center p-12 lg:p-40'}>

                {children}

                <StepIndicator step={step}/>

            </div>

        </div>
    )
}
export default RegisterLayout;