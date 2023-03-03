import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SearchLayout } from './SearchLayout';
import { Loading } from '../../../common/Components/Loading';
export const Search = () => {
	const { tracks, tracksData } = useSelector((state: any) => state.songModule);
	const [songs, setSongs] = useState<any | null>(tracks);
	const [songsData, setSongsData] = useState<any | null>(tracksData);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log('listening to tracks...', tracks);
		// setLoading(true);
		if (tracks) {
			setSongs([...tracks]);
			setSongsData({ ...tracksData });
			setLoading(false);
		} else if (!tracks && !tracksData) {
			setSongs(null);
			setSongsData(null);
			setLoading(false);
		}
	}, [tracks, tracksData]);

	useEffect(() => {
		if (!songs) {
			setLoading(false);
		} else if (!songs && tracks) {
			setLoading(true);
		}
	}, [songs]);
	return (
		<div className="search-container">
			{loading ? (
				<Loading />
			) : (
				<>
					{songs && songsData ? (
						<SearchLayout title={'Broadcasts'} songs={songs} songsData={songsData} />
					) : (
						<SearchLayout title={'Broadcasts'} songs={null} songsData={null} />
					)}
				</>
			)}
			{/* <MainSearchPage/>
            <RelatedSearchPage/>
            <FilteredSongsPage/> */}
		</div>
	);
};
