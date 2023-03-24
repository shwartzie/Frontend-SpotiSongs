import { LikedSong } from '../../SongDetails/components/LikedSong';
import React, { useState } from 'react';

interface FilteredSongsPreviewProps {
	index: number;
	song: any;
	onSong: (song: any) => void;
	setPlaying: (isPlaying: boolean) => void;
	isLikedSongsPage?: boolean;
}
export const FilteredSongsPreview = ({
	song,
	index,
	onSong,
	setPlaying,
	isLikedSongsPage,
}: FilteredSongsPreviewProps) => {
	const [isSelected, setIsSelected] = useState(false);
	const [isLiked, setIsLiked] = useState<boolean>(false);
	const handleSelect = () => {
		setIsSelected((prev) => !prev);
		onSong({ ...song });
		setPlaying(true);
		console.dir('song', song);
	};

	const img = song.album.images[0].url;

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
					{/* {isLikedSongsPage && <h3>{index}</h3>} */}
					<img src={img} alt="" />
					<div className="flex column">
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
