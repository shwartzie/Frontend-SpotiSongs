import React from 'react';

interface LyricsProps {
	setIsClicked: (isClicked: boolean | any) => void;
}

export const LyricsButton = ({ setIsClicked }: LyricsProps) => {
	return (
		<button className="lyrics-btn" onClick={() => setIsClicked((prev) => !prev)}>
			<svg></svg>
		</button>
	);
};
