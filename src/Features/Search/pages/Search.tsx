import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SearchLayout } from './SearchLayout';

export const Search = () => {
	const { tracks } = useSelector((state: any) => state.songModule);
	const [songs, setSongs] = useState<any | null>(tracks);

	useEffect(() => {
		console.log('listening to tracks...', tracks);
		if (tracks) {
			setSongs([...tracks]);
		}
	}, [tracks]);

	return (
		<div className="search-container">
			{songs ? (
				<SearchLayout title={'Broadcasts'} songs={songs} />
			) : (
				<SearchLayout title={'Broadcasts'} songs={null} />
			)}
			{/* <MainSearchPage/>
            <RelatedSearchPage/>
            <FilteredSongsPage/> */}
		</div>
	);
};
