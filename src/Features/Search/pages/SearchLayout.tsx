import { Title } from 'common/Components/Title';
import { utilService } from 'common/services/util.service';
import React, { useEffect, useState, useMemo } from 'react';
import { FilteredSongsPreview } from '../components/FilteredSongsPreview';
import { GenreLayoutPreview } from '../components/GenreLayoutPreview';
import { searchLayoutService } from '../services/search.layout.service';

type Genre = {
	id: string;
	name: string;
	imageUrl: string;
	backgroundColor: string;
};

interface SearchLayoutProps {
	title: string;
	songs: any | null;
}
export const SearchLayout = ({ title, songs }: SearchLayoutProps) => {
	const [genres, setGenres] = useState<string[] | any>();

    // console.log('SearchLayout', songs)
	useEffect(() => {
		if (songs) return;
		const cb = async () => {
			const genres = await searchLayoutService.queryDemo();
			const updatedGenres = generateIds(genres);
			setGenres([...updatedGenres]);
		};
		cb();
	}, [songs]);

	// const res = useMemo(async () => {
	//     const updatedGenres = await searchLayoutService.queryDemo();
	//     setGenres([...updatedGenres]);
	// }, [genres])

	return (
		<>
			{!songs ? (
				<>
					<Title title={title} className={'search-layout-title'} />
					<article className="search-layout-container">
						{genres && genres.map((genre: Genre) => <GenreLayoutPreview genre={genre} key={genre.id} />)}
					</article>
				</>
			) : (
				<>
					{/* <Title title={title} className={'search-layout-title'} */}
					{songs.map((song: any) => (
						<FilteredSongsPreview song={song} key={song.id} />
					))}
				</>
			)}
		</>
	);
};

function generateIds(genres: string[]) {
	return genres.map((genre: any) => {
		return {
			...genre,
			id: utilService.makeId(16),
		};
	});
}
