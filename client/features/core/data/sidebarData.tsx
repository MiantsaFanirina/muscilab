import {CalendarHeart, CirclePlay, Compass, Menu, Music, Upload} from "lucide-react";
import {SidebarItem} from "@/features/core/type/type";

const sidebarDataTop: SidebarItem[] = [
    {
        name: "Music",
        href: '/music',
        icon: <Music width={16} height={16}/>
    },
    {
        name: "Video",
        href: '/video',
        icon: <CirclePlay width={16} height={16}/>
    },
    {
        name: "Explore",
        href: '/explore',
        icon: <Compass width={16} height={16}/>
    },
    {
        name: "Events",
        href: '/events',
        icon: <CalendarHeart width={16} height={16}/>
    }
];

const sidebarDataMid: SidebarItem[] = [
    {
        name: "List",
        href: '/',
        icon: <Menu width={16} height={16}/>
    },
    {
        name: "Upload",
        href: '/',
        icon: <Upload width={16} height={16}/>
    },
];

export {sidebarDataTop, sidebarDataMid};