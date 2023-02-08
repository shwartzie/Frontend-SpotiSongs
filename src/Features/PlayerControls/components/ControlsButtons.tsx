import React from 'react';
import { AudioElement } from '../../../types';
import { NextSong } from '../../NextSong/pages/NextSong';
import { PlayButton } from '../../PlayButton/pages/PlayButton';
import { PreviousSong } from '../../PreviousSong/pages/PreviousSong';
import { Repeat } from '../../Repeat/pages/Repeat';
import { Shuffle } from '../../Shuffle/pages/Shuffle';

type ControlButtonsProps = {
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
    uri: string;
};


export const ControlButtons = (
    { isPlaying, setPlaying, setCurrentSong, songs, audioElement, currentSong }: ControlButtonsProps) => {

    return (
        <article className='control-buttons-container'>
            <Shuffle />
            <PreviousSong setCurrentSong={setCurrentSong} songs={songs} audioElement={audioElement} currentSong={currentSong} />
            <PlayButton isPlaying={isPlaying} setPlaying={setPlaying} />
            <NextSong />
            <Repeat />
        </article>
    );
};