import React from 'react';

interface LikedSongProps {
	isLiked: boolean;
	setLiked: (state: boolean | any) => void;
}
export const LikedSong = ({ isLiked, setLiked }: LikedSongProps) => {
	const className: string = isLiked ? `song-liked-button liked` : `song-liked-button`;
	return (
		<div className="song-liked-container">
			<button className={className} onClick={() => setLiked((prev) => !prev)}></button>
		</div>
	);
};
