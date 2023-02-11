import React, { useState } from 'react';

import { VolumePreview } from '../components/VolumePreview';

export const Volume = () => {
	const [volume, setVolume] = useState<number>(0);
	const [mute, setMute] = useState<boolean>(false);
	return (
		<section className='volume-container'>
			<VolumePreview mute={mute} setMute={setMute} volume={volume} setVolume={setVolume} />
		</section>
	);
};
