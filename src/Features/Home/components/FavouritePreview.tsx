import React, { useState } from 'react';

import { FavouriteTitle } from './FavouriteTitle';
import { FavouritePlayButton } from './FavouritePlayButton';

type Favourite = {
    id: string;
    songs: Array<Song>;
    title: string;
    imageUrl: "";
};
type Song = {
    songName: string;
    id: string;
};

export const FavouritePreview = ({ favourite }: any) => {
    const [isPlaying, setPlayStatus] = useState<boolean>(false);

    const [isHovering, setHover] = useState<boolean>(false);



    const { title } = favourite;

    return (
        <section className='favourite-display'
            onMouseEnter={(event) => setHover(prev => !isHovering)}
            onMouseLeave={(event) => setHover(prev => !isHovering)}>
            <div>
                <div className='favourite-image'>
                    <div>
                    </div>
                </div>

                <div className='favourite-title-button-container'>
                    <FavouriteTitle title={title} />
                    {isHovering && <FavouritePlayButton setPlayStatus={setPlayStatus} isPlaying={isPlaying} />}
                </div>
            </div>
        </section>
    );
}

