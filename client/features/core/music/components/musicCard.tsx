'use client';
import {useScrollableContentContext} from "@/features/core/context/scrollableContentContext";
import {FC} from "react";

interface MusicCardProps {
    imageUrl: string;
    title: string;
    description: string;
    artist: string;
    genre: string;
    releaseDate: string;
}

const MusicCard: FC<MusicCardProps> = ({
       imageUrl,
       title,
       description,
       artist,
       genre,
       releaseDate
    }) => {
    const {itemsNumber} = useScrollableContentContext();
    return(
        <div className={`
            sm:min-w-[200px] sm:max-w-[200px] shrink-0 sm:snap-start flex-col p-4 rounded-lg 
            hover:bg-slate-300 transition-all duration-200 cursor-pointer
            w-full snap-center
            `}>
            <div className={'w-full h-[150px] overflow-hidden rounded-md'}>
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <p className={'w-full text-xs mt-4'}>
                {description}
            </p>
        </div>
    );
};

export default MusicCard;