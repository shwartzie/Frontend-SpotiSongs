import React, { useEffect } from 'react';
import { FunctionsPreview } from '../../../../Functions/pages/FunctionsPreview';
import { PlayerControlsPreview } from '../../../../PlayerControls/pages/PlayerControlsPreview';
import { SongDetailsPreview } from '../../../../SongDetails/pages/SongDetailsPreview';

interface FooterProps {
	currentSongPlaying: any;
}

export const Footer = ({ currentSongPlaying }: FooterProps) => {
	
	return (
		<footer className="footer-main-container">
			<div className="footer-container">
				<main className="footer-layout">
					<SongDetailsPreview />
					<PlayerControlsPreview currentSongPlaying={currentSongPlaying} />
					<FunctionsPreview />
				</main>
			</div>
		</footer>
	);
};
