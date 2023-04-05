import { Loading } from 'common/Components/Loading';
import React, { useState } from 'react';
import { LyricsText } from './LyricsText';

interface LyricsModalProps {
	lyrics: string;
	setClosed: (isClosed: any) => void;
	isClosed: boolean;
	setIsClicked: (isClicked: any) => void;
}
export const LyricsModal = ({ lyrics, setClosed, isClosed, setIsClicked }: LyricsModalProps) => {
	console.log(`LyricsModal ${isClosed}`);
	const handleClose = () => {
		setClosed(true);
		setIsClicked((prev: boolean) => !prev);
	};
	return (
		<>
			{!isClosed && (
				<div className="LyricsModal">
					<div className="LyricsModal__backdrop" onClick={() => handleClose()} />
					<div className="LyricsModal__content">
						<div className="LyricsModal__header">
							{/* <h2>Lyrics</h2> */}
							<button className="LyricsModal__close-btn" onClick={() => handleClose()}>
								&times;
							</button>
						</div>
						{!lyrics ? <Loading /> : <LyricsText lyrics={lyrics} />}
					</div>
				</div>
			)}
		</>
	);
};
