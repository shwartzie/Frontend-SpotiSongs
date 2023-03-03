import { FavouriteTitle } from 'Features/Home/components/FavouriteTitle';
import React, { useState } from 'react';

type ArtistInfoDisplayProps = {
	songsData: any;
};
export const ArtistInfoDisplay = ({ songsData }: ArtistInfoDisplayProps) => {
	return (
		<a>
			{/* <span>{song.name}</span> */}
			{/* <img src={song.imageUrl} alt="" /> */}
		</a>
	);
};
