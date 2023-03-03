import { FavouriteTitle } from "Features/Home/components/FavouriteTitle";
import React, { useState } from "react";

type GenreLayoutPreviewProps = {
    genre: {
        id: string;
        name: string;
        imageUrl: string;
        backgroundColor: string;
    };
};
export const GenreLayoutPreview = ({ genre }: GenreLayoutPreviewProps) => {
    return (
        <a style={{ backgroundColor: genre?.backgroundColor }}>
            <span>{genre.name}</span>
            <img src={genre.imageUrl} alt="" />
        </a>
    );
};
