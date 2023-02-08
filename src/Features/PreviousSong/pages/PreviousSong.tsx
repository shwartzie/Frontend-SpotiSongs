import React from 'react';
import { AudioElement } from '../../../types';

interface PreviousSong {
    songs: any;
    currentSong: CurrentSong;
    setCurrentSong: React.Dispatch<React.SetStateAction<any>>;
    audioElement: AudioElement;
}

type CurrentSong = {
    title: string;
    uri: string;
};

export const PreviousSong = ({ songs, currentSong, setCurrentSong, audioElement }: PreviousSong) => {


    const handlePreviousSong = () => {
        const index = songs.findIndex(song => song.title === currentSong.title);
        console.log(index, "handlePreviousSong");
        if (!index) {
            setCurrentSong(songs[songs.length - 1]);
        } else {
            setCurrentSong(songs[index - 1]);
        }
        audioElement.current.currentTime = 0;
    };

    return (
        <button className='previous-song-button' onClick={() => handlePreviousSong()}>
            <svg></svg>
        </button>
    );
};