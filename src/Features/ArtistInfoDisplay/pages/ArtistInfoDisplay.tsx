import React from 'react';

type ArtistInfoDisplayProps = {
	songsData: any;
};
export const ArtistInfoDisplay = ({ songsData }: ArtistInfoDisplayProps) => {
	const { artist, albumImage } = songsData;
	return (
		<div>
			<span>{artist.name}</span>
			<img src={albumImage} alt="" />
			<span>{artist.type}</span>
		</div>
	);
};
