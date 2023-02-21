import React from 'react';
import { AudioElement } from '../../../types';

interface NextSongProp {
    songs: any;
    currentSong: CurrentSong;
    setCurrentSong: React.Dispatch<React.SetStateAction<any>>;
}

type CurrentSong = {
    title: string;
    url: string;
};

export const NextSong = ({ songs, currentSong, setCurrentSong }: NextSongProp) => {

    const handleNextSong = () => {
        const index = songs.findIndex(x => x.title == currentSong.title);

        if (index == songs.length - 1) {
            setCurrentSong(songs[0]);
        } else {
            setCurrentSong(songs[index + 1]);
        } 

    };
    return (
        <button className='next-song-button' onClick={() => handleNextSong()}>
            <svg></svg>
        </button>
    );
};