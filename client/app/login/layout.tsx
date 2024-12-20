'use client'

const RegisterLayout = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {


    return (
        <div className="w-full h-screen bg-slate-50 flex">

            <div className={'w-full h-full bg-white flex justify-center items-center p-12 lg:p-40'}>
                {children}
            </div>

        </div>
    )
}
export default RegisterLayout;