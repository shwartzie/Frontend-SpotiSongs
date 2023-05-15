import { Loading } from 'common/Components/Loading';
import React, { useState } from 'react';
import { LyricsText } from './LyricsText';

interface LyricsModalProps {
	lyrics: string;
	setClosed: (isClosed: any) => void;
	isClosed: boolean;
	setIsClicked: (isClicked: any) => void;
	setLyrics: (lyrics: string) => void;
	isClicked: boolean;
}
export const LyricsModal = ({ lyrics, setClosed, setIsClicked }: LyricsModalProps) => {
	const handleClose = () => {
		setClosed(true);
		setIsClicked((prev: boolean) => !prev);
	};
	return (
		<>
			(
			<div className="LyricsModal">
				<div className="LyricsModal__backdrop" onClick={() => handleClose()} />
				<div className="LyricsModal__content scroll">
					<div className="LyricsModal__header">
						{/* <h2>Lyrics</h2> */}
						<button className="LyricsModal__close-btn" onClick={() => handleClose()}>
							&times;
						</button>
					</div>
					{lyrics !== null ? <LyricsText lyrics={lyrics} /> : <Loading />}
				</div>
			</div>
			)
		</>
	);
};
