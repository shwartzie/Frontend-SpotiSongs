import { FilteredSongsPreview } from 'Features/Search/components/FilteredSongsPreview';
import React from 'react';

interface SongProps {
	songs: any[];
	onSong: (song: any) => void;
	setPlaying: (isPlaying: boolean) => void;
	isLikedSongsPage?: boolean;
}
export const SongLayout = ({ songs, onSong, setPlaying, isLikedSongsPage }: SongProps) => {
	return (
		<div className="songs-layout">
			{songs.slice(0).map((song: any, index: number) => (
				<div key={song.id}>
					<FilteredSongsPreview
						song={song}
						index={index}
						onSong={onSong}
						setPlaying={setPlaying}
						isLikedSongsPage={isLikedSongsPage}
					/>
					{/* {isLikedSongsPage && <div>{song}</div>} */}
				</div>
			))}
		</div>
	);
};
