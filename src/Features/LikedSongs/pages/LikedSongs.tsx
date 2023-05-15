import { SongLayout } from 'Features/Song/pages/Song';
import { Loading } from 'common/Components/Loading';
import { tokenService } from 'common/services/Server/token';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export interface LikedSongsProps {
	onSong: (song: any) => void;
	setPlaying: (isPlaying: boolean) => void;
}

export const LikedSongs = ({ onSong, setPlaying }: LikedSongsProps) => {
	const { tokenData, spotifyApi } = useSelector((state: any) => state.userModule);
	const [likedSongs, setLikedSongs] = useState<any>();
	const [totalSongs, setTotalSongs] = useState<number>();
	const navigate = useNavigate();
	const savedTracks: any = useMemo(async () => {
		if (!tokenData) return [];
		let offset: number = 1;

		const { body }: any = await spotifyApi.getMySavedTracks({
			limit: 50,
			offset,
		});

		while (offset < 200) {
			offset += 49;
			const payload: any = await spotifyApi.getMySavedTracks({
				limit: 50,
				offset,
			});
			console.log(body.items);
			body.items.push([...payload.body.items])
			body.items = body.items.flat(Infinity);
		}
		return body;
	}, [tokenData, spotifyApi]);

	useEffect(() => {
		// const isTokenValid: any = tokenService.isTokenValid().then((response) => {
		// 	// console.log('isTokenValid', response);
		// 	if (response.status !== 200) {
		// 		navigate('/');
		// 		console.error(response.message);
		// 		return false;
		// 	}
		// 	return true;
		// });
		// if (!isTokenValid) return;
		savedTracks.then((body) => {
			console.log(body);

			if (!body.items) return;
			const tracks = body.items.map((item) => item.track);
			// setAddedAt(tracks.items.)
			setLikedSongs([...tracks]);
			setTotalSongs(body.total);
		});
	}, [savedTracks]);

	return (
		<main style={{height: 'calc(100% - 150px)'}}>
			{!likedSongs ? (
				<Loading />
			) : (
				<section className="filtered-songs-main-conatiner">
					<SongLayout songs={likedSongs} onSong={onSong} setPlaying={setPlaying} isLikedSongsPage={true} />
				</section>
			)}
		</main>
	);
};
