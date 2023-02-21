import React, {forwardRef} from 'react';

interface PreviousSong {
    songs: any;
    currentSong: CurrentSong;
    setCurrentSong: React.Dispatch<React.SetStateAction<any>>;
}

type CurrentSong = {
    title: string;
    url: string;
};

export const PreviousSong = ({ songs, currentSong, setCurrentSong }: PreviousSong) => {


    const handlePreviousSong = () => {
        const index = songs.findIndex(song => song.title === currentSong.title);
        if (!index) {
            setCurrentSong(songs[songs.length - 1]);
        } else {
            setCurrentSong(songs[index - 1]);
        }
    };

    return (
        <button className='previous-song-button' onClick={() => handlePreviousSong()}>
            <svg></svg>
        </button>
    );
};