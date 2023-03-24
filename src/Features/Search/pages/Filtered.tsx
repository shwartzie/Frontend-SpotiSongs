import { Title } from 'common/Components/Title';
import { SongLayout } from 'Features/Song/pages/Song';
import React from 'react';
import { ArtistInfo } from '../../ArtistInfoDisplay/pages/ArtistInfo';
import { FilteredSongsPreview } from '../components/FilteredSongsPreview';

export interface FilteredProps {
	songs: any[];
	songsData: any | null;
	onSong: (song: any) => void;
	setPlaying: (isPlaying: boolean) => void;
	
}

export const Filtered = ({ songs, songsData, onSong, setPlaying }: FilteredProps) => {
	return (
		<main className="content-spacing filtered-main-container">
			{/* <header>options to filter by:</header> */}
			<article className="filtered-layout">
				<div className="filtered-layout-conatainer">
					<section className="artist-section">
						<Title title={'Top Result'} className={'search-layout-title'} />
						<ArtistInfo songsData={songsData} />
					</section>

					<section className="filtered-songs-main-conatiner">
						<Title title={'Songs'} className={'search-layout-title'} />
						{songs && <SongLayout songs={songs} onSong={onSong} setPlaying={setPlaying} />}
					</section>
				</div>
			</article>
		</main>
	);
};
