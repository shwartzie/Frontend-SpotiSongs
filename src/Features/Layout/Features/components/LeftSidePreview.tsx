import React from 'react'

import { ExpandingImage } from './ExpandImage'
import { LikedSong } from './LikedSong'
import { PreviewImage } from './PreviewImage'
import { SongTitle } from './SongTitle'

export const LeftSidePreview = () => {

    return (
        <section className='left-side-footer-container'>
            <ExpandingImage src={''} />
            <SongTitle />
            <LikedSong />
            <PreviewImage />
        </section>
    )
}