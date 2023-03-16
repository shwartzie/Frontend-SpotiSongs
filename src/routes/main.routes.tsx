import React, { useState, useEffect } from 'react';

import { Home } from 'Features/Home/pages/Home';
import { Layout } from 'Features/Layout/pages/Layout';
import { Search } from 'Features/Search/pages/Search';
import { Route, Routes } from 'react-router-dom';
import { LogInPage } from 'Features/UserCommon/Login/pages/LogInPage';
import { SignUpPage } from 'Features/UserCommon/Signup/pages/SignUpPage';
import { NotFound } from 'Features/NotFound/pages/NotFound';
import { useSelector } from 'react-redux';

export const MainRoutes = () => {
	const [currentSongPlaying, setCurrentSong] = useState<any>(null);
	const { tokenData } = useSelector((state: any) => state.userModule);
	return (
		<>
			<Routes>
				<Route element={<Layout currentSongPlaying={currentSongPlaying} tokenData={tokenData}/>}>
					<Route index element={<LogInPage />} />
					<Route path="home" element={<Home />} />
					<Route path="search" element={<Search onSong={setCurrentSong} />} />
					<Route path="signup" element={<SignUpPage />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};
