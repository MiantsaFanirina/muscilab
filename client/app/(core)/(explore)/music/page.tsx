'use client'
import MusicHeader from "@/features/core/music/components/musicHeader";
import MusicContainer from "@/features/core/music/components/musicContainer";
import {ScrollableContentContextProvider} from "@/features/core/context/scrollableContentContext";

const HomePage = () => {

    return (
        <>
            <div className="w-full h-full grid grid-cols-12 grid-rows-12 gap-4">
                <div
                    className="
                        col-span-12
                        bg-slate-50 rounded-md drop-shadow-sm
                        z-50
                    "
                >
                    <MusicHeader />
                </div>
                <div
                    className="
                        col-span-12 xl:col-span-8 row-span-11 row-start-2
                        bg-gradient-to-b from-slate-200 to-white rounded-md drop-shadow-sm
                        overflow-hidden
                    "
                >
                    <ScrollableContentContextProvider>
                        <MusicContainer />
                    </ScrollableContentContextProvider>
                </div>
                <div
                    className="
                        hidden xl:flex col-span-4 row-span-11 col-start-9 row-start-2 bg-slate-50
                        rounded-md drop-shadow-sm
                    "
                >

                </div>
            </div>
        </>
    );
};

export default HomePage;
