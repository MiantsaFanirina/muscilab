'use client';
import { useScrollableContentContext } from "@/features/core/context/scrollableContentContext";
import { FC } from "react";

interface ArtistCardProps {
    imageUrl: string;
    name: string;
    description: string;
}

const ArtistCard: FC<ArtistCardProps> = ({
                                             imageUrl,
                                             name,
                                             description,
                                         }) => {
    const { itemsNumber } = useScrollableContentContext();
    return (
        <div className={`
            sm:w-1/${itemsNumber} sm:min-w-[200px] sm:max-w-[200px] shrink-0 sm:snap-start flex flex-col p-4 rounded-lg 
            hover:bg-slate-300 transition-all duration-200 cursor-pointer
            w-2/3 snap-center
            items-center
            `}>
            <div className={'w-[150px] h-[150px] overflow-hidden rounded-full'}>
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <p className={'w-[150px] text-center font-bold text-xs mt-4'}>
                {name}
            </p>
        </div>
    );
};

export default ArtistCard;
