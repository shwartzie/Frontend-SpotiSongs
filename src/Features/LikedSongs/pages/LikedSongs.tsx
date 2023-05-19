import { SongLayout } from 'Features/Song/pages/Song';
import { Loading } from 'common/Components/Loading';
import { tokenService } from 'common/services/Server/token';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { likedSongsService } from '../services/liked-songs.service';
import { userService } from 'Features/UserCommon/services/user.service';

export interface LikedSongsProps {
	onSong: (song: any) => void;
	setPlaying: (isPlaying: boolean) => void;
}

export const LikedSongs = ({ onSong, setPlaying }: LikedSongsProps) => {
	const { tokenData, spotifyApi, loggedInUser } = useSelector((state: any) => state.userModule);
	const [likedSongs, setLikedSongs] = useState<any>();
	const [totalSongs, setTotalSongs] = useState<number>();
	// const navigate = useNavigate();
	// console.log(loggedInUser)

	const isTracks = (tracks = null) => {
		return likedSongs?.length > 0 || tracks?.length > 0;
	};
	const handleLikedSongs = async (): Promise<any[]> => {
		const promises: Promise<any>[] = [];
		let offset: number = 1;
		while (offset < 200) {
			offset += 49;
			const payload: any = spotifyApi.getMySavedTracks({
				limit: 50,
				offset,
			});
			promises.push(payload);
		}
		const tracks = await Promise.all(promises);
		const flattendTracks = tracks
			.map((payload) => {
				setTotalSongs(payload.body.total);
				return payload.body.items;
			})
			.flatMap((item) => item)
			.map((item) => item.track);

		setLikedSongs([...flattendTracks]);
		return flattendTracks;
	};
	useEffect(() => {
		if (isTracks()) return;
		let isSave = false,
			tracksToSave = [];
		likedSongsService
			.getTracks(loggedInUser.id)
			.then(async ({ data }) => {
				if (isTracks(data.tracks)) {
					setLikedSongs([...data.tracks]);
				} else {
					tracksToSave = await handleLikedSongs();
					isSave = true;
				}
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(async () => {
				if (!isSave) return;
				await likedSongsService.add([...tracksToSave], loggedInUser.id);
			});

		return () => {
			setLikedSongs([]);
		};
	}, [tokenData, spotifyApi]);

	return (
		<main style={{ height: 'calc(100% - 150px)' }}>
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
