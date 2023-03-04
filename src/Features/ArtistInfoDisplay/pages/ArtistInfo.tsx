import { Title } from 'common/Components/Title';
import React from 'react';

type ArtistInfoProps = {
	songsData: any;
};
export const ArtistInfo = ({ songsData }: ArtistInfoProps) => {
	const { artist, albumImage } = songsData;
	const camelizedArtistStr: string = artist.type[0].toUpperCase() + artist.type.slice(1);

		
	return (
		<div className="artist-info-container">
			<div className="artist-info-layout">
				<div className="artist-info-img">
					<img src={albumImage[0].url} alt="" />
				</div>
				<div className="artist-info-credentials">
					<Title title={artist.name} className={''} />

					<div className="credentials-type">
						<span>{camelizedArtistStr}</span>
					</div>
				</div>
			</div>
		</div>
	);
};
