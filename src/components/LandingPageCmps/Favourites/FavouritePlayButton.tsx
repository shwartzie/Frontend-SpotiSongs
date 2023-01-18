import React from 'react';

type props = {
    setPlayStatus: React.Dispatch<React.SetStateAction<boolean>>;
    isPlaying: boolean;
};


export const FavouritePlayButton = ({ setPlayStatus, isPlaying }: props) => {

    // console.log("hello")
    const pauseButton = <svg role="img" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" width="24" height="24">
        <path d="M15,22V2h5v20H15z M9,22V2H4v20H9z" />
    </svg>;

    const playButton = <svg role="img" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" width="24" height="24">
        <path d="M19,12L5,22.2V1.8L19,12z" />
    </svg>;

    return (
        <div className='favourite-button'>
            <button onClick={() => setPlayStatus((prev) => !prev)}>
                <span className='favourite-button-first-span'>
                    <span>
                        {isPlaying ? playButton : pauseButton}
                    </span>
                </span>
            </button>
        </div>
    );
};






