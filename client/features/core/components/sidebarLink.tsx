'use client'
import Link from "next/link";
import {SidebarItem} from "@/features/core/type/type";
import {usePathname} from "next/navigation";

const SidebarLink = ({name, href, icon}: SidebarItem) => {
    const pathname = usePathname();
    if (pathname === href) {
        return (
            <Link
                href={href}
                className={'relative text-slate-700 bg-slate-100 font-semibold w-full pl-12 h-[40px] flex items-center gap-4'}
            >
                <span className={'text-primary'}>{icon}</span>
                <span className={'text-xs'}>{name}</span>
                <div className={'w-1 h-full bg-primary absolute right-0 rounded-sm'}></div>
            </Link>
        );
    }

    return (
        <Link
            href={href}
            className={'relative text-slate-500 w-full pl-12 h-[40px] flex items-center gap-4 hover:bg-slate-100 transition-all'}>
            {icon}
            <span className={'text-xs'}>{name}</span>
        </Link>
    );

};

export default SidebarLink;