import { FavouriteTitle } from 'Features/Home/components/FavouriteTitle';
import React, { useState } from 'react'

type SearchLayoutPreviewProps = {
    genre: {
        id: string;
        name: string;
        imageUrl: string;
        backgroundColor: string
    }
}
export const SearchLayoutPreview = ({ genre }: SearchLayoutPreviewProps) => {
    return (
        <a style={{backgroundColor: genre?.backgroundColor}}>
            <span>{genre.name}</span>
            <img src={genre.imageUrl} alt="" />
        </a>
    )
}
