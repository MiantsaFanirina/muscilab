const StepIndicator = ({step}: {step: number}) => {
    return (

        <div className={'flex gap-2 justify-center items-center absolute bottom-16'}>
            <div style={{transition: "all .3s ease-in-out"}} className={`${step === 1 ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-slate-300"} rounded-xl`}>
            </div>
            <div style={{transition: "all .3s ease-in-out"}} className={`${step === 2 ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-slate-300"} rounded-xl`}>
            </div>
            <div style={{transition: "all .3s ease-in-out"}} className={`${step === 3 ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-slate-300"} rounded-xl`}>
            </div>
        </div>
    );
};

export default StepIndicator;