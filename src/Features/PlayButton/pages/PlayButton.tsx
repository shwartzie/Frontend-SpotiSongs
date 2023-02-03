import React, { useState } from 'react';
export const PlayButton = () => {

    const [isPlaying, setPlaying] = useState<boolean>(false);

    const className = (isPlaying ? 'playing' : 'paused');

    const handlePlay = () => {
        setPlaying(prev => !prev);
    };

    return (
        <button className='play-button' onClick={() => handlePlay()}>
            <svg className={className}></svg>
        </button>
    );
};