'use client'
import Link from "next/link";
import {Bell, House, LogOut, PanelTop, Search, Settings} from "lucide-react";
import {useState} from "react";

const MusicHeader = () => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <div
            className={`
                w-full h-full
                flex items-center justify-between
                px-4
            `}
        >
            <div className={'flex items-center gap-2'}>

                <Link
                    href={'/music'}
                    className={`
                        w-[40px] h-[40px] 
                        flex items-center justify-center
                        bg-white rounded-full
                        shadow-sm
                        text-slate-500
                        hover:text-primary
                        transition-all
                    `}
                >
                    <House width={16} height={16} strokeWidth={2.75}></House>
                </Link>

                <div
                    className={`
                        h-[40px]
                        bg-white
                        rounded-md
                        shadow-sm
                        flex items-center gap-2
                        text-slate-500
                        px-2
                    `}
                >

                    <Search
                        width={16} height={16} strokeWidth={2.75}
                        className={searchValue ? 'text-primary' : ''}
                    />
                    <input
                        type="text"
                        className={`
                            w-[200px]
                            bg-transparent
                            text-xs
                            outline-none
                            placeholder:text-slate-500
                            text-slate-700
                        `}
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value)
                        }}
                        placeholder={'What do you want to play?'}
                    />

                    {/*DIVIDER*/}
                    <div className="h-full py-2">
                        <div className={"w-[1.3px] h-full bg-slate-400"}></div>
                    </div>

                    <Link href={'/music'} className={'text-slate-500 hover:text-primary transition-all'}>
                        <PanelTop width={16} height={16} strokeWidth={2.75}/>
                    </Link>


                </div>

            </div>
            <div className={'flex gap-2'}>

                <div className="dropdown dropdown-end dropdown-hover">
                    <div
                        tabIndex={0}
                        className="
                            w-[40px] h-[40px]
                            bg-white
                            text-slate-500
                            rounded-full shadow-sm
                            overflow-hidden flex
                            items-center justify-center
                            hover:text-primary
                            transition-all
                            cursor-pointer
                        "
                    >
                        <Bell width={16} height={16} strokeWidth={2.75}/>
                    </div>
                    <ul tabIndex={0} className="menu dropdown-content rounded-md bg-white w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end dropdown-hover">
                    <div
                        tabIndex={0}
                        className="
                            w-[40px] h-[40px]
                            bg-white
                            text-slate-500
                            rounded-full shadow-sm
                            overflow-hidden flex
                            items-center justify-center
                            hover:text-primary
                            transition-all
                            cursor-pointer
                        "
                    >
                        <Settings width={16} height={16} strokeWidth={2.75}/>
                    </div>
                    <ul tabIndex={0} className="menu dropdown-content rounded-md bg-white w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <button
                    tabIndex={0}
                    className="
                            w-[40px] h-[40px]
                            bg-white
                            text-red-400
                            rounded-full shadow-sm
                            overflow-hidden flex
                            items-center justify-center
                            transition-all
                        "
                >
                    <LogOut width={16} height={16} strokeWidth={2.75}/>
                </button>

            </div>
        </div>
    );
};
export default MusicHeader;