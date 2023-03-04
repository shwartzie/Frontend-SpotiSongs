import { Title } from 'common/Components/Title';
import React from 'react';
import { ArtistInfoDisplay } from '../../ArtistInfoDisplay/pages/ArtistInfoDisplay';
import { FilteredSongsPreview } from '../components/FilteredSongsPreview';

interface FilteredProps {
	songs: any[];
	songsData: any | null;
}
export const Filtered = ({ songs, songsData }: FilteredProps) => {
	return (
		<main className="content-spacing filtered-main-container">
			<header>options to filter by:</header>
			<article className="filtered-layout">
				<div className='filtered-layout-conatainer'>
					<section className='artist-section'>
						<Title title={'Top Result'} className={'search-layout-title'} />
						<ArtistInfoDisplay songsData={songsData} />
					</section>

					<section>
						<Title title={'Songs'} className={'search-layout-title'} />
						{songs &&
							songs.map((song: any) => (
								<FilteredSongsPreview song={song} key={song.id} />
							))}
					</section>
				</div>
			</article>
		</main>
	);
};
