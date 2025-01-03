const Loading = () => {
    return (
        <div className={'w-screen h-screen bg-slate-100 flex items-center justify-center fixed left-0 top-0 z-50'}>
            <div className="flex items-center justify-between w-[35px] h-[31.5px]">
                <div
                    className="bar animate-grow"
                    style={{ animationDelay: '-0.45s' }}
                ></div>
                <div
                    className="bar animate-grow"
                    style={{ animationDelay: '-0.3s' }}
                ></div>
                <div
                    className="bar animate-grow"
                    style={{ animationDelay: '-0.15s' }}
                ></div>
                <div
                    className="bar animate-grow"
                ></div>
            </div>
        </div>
    );
};

export default Loading;
