import React, { useState } from 'react';

import { ExpandingImage } from '../components/ExpandImage';
import { LikedSong } from '../components/LikedSong';
import { PreviewImage } from '../components/PreviewImage';
import { SongTitle } from '../components/SongTitle';

const demoSrc = 'https://i.scdn.co/image/ab67616d00004851eab40fc794b88b9d1e012578';

export const SongDetailsPreview = () => {
    const [isLiked, setLiked] = useState<boolean>(false);
    return (
        <section className='left-side-footer-container'>
            {/* authors={["Eminem", "Dido"]} */}
            <ExpandingImage src={demoSrc} />
            <SongTitle songName={"Stan"}  />
            <LikedSong isLiked={isLiked} setLiked={setLiked} />
            <PreviewImage src={demoSrc}/>
        </section>
    );
};