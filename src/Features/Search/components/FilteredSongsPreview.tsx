import { FavouriteTitle } from 'Features/Home/components/FavouriteTitle';
import React, { useState } from 'react';

type FilteredSongsPreviewProps = {
	// song: {
	//     id: string;
	//     name: string;
	//     imageUrl: string;
	//     backgroundColor: string;
	// };
	song: any;
};
export const FilteredSongsPreview = ({ song }: FilteredSongsPreviewProps) => {
	return (
		<a>
			<span>{song.name}</span>
			<img src={song.imageUrl} alt="" />
		</a>
	);
};
