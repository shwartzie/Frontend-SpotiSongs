import React, { useEffect, useState } from 'react';
import { ControlButtons } from '../components/ControlsButtons';
import { PlayBackBar } from '../../PlayBackBar/pages/PlayBackBar';
import { songService } from '../../PlayBackBar/services/song.service';


export const PlayerControlsPreview = () => {
    const [songs, setSongs] = useState<any>();
    const [currentSong, setCurrentSong] = useState<any>();

    useEffect(() => {
        const fetch = async () => {
            const demoSongs: any = await songService.get();
            console.log("demoSongs", await demoSongs);
            setSongs([...demoSongs]);
            setCurrentSong({ ...demoSongs[1] });
        };
        fetch();
    }, []);

    return (
        <section className='player-controls-container'>
            <div className='player-controls-layout'>
                <ControlButtons />
                {songs &&
                    <PlayBackBar
                        songs={songs} setSongs={setSongs}
                        currentSong={currentSong} setCurrentSong={setCurrentSong}
                    />}
            </div>
        </section>
    );
};