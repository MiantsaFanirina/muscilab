'use client'
import SidebarLink from "@/features/core/components/sidebarLink";
import {sidebarDataMid, sidebarDataTop} from "@/features/core/data/sidebarData";

const Sidebar = () => {
    return (
        <div className={'w-full h-full flex flex-col gap-y-12'}>

            {/*PROFILE SECTION*/}
            <div className={'w-full pt-12 px-12 flex gap-4 items-center'}>
                {/*AVATAR*/}
                <div className={'w-[50px] h-[50px] rounded-full bg-slate-300'}></div>
                <div className={'h-full flex flex-col justify-between py-1'}>
                    <h1 className={'text-xs text-slate-700 font-semibold'}>Miantsa Fanirina</h1>
                    <div className="badge badge-primary badge-outline rounded-md text-xs font-semibold">Premium</div>
                </div>
            </div>

            <div className={'w-full flex flex-col'}>

                {sidebarDataTop.map((item, index) => (
                    <SidebarLink
                        key={index}
                        name={item.name}
                        href={item.href}
                        icon={item.icon}
                    />
                ))}

            </div>

            <div className={'w-full flex flex-col'}>
                <h2 className={'uppercase ml-12 mb-3 text-sm text-slate-500'}>your music</h2>
                {sidebarDataMid.map((item, index) => (
                    <SidebarLink
                        key={index}
                        name={item.name}
                        href={item.href}
                        icon={item.icon}
                    />
                ))}

            </div>


        </div>
    );
};

export default Sidebar;