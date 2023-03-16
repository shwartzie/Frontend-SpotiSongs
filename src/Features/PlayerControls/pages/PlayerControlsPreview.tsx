import React, { useEffect, useMemo, useState, useRef } from 'react';
import { ControlButtons } from '../components/ControlsButtons';
import { PlayBackBar } from '../../PlayBackBar/pages/PlayBackBar';
import { songService } from '../../PlayBackBar/services/song.service';
import { audioService } from '../../../audio/index';
const path = '../../../audio/in-the-end.mp3';
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

interface PayLoad {
	isPlaying: boolean;
	setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
	songs: any;
	setSongs: React.Dispatch<any>;
	currentSong: any;
	setCurrentSong: React.Dispatch<any>;
}

interface PlayerControlsPreviewProps {
	currentSongPlaying: any;
}

export const PlayerControlsPreview = ({ currentSongPlaying }: PlayerControlsPreviewProps) => {
	const [songs, setSongs] = useState<any>();
	const [a, setCurrentSong] = useState<any>();
	const [isPlaying, setPlaying] = useState<boolean>(false);
	console.log('PlayerControlsPreview', currentSongPlaying);
	const payLoad: PayLoad = {
		songs,
		setSongs,
		currentSong: currentSongPlaying,
		setCurrentSong,
		isPlaying,
		setPlaying,
	};

	return (
		<section className="player-controls-container">
			<div className="player-controls-layout">
				<ControlButtons {...payLoad} />
				{songs && <PlayBackBar {...payLoad}/>}
			</div>
		</section>
	);
};

