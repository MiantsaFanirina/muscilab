'use client'
import React, {useState} from 'react';

const MultipleInterestSelect = ({search}: {search: string}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const genres = [
        { value: 'pop', label: 'Pop' },
        { value: 'rock', label: 'Rock' },
        { value: 'alternative-rock', label: 'Alternative Rock' },
        { value: 'hard-rock', label: 'Hard Rock' },
        { value: 'punk-rock', label: 'Punk Rock' },
        { value: 'progressive-rock', label: 'Progressive Rock' },
        { value: 'folk-rock', label: 'Folk Rock' },
        { value: 'blues-rock', label: 'Blues Rock' },
        { value: 'metal', label: 'Metal' },
        { value: 'heavy-metal', label: 'Heavy Metal' },
        { value: 'thrash-metal', label: 'Thrash Metal' },
        { value: 'death-metal', label: 'Death Metal' },
        { value: 'black-metal', label: 'Black Metal' },
        { value: 'doom-metal', label: 'Doom Metal' },
        { value: 'power-metal', label: 'Power Metal' },
        { value: 'glam-metal', label: 'Glam Metal' },
        { value: 'jazz', label: 'Jazz' },
        { value: 'blues', label: 'Blues' },
        { value: 'rnb', label: 'R&B' },
        { value: 'soul', label: 'Soul' },
        { value: 'funk', label: 'Funk' },
        { value: 'hip-hop', label: 'Hip Hop' },
        { value: 'rap', label: 'Rap' },
        { value: 'trap', label: 'Trap' },
        { value: 'boom-bap', label: 'Boom Bap' },
        { value: 'lofi-hip-hop', label: 'Lo-Fi Hip Hop' },
        { value: 'electro', label: 'Electro' },
        { value: 'house', label: 'House' },
        { value: 'deep-house', label: 'Deep House' },
        { value: 'tech-house', label: 'Tech House' },
        { value: 'progressive-house', label: 'Progressive House' },
        { value: 'trance', label: 'Trance' },
        { value: 'techno', label: 'Techno' },
        { value: 'dubstep', label: 'Dubstep' },
        { value: 'drum-and-bass', label: 'Drum and Bass' },
        { value: 'garage', label: 'Garage' },
        { value: 'ambient', label: 'Ambient' },
        { value: 'chillout', label: 'Chillout' },
        { value: 'downtempo', label: 'Downtempo' },
        { value: 'new-age', label: 'New Age' },
        { value: 'classical', label: 'Classical' },
        { value: 'baroque', label: 'Baroque' },
        { value: 'romantic', label: 'Romantic' },
        { value: 'opera', label: 'Opera' },
        { value: 'choral', label: 'Choral' },
        { value: 'symphony', label: 'Symphony' },
        { value: 'country', label: 'Country' },
        { value: 'bluegrass', label: 'Bluegrass' },
        { value: 'honky-tonk', label: 'Honky-Tonk' },
        { value: 'country-rock', label: 'Country Rock' },
        { value: 'americana', label: 'Americana' },
        { value: 'reggae', label: 'Reggae' },
        { value: 'ska', label: 'Ska' },
        { value: 'dancehall', label: 'Dancehall' },
        { value: 'dub', label: 'Dub' },
        { value: 'latin', label: 'Latin' },
        { value: 'salsa', label: 'Salsa' },
        { value: 'merengue', label: 'Merengue' },
        { value: 'bachata', label: 'Bachata' },
        { value: 'cumbia', label: 'Cumbia' },
        { value: 'tango', label: 'Tango' },
        { value: 'flamenco', label: 'Flamenco' },
        { value: 'reggaeton', label: 'Reggaeton' },
        { value: 'bossa-nova', label: 'Bossa Nova' },
        { value: 'samba', label: 'Samba' },
        { value: 'afrobeat', label: 'Afrobeat' },
        { value: 'highlife', label: 'Highlife' },
        { value: 'kpop', label: 'K-Pop' },
        { value: 'jpop', label: 'J-Pop' },
        { value: 'jrock', label: 'J-Rock' },
        { value: 'city-pop', label: 'City Pop' },
        { value: 'enka', label: 'Enka' },
        { value: 'anison', label: 'Anison' },
        { value: 'edm', label: 'EDM' },
        { value: 'synthwave', label: 'Synthwave' },
        { value: 'vaporwave', label: 'Vaporwave' },
        { value: 'chiptune', label: 'Chiptune' },
        { value: 'electropop', label: 'Electropop' },
        { value: 'indie', label: 'Indie' },
        { value: 'indie-rock', label: 'Indie Rock' },
        { value: 'indie-pop', label: 'Indie Pop' },
        { value: 'folk', label: 'Folk' },
        { value: 'singer-songwriter', label: 'Singer-Songwriter' },
        { value: 'gospel', label: 'Gospel' },
        { value: 'christian-rock', label: 'Christian Rock' },
        { value: 'contemporary-worship', label: 'Contemporary Worship' },
        { value: 'world', label: 'World' },
        { value: 'traditional', label: 'Traditional' },
        { value: 'celtic', label: 'Celtic' },
        { value: 'arabic', label: 'Arabic' },
        { value: 'bollywood', label: 'Bollywood' },
        { value: 'qawwali', label: 'Qawwali' },
        { value: 'klezmer', label: 'Klezmer' },
        { value: 'turkish', label: 'Turkish' },
        { value: 'experimental', label: 'Experimental' },
        { value: 'noise', label: 'Noise' },
        { value: 'avant-garde', label: 'Avant-Garde' },
        { value: 'post-rock', label: 'Post-Rock' },
        { value: 'shoegaze', label: 'Shoegaze' },
        { value: 'grunge', label: 'Grunge' },
        { value: 'emo', label: 'Emo' },
        { value: 'screamo', label: 'Screamo' },
        { value: 'math-rock', label: 'Math Rock' },
        { value: 'new-wave', label: 'New Wave' },
        { value: 'gothic-rock', label: 'Gothic Rock' },
        { value: 'industrial', label: 'Industrial' },
        { value: 'psychedelic-rock', label: 'Psychedelic Rock' },
    ];

    // Filter genres based on the search term (case-insensitive)
    const filteredGenres = genres.filter((genre) =>
        genre.label.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full overflow-hidden rounded-md mt-3">
            <div className={'bg-slate-50 border border-slate-700 rounded-md'}>
                {search.trim() && filteredGenres.length > 0 ? (
                    <ul className="w-full overflow-x-hidden max-h-32 overflow-y-auto">
                        {filteredGenres.map((genre) => (
                            <li key={genre.value} className="py-1">
                                <button className={'ml-3 mr-6 btn btn-outline w-full'}>{genre.label}</button>
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </div>
    );
}

export default MultipleInterestSelect