import React, { useState, useEffect } from 'react';

import { VolumePreview } from '../components/VolumePreview';

export const Volume = () => {
	const [volume, setVolume] = useState<number>(0);
	const [mute, setMute] = useState<boolean>(false);

	useEffect(() => {
		return () => {
			if (volume) {
				setMute(false);
			}
		};
	}, [volume]);

	return (
		<section className="volume-container">
			<VolumePreview mute={mute} setMute={setMute} volume={volume} setVolume={setVolume} />
		</section>
	);
};
