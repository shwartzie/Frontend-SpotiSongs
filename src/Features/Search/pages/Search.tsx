import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SearchLayout } from './SearchLayout';
import { Loading } from '../../../common/Components/Loading';

interface SearchProps {
	onSong: (song: any) => void;
	setPlaying: (isPlaying: boolean) => void;
}
export const Search = ({ onSong,setPlaying }: SearchProps) => {
	const { tracks, tracksData } = useSelector((state: any) => state.songModule);
	const [songs, setSongs] = useState<any | null>(tracks);
	const [songsData, setSongsData] = useState<any | null>(tracksData);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
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
						<SearchLayout title={'Broadcasts'} songs={songs} songsData={songsData} onSong={onSong} setPlaying={setPlaying} />
					) : (
						<SearchLayout title={'Broadcasts'} />
					)}
				</>
			)}
			{/* <MainSearchPage/>
            <RelatedSearchPage/>
            <FilteredSongsPage/> */}
		</div>
	);
};
