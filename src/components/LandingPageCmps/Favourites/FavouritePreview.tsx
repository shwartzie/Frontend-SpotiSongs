import React, { useState } from 'react';
import albumImage from '../../../assets/images/album.jpg';

// import { playButtonSvg, pauseButtonSvg } from '';
import { FavouriteTitle } from './FavouriteTitle.tsx';
import { FavouritePlayButton } from './FavouritePlayButton.tsx';
export const FavouritePreview = ({ favourite }: any) => {
    const [isPlaying, setPlayStatus] = useState<boolean>(false);


    return (
        <section className='favourite-display'>
            <div>
                <div className='favourite-image'>
                    <img src={albumImage} alt="" />
                </div>

                <div className='favourite-title-button-container'>
                    <FavouriteTitle title={favourite.title} />
                    <FavouritePlayButton setPlayStatus={setPlayStatus} isPlaying={isPlaying} />
                </div>
            </div>
        </section>
    );
}

