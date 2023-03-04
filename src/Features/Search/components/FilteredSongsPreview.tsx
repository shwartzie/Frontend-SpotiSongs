import React, { useState } from 'react';
import { LikedSong } from '../../SongDetails/components/LikedSong';

type FilteredSongsPreviewProps = {
	song: any;
	index: number;
};
export const FilteredSongsPreview = ({ song, index }: FilteredSongsPreviewProps) => {
	const [isSelected, setIsSelected] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const handleSelect = () => {
		setIsSelected((prev) => !prev);
	};

	const img = song.album.images[0].url;
	console.log('song', song);

	return (
		<div
			className="songs-preview"
			role="row"
			aria-rowindex={index + 1}
			aria-selected={isSelected}
			onClick={() => handleSelect()}
		>
			<div className="songs-grid-row">
				<div className="song-left" role="gridcell">
					<img src={img} alt="" />
					<div className='flex column'>
						<span className="song-name">{song.name}</span>
						<span className="song-artist">{song.album.artists[0].name}</span>
					</div>
				</div>
				<div role="gridcell">
					<LikedSong isLiked={isLiked} setLiked={setIsLiked} />
				</div>
			</div>
		</div>
	);
};
