import React from 'react';

type Props = {
    setPlayStatus: React.Dispatch<React.SetStateAction<boolean>>;
    isPlaying: boolean;
};


export const FavouritePlayButton = ({ setPlayStatus, isPlaying }: Props) => {

    return (
        <div className='favourite-button'>
            <button onClick={() => setPlayStatus((prev) => !prev)}>
                <span className='favourite-button-first-span'>
                    <span className={isPlaying ? "pause-button" : "play-button"}>
                    </span>
                </span>
            </button>
        </div>
    );
};






