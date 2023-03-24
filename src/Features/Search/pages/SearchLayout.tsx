import { Title } from 'common/Components/Title';
import { utilService } from 'common/services/util.service';
import React, { useEffect, useState, useMemo } from 'react';
import { FilteredSongsPreview } from '../components/FilteredSongsPreview';
import { GenreLayoutPreview } from '../components/GenreLayoutPreview';
import { searchLayoutService } from '../services/search.layout.service';
import { Filtered } from './Filtered';
import { Genres } from './Genres';

interface SearchLayoutProps {
	title: string;
	songs?: any[] | null;
	songsData?: any | null;
	onSong?: (song: any) => void | null;
	setPlaying?: (isPlaying: boolean) => void;
}
export const SearchLayout = ({
	title,
	songs,
	songsData,
	onSong,
	setPlaying,
}: SearchLayoutProps) => {
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
				<Genres genres={genres} title={title} />
			) : (
				<Filtered
					songs={songs}
					songsData={songsData}
					onSong={onSong}
					setPlaying={setPlaying}
				/>
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
