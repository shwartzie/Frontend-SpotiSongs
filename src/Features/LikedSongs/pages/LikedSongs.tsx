import { SongLayout } from 'Features/Song/pages/Song';
import { Loading } from 'common/Components/Loading';
import { tokenService } from 'common/services/Server/token';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { likedSongsService } from '../services/liked-songs.service';
import { userService } from 'Features/UserCommon/services/user.service';
import { albumService } from 'common/services/albums/album.service';
import { imageService } from 'common/services/images/image.service';

export interface LikedSongsProps {
	onSong: (song: any) => void;
	setPlaying: (isPlaying: boolean) => void;
}

export const LikedSongs = ({ onSong, setPlaying }: LikedSongsProps) => {
	const { tokenData, spotifyApi, loggedInUser } = useSelector((state: any) => state.userModule);
	const [likedSongs, setLikedSongs] = useState<any>([]);
	const [totalSongs, setTotalSongs] = useState<number>(0);
	const [isLoading, setLoading] = useState<boolean>(true);
	// const navigate = useNavigate();
	// console.log(loggedInUser)

	const _isTracks = (tracks = null) => {
		return likedSongs?.length > 0 || tracks?.length > 0;
	};
	console.log(
		spotifyApi.getMySavedTracks({
			limit: 50,
			offset: 1,
		})
	);
	const loadLikedSongs = async () => {
		const tracks = await likedSongsService.loadSongs(spotifyApi);
		setLikedSongs(tracks);
	};

	useEffect(() => {
		if (_isTracks() && !loggedInUser) return;
		console.log({ ...loggedInUser });
		likedSongsService
			.getTracks(loggedInUser.external_id)
			.then(async ({ data }) => {
				console.log('getTracks data', data);
				if (_isTracks(data.tracks)) {
					setLikedSongs([...data.tracks]);
				} else {
					await loadLikedSongs();
				}
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setLikedSongs([]);
			});

		return () => {
			setLikedSongs([]);
		};
	}, [tokenData, spotifyApi]);

	return (
		<main style={{ height: 'calc(100% - 150px)' }}>
			{isLoading ? (
				<Loading />
			) : (
				<section className="filtered-songs-main-conatiner">
					<SongLayout songs={likedSongs} onSong={onSong} setPlaying={setPlaying} isLikedSongsPage={true} />
				</section>
			)}
		</main>
	);
};
