import React from 'react';
import { NextSong } from '../../NextSong/pages/NextSong';
import { PlayButton } from '../../PlayButton/pages/PlayButton';
import { PreviousSong } from '../../PreviousSong/pages/PreviousSong';
import { Repeat } from '../../Repeat/pages/Repeat';
import { Shuffle } from '../../Shuffle/pages/Shuffle';
export const ControlButtons = () => {

    return (
        <article className='control-buttons-container'>
            <Shuffle />
            <PreviousSong />
            <PlayButton />
            <NextSong />
            <Repeat />
        </article>
    );
};