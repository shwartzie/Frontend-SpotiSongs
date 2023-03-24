import { Loading } from 'common/Components/Loading';
import { FilteredSongsPreview } from 'Features/Search/components/FilteredSongsPreview';
import { SongLayout } from 'Features/Song/pages/Song';
import { SongTitle } from 'Features/SongDetails/components/SongTitle';
import React, { useMemo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { likedSongsService } from '../services/liked-songs.service';

export interface LikedSongsProps {
	onSong: (song: any) => void;
	setPlaying: (isPlaying: boolean) => void;
}

export const LikedSongs = ({ onSong, setPlaying }: LikedSongsProps) => {
	const { tokenData, spotifyApi } = useSelector((state: any) => state.userModule);
	const [likedSongs, setLikedSongs] = useState<any>();
	const [totalSongs, setTotalSongs] = useState<number>();

	const savedTracks: any = useMemo(async () => {
		if (!tokenData) return [];
		const { body } = await spotifyApi.getMySavedTracks({
			limit: 50,
			offset: 1,
		});
		return body;
	}, [tokenData, spotifyApi]);

	useEffect(() => {
		savedTracks.then((body) => {
			if (!body.items) return;
			console.log(body);
			const tracks = body.items.map((item) => item.track);
			// setAddedAt(tracks.items.)
			console.log(tracks);
			setLikedSongs([...tracks]);
			setTotalSongs(body.total);
		});
	}, [savedTracks]);

	return (
		<main>
			{!likedSongs ? (
				<Loading />
			) : (
				<section className="filtered-songs-main-conatiner">
					<SongLayout songs={likedSongs} onSong={onSong} setPlaying={setPlaying} isLikedSongsPage={true}/>
				</section>
			)}
		</main>
	);
};
