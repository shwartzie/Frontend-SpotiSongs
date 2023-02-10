import React from 'react';
import { AudioElement } from '../../../types';
import { NextSong } from '../../NextSong/pages/NextSong';
import { PlayButton } from '../../PlayButton/pages/PlayButton';
import { PreviousSong } from '../../PreviousSong/pages/PreviousSong';
import { Repeat } from '../../Repeat/pages/Repeat';
import { Shuffle } from '../../Shuffle/pages/Shuffle';

interface ControlButtonsProps {
    songs: any;
    currentSong: CurrentSong;
    setCurrentSong: React.Dispatch<React.SetStateAction<any>>;
    setSongs: React.Dispatch<React.SetStateAction<CurrentSong[]>>;
    isPlaying: boolean;
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    audioElement: AudioElement;
};

type CurrentSong = {
    title: string;
    url: string;
};


export const ControlButtons = (
    { isPlaying, setPlaying, setCurrentSong, songs, audioElement, currentSong }: ControlButtonsProps) => {

    const skipPayLoad = {
        setCurrentSong,
        songs,
        audioElement,
        currentSong
    };

    return (
        <article className='control-buttons-container'>
            <Shuffle />
            <PreviousSong {...skipPayLoad} />
            <PlayButton isPlaying={isPlaying} setPlaying={setPlaying} />
            <NextSong {...skipPayLoad} />
            <Repeat />
        </article>
    );
};