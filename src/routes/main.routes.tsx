import React, { useState, useEffect } from 'react';

import { Home } from 'Features/Home/pages/Home';
import { Layout } from 'Features/Layout/pages/Layout';
import { Search } from 'Features/Search/pages/Search';
import { Route, Routes } from 'react-router-dom';
import { LogInPage } from 'Features/UserCommon/Login/pages/LogInPage';
import { SignUpPage } from 'Features/UserCommon/Signup/pages/SignUpPage';
import { NotFound } from 'Features/NotFound/pages/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { setLocalToken } from '../store/actions/userActions';
import { LikedSongs } from 'Features/LikedSongs/pages/LikedSongs';

export const MainRoutes = () => {
	const [currentSongPlaying, setCurrentSong] = useState<any>(null);
	const [isPlaying, setPlaying] = useState<boolean>(false);
	const dispatch: any = useDispatch();
	const { tokenData, spotifyApi } = useSelector((state: any) => state.userModule);
	useEffect(() => {
		if (!tokenData) {
			dispatch(setLocalToken());
		}
	}, [tokenData, spotifyApi]);

	return (
		<>
			<Routes>
				<Route
					element={
						<Layout
							currentSongPlaying={currentSongPlaying}
							tokenData={tokenData}
							isPlaying={isPlaying}
							setPlaying={setPlaying}
						/>
					}
				>
					<Route index element={<LogInPage />} />
					<Route path="home" element={<Home />} />
					<Route path="search" element={<Search onSong={setCurrentSong} setPlaying={setPlaying} />} />
					<Route path="signup" element={<SignUpPage />} />
					<Route path="likedSongs" element={<LikedSongs onSong={setCurrentSong} setPlaying={setPlaying} />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};
