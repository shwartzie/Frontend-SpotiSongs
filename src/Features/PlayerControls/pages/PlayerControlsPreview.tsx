import React, { useEffect, useState } from 'react';
import { PlayBackBar } from '../../PlayBackBar/pages/PlayBackBar';
import { ControlButtons } from '../components/ControlsButtons';
// interface ControlButtons {
//     audioElement: AudioElement;
//     isPlaying: boolean;
//     setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
// };

// interface PlayBack extends ControlButtons {
//     songs: any;
//     setSongs: React.Dispatch<any>;
//     currentSong: any;
//     setCurrentSong: React.Dispatch<any>;
// };


interface PlayerControlsPreviewProps {
	currentSongPlaying: any;
	isPlaying: boolean;
	setPlaying: (isPlaying: boolean) => void;
}

export const PlayerControlsPreview = ({ currentSongPlaying, isPlaying, setPlaying }: PlayerControlsPreviewProps) => {
	const [songs, setSongs] = useState<any>();
	useEffect(() => {
		if (currentSongPlaying) {
			setCurrentSongData((rest) => {
				return {
					href: currentSongPlaying?.external_urls.spotify,
					...rest,
				};
			});
		}
	}, [currentSongPlaying]);

	const [currentSongData, setCurrentSongData] = useState<any>({ progress: 0, length: 0 });



	return (
		<section className="player-controls-container">
			<div className="player-controls-layout">
				<ControlButtons
					songs={songs}
					setSongs={setSongs}
					currentSong={currentSongPlaying}
					setCurrentSong={setCurrentSongData}
					isPlaying={isPlaying}
					setPlaying={setPlaying}
				/>

				<PlayBackBar currentSong={currentSongData} isPlaying={isPlaying} setCurrentSongData={setCurrentSongData} />
			</div>
		</section>
	);
};
