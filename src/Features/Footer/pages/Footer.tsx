import { Lyrics } from 'Features/Lyrics/pages/Lyrics';
import React, { useEffect, useState } from 'react';
// import { FunctionsPreview } from '../../../../Functions/pages/FunctionsPreview';
// import { PlayerControlsPreview } from '../../../../PlayerControls/pages/PlayerControlsPreview';
// import { SongDetailsPreview } from '../../../../SongDetails/pages/SongDetailsPreview';
import SpotifyPlayer from 'react-spotify-web-playback';

interface FooterProps {
	currentSongPlaying: any;
	tokenData: any;
	isPlaying: boolean;
	setPlaying: (isPlaying: boolean) => void;
}

export const Footer = ({ currentSongPlaying, tokenData, isPlaying, setPlaying }: FooterProps) => {

	return (
		<footer className="footer-main-container">
			<div className="footer-container">
				<main className="footer-layout">
					{/* <SongDetailsPreview />
					<PlayerControlsPreview
						currentSongPlaying={currentSongPlaying}
						isPlaying={isPlaying}
						setPlaying={setPlaying}
					/>
					<FunctionsPreview /> */}
					<Lyrics currentSongPlaying={currentSongPlaying}/>
					<SpotifyPlayer
						token={tokenData.accessToken}
						uris={currentSongPlaying?.uri ? [currentSongPlaying?.uri] : []}
						play={isPlaying}
						callback={(state) => {
							if (!state.isPlaying) {
								setPlaying(false);
							}
						}}
						showSaveIcon
						styles={{
							activeColor: '#fff',
							bgColor: '#333',
							color: '#fff',
							loaderColor: '#fff',
							sliderColor: '#1cb954',
							trackArtistColor: '#ccc',
							trackNameColor: '#fff',
						}}
					/>
				</main>
			</div>
		</footer>
	);
};
