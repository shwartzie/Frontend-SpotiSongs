import React from 'react';
import { AudioElement } from '../../../types';

interface NextSongProp {
    songs: any;
    currentSong: CurrentSong;
    setCurrentSong: React.Dispatch<React.SetStateAction<any>>;
    audioElement: AudioElement;
}

type CurrentSong = {
    title: string;
    url: string;
};

export const NextSong = ({ songs, currentSong, setCurrentSong, audioElement }: NextSongProp) => {


    const handleNextSong = () => {
        const index = songs.findIndex(x => x.title == currentSong.title);
        console.log(index, "handleNextSong");
        if (index == songs.length - 1) {
            setCurrentSong(songs[0]);
        } else {
            setCurrentSong(songs[index + 1]);
        }
        audioElement.current.currentTime = 0;

    };
    return (
        <button className='next-song-button' onClick={() => handleNextSong()}>
            <svg></svg>
        </button>
    );
};