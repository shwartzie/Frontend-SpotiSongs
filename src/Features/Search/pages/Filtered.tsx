import { Title } from 'common/Components/Title';
import React from 'react';
import { ArtistInfo } from '../../ArtistInfoDisplay/pages/ArtistInfo';
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
				<div className="filtered-layout-conatainer">
					<section className="artist-section">
						<Title title={'Top Result'} className={'search-layout-title'} />
						<ArtistInfo songsData={songsData} />
					</section>

					<section className="filtered-songs-main-conatiner">
						<Title title={'Songs'} className={'search-layout-title'} />
						<div className="songs-layout">
							{songs &&
								songs
									.slice(0)
									.map((song: any, index: number) => (
										<FilteredSongsPreview
											song={song}
											key={song.id}
											index={index}
										/>
									))}
						</div>
					</section>
				</div>
			</article>
		</main>
	);
};
