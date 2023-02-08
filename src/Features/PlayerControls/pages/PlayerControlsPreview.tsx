import React, { useEffect, useMemo, useState, useRef } from 'react';
import { ControlButtons } from '../components/ControlsButtons';
import { PlayBackBar } from '../../PlayBackBar/pages/PlayBackBar';
import { songService } from '../../PlayBackBar/services/song.service';
import { AudioElement } from '../../../types';


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
    audioElement: AudioElement;
    isPlaying: boolean;
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    songs: any;
    setSongs: React.Dispatch<any>;
    currentSong: any;
    setCurrentSong: React.Dispatch<any>;
}



export const PlayerControlsPreview = () => {
    const [songs, setSongs] = useState<any>();
    const [currentSong, setCurrentSong] = useState<any>();
    const [isPlaying, setPlaying] = useState<boolean>(false);

    const audioElement: AudioElement = useRef();

    useEffect(() => {
        const fetch = async () => {
            const demoSongs: any = await songService.get();
            setSongs([...demoSongs]);
            setCurrentSong({ ...demoSongs[0] });

        };
        fetch();
    }, []);

    const payLoad: PayLoad = {
        songs,
        setSongs,
        currentSong,
        setCurrentSong,
        isPlaying,
        setPlaying,
        audioElement
    };

    return (
        <section className='player-controls-container'>
            <div className='player-controls-layout'>
                <ControlButtons {...payLoad} />
                {songs && <PlayBackBar {...payLoad} />}
            </div>
        </section>
    );
};



// const { data, status }: any = await songService.query();
// if (status !== 200) {
//     throw new Error("FAILED " + status);
//     return;
// }
// const { query: { tracks } } = data;
// console.log("tracks", tracks);
// setSongs([...tracks]);
// setCurrentSong({ ...tracks[0] });