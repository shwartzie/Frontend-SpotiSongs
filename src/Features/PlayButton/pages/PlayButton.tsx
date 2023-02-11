import React, { useState } from 'react';

interface ControlButtonsProps {
    isPlaying: boolean;
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PlayButton = ({ isPlaying, setPlaying }: ControlButtonsProps) => {


    const className = (!isPlaying ? 'playing' : 'paused');

    const handlePlay = () => {
        setPlaying(prev => !prev);
    };

    return (
        <button className='g-play-button' onClick={() => handlePlay()}>
            <svg className={className}></svg>
        </button>
    );
};