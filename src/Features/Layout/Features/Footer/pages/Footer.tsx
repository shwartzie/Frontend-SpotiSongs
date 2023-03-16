import React, { useEffect } from 'react';
import { FunctionsPreview } from '../../../../Functions/pages/FunctionsPreview';
import { PlayerControlsPreview } from '../../../../PlayerControls/pages/PlayerControlsPreview';
import { SongDetailsPreview } from '../../../../SongDetails/pages/SongDetailsPreview';
import SpotifyPlayer from 'react-spotify-web-playback';

interface FooterProps {
	currentSongPlaying: any;
	tokenData: any;
	playing: boolean;
	setPlaying: (playing: boolean) => void;
}

export const Footer = ({ currentSongPlaying, tokenData, playing, setPlaying }: FooterProps) => {
	console.log('FOOTER', currentSongPlaying);

	return (
		<footer className="footer-main-container">
			<div className="footer-container">
				<main className="footer-layout">
					{/* <SongDetailsPreview /> */}
					{tokenData && currentSongPlaying && (
						<SpotifyPlayer
							token={tokenData.accessToken}
							uris={currentSongPlaying.uri ? [currentSongPlaying.uri] : []}
							play={playing}
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
					)}
					{/* <PlayerControlsPreview currentSongPlaying={currentSongPlaying} /> */}
					{/* <FunctionsPreview /> */}
				</main>
			</div>
		</footer>
	);
};
