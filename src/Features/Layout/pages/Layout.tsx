import React, { useState, useEffect } from 'react';
import { Location, Outlet, useLocation } from 'react-router-dom';

import { Aside } from '../../AsideNavbar/pages/Aside';
import { Header } from '../components/Header';
import { Footer } from '../../Footer/pages/Footer';

interface LayoutProps {
	currentSongPlaying: any;
	tokenData: any;
	setPlaying: (isPlaying: boolean) => void;
	isPlaying: boolean;
}
export const Layout = ({ currentSongPlaying, tokenData, isPlaying, setPlaying }: LayoutProps) => {
	const [activePage, setActivePage] = useState<string>('home');
	const [onPagination, setPage] = useState<any>(activePage);
	const location: Location = useLocation();
	const options: string[] = ['home', 'search', 'library', 'likedSongs', 'createPlaylist'];

	useEffect(() => {
		if (!isPlaying && currentSongPlaying) setPlaying(true);
	}, [currentSongPlaying]);

	return (
		<>
			<main className="main-landing-page">
				<div className="landing-page-layout">
					<div className="landing-page-layout-main-container">
						{location.pathname !== '/' && (
							<Aside setActivePage={setActivePage} options={options} activePage={activePage} />
						)}
						<div
							className="landing-page-component-container"
							style={location.pathname == '/' ? { width: '100%' } : {}}
						>
							{location.pathname !== '/' && <Header activePage={activePage} setPage={setPage} />}
							<Outlet />
						</div>
					</div>
					{tokenData && location.pathname !== '/' && (
						<Footer
							currentSongPlaying={currentSongPlaying}
							tokenData={tokenData}
							isPlaying={isPlaying}
							setPlaying={setPlaying}
						/>
					)}
				</div>
			</main>
		</>
	);
};
