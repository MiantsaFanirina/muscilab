import MusicCard from "@/features/core/music/components/musicCard";
import ArtistCard from "@/features/core/music/components/artistCard";
import ScrollableContent from "@/features/core/components/scrollableContent";

const musicCardData = [
    {
        id: 1,
        title: "Your Weekly Mixtape",
        description: "Your weekly mixtape of fresh music...",
        imageUrl: "https://picsum.photos/id/1/200/300",
        artist: "DJ Fresh",
        genre: "Electronic",
        releaseDate: "2024-01-01"
    },
    {
        id: 2,
        title: "Fresh Beats",
        description: "Catch the freshest beats from around the world.",
        imageUrl: "https://picsum.photos/id/2/200/300",
        artist: "Beatz Maker",
        genre: "Hip-Hop",
        releaseDate: "2023-12-15"
    },
    {
        id: 3,
        title: "Classical Vibes",
        description: "Relax with the smoothest classical compositions.",
        imageUrl: "https://picsum.photos/id/3/200/300",
        artist: "Ludwig van Beethoven",
        genre: "Classical",
        releaseDate: "2024-01-10"
    },
    {
        id: 4,
        title: "Indie Sounds",
        description: "Explore the latest in indie music.",
        imageUrl: "https://picsum.photos/id/4/200/300",
        artist: "The Indie Collective",
        genre: "Indie",
        releaseDate: "2023-11-25"
    },
    {
        id: 5,
        title: "Rock Legends",
        description: "A collection of timeless rock anthems.",
        imageUrl: "https://picsum.photos/id/5/200/300",
        artist: "The Rockers",
        genre: "Rock",
        releaseDate: "2024-02-05"
    },
    {
        id: 6,
        title: "Funk Grooves",
        description: "Feel the funk and get your groove on.",
        imageUrl: "https://picsum.photos/id/6/200/300",
        artist: "Funky Soul",
        genre: "Funk",
        releaseDate: "2023-12-20"
    },
    {
        id: 7,
        title: "Jazz Classics",
        description: "The best of smooth jazz to unwind.",
        imageUrl: "https://picsum.photos/id/7/200/300",
        artist: "Miles Davis",
        genre: "Jazz",
        releaseDate: "2024-01-08"
    },
    {
        id: 8,
        title: "Pop Sensations",
        description: "Pop hits that get you dancing.",
        imageUrl: "https://picsum.photos/id/8/200/300",
        artist: "Pop Star",
        genre: "Pop",
        releaseDate: "2024-01-15"
    },
    {
        id: 9,
        title: "R&B Vibes",
        description: "Smooth R&B tracks for every mood.",
        imageUrl: "https://picsum.photos/id/9/200/300",
        artist: "R&B King",
        genre: "R&B",
        releaseDate: "2023-12-30"
    },
    {
        id: 10,
        title: "Soulful Sounds",
        description: "Soul music that speaks to the heart.",
        imageUrl: "https://picsum.photos/id/10/200/300",
        artist: "Soul Star",
        genre: "Soul",
        releaseDate: "2024-01-25"
    },
    {
        id: 11,
        title: "Experimental Beats",
        description: "Unique beats from experimental artists.",
        imageUrl: "https://picsum.photos/id/11/200/300",
        artist: "The Beatmakers",
        genre: "Experimental",
        releaseDate: "2023-12-18"
    },
    {
        id: 12,
        title: "Chill Vibes",
        description: "Relax and unwind with chill beats.",
        imageUrl: "https://picsum.photos/id/12/200/300",
        artist: "Chillwave",
        genre: "Chill",
        releaseDate: "2024-02-01"
    },
    {
        id: 13,
        title: "Summer Anthems",
        description: "The ultimate playlist for summer parties.",
        imageUrl: "https://picsum.photos/id/13/200/300",
        artist: "Summer Crew",
        genre: "Pop",
        releaseDate: "2024-01-12"
    },
    {
        id: 14,
        title: "Reggae Rhythms",
        description: "Feel the vibe of reggae and ska.",
        imageUrl: "https://picsum.photos/id/14/200/300",
        artist: "Rasta Sounds",
        genre: "Reggae",
        releaseDate: "2024-01-18"
    },
    {
        id: 15,
        title: "Acoustic Mornings",
        description: "Wake up with calming acoustic tracks.",
        imageUrl: "https://picsum.photos/id/15/200/300",
        artist: "Acoustic Soul",
        genre: "Acoustic",
        releaseDate: "2024-02-10"
    },
    {
        id: 16,
        title: "Hardcore Hits",
        description: "Unleash the power of hardcore music.",
        imageUrl: "https://picsum.photos/id/16/200/300",
        artist: "Hardcore Army",
        genre: "Hardcore",
        releaseDate: "2024-01-28"
    },
    {
        id: 17,
        title: "Electronic Waves",
        description: "Immerse yourself in electronic sounds.",
        imageUrl: "https://picsum.photos/id/17/200/300",
        artist: "Waveform",
        genre: "Electronic",
        releaseDate: "2024-01-22"
    },
    {
        id: 18,
        title: "Alternative Sounds",
        description: "Experience the edge of alternative music.",
        imageUrl: "https://picsum.photos/id/18/200/300",
        artist: "The Outsiders",
        genre: "Alternative",
        releaseDate: "2024-02-03"
    },
    {
        id: 19,
        title: "Dance Party",
        description: "Get the party started with dance music.",
        imageUrl: "https://picsum.photos/id/19/200/300",
        artist: "DJ Party",
        genre: "Dance",
        releaseDate: "2024-01-05"
    },
    {
        id: 20,
        title: "Hip-Hop Hits",
        description: "Top hip-hop tracks from the best artists.",
        imageUrl: "https://picsum.photos/id/20/200/300",
        artist: "The Rappers",
        genre: "Hip-Hop",
        releaseDate: "2024-01-20"
    }
];


const MusicContainer = () => {
    return (
        <div
            className="
                w-full h-full flex flex-col flex-nowrap gap-4 py-6 text-slate-500 overflow-y-auto
            "
        >
            <div className={'px-6 flex gap-2 items-center text-slate-500 text-xs'}>
                <button className={'px-2 py-1 rounded-lg bg-white text-primary'}>All</button>
                <button className={'px-2 py-1 rounded-lg bg-slate-100 hover:bg-white transition-all'}>Music</button>
                <button className={'px-2 py-1 rounded-lg bg-slate-100  hover:bg-white transition-all'}>Podcast</button>
            </div>

            <h1 className={'px-6 font-semibold text-md mt-4'}>Made for Miantsa Fanirina</h1>
            <ScrollableContent>
                {musicCardData.map((musicCard) => (
                    <MusicCard
                        key={musicCard.id}
                        imageUrl={musicCard.imageUrl}
                        title={musicCard.title}
                        description={musicCard.description}
                        artist={musicCard.artist}
                        genre={musicCard.genre}
                        releaseDate={musicCard.releaseDate}
                    />
                ))}
            </ScrollableContent>

            <h1 className={'font-semibold px-6 text-md mt-4'}>Your top mixes</h1>
            <ScrollableContent>
                {musicCardData.map((musicCard) => (
                    <MusicCard
                        key={musicCard.id}
                        imageUrl={musicCard.imageUrl}
                        title={musicCard.title}
                        description={musicCard.description}
                        artist={musicCard.artist}
                        genre={musicCard.genre}
                        releaseDate={musicCard.releaseDate}
                    />
                ))}
            </ScrollableContent>

            <h1 className={'font-semibold px-6 shrink-0 text-md mt-4'}>Best of artist</h1>
            <ScrollableContent>
                {musicCardData.map((musicCard) => (
                    <ArtistCard
                        key={musicCard.id}
                        imageUrl={musicCard.imageUrl}
                        name={musicCard.title}
                        description={musicCard.description}
                    />
                ))}
            </ScrollableContent>

            <h1 className={'font-semibold px-6 shrink-0 text-md mt-4'}>Best of the week</h1>
            <ScrollableContent>
                {musicCardData.map((musicCard) => (
                    <MusicCard
                        key={musicCard.id}
                        imageUrl={musicCard.imageUrl}
                        title={musicCard.title}
                        description={musicCard.description}
                        artist={musicCard.artist}
                        genre={musicCard.genre}
                        releaseDate={musicCard.releaseDate}
                    />
                ))}
            </ScrollableContent>

        </div>
    );
};

export default MusicContainer;