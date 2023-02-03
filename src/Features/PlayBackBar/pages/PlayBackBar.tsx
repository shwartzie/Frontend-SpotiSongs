import React, { useEffect, useRef, useState } from 'react';
import { Player } from '../components/Player';
import { songService } from '../services/song.service';

type PlayBackBarProps = {
    songs: any;
    currentSong: CurrentSong;
    setCurrentSong: React.Dispatch<React.SetStateAction<any>>;
    setSongs: React.Dispatch<React.SetStateAction<CurrentSong[]>>;
};

type CurrentSong = {
    title: string;
    url: string;
};
export const PlayBackBar = ({ songs, setSongs, currentSong, setCurrentSong }: PlayBackBarProps) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const audioElement: any = useRef();
    useEffect(() => {
        if (isPlaying) {
            audioElement.current?.play();
        }
        else {
            audioElement?.current?.pause();
        }
    }, [isPlaying]);

    const onPlaying = () => {
        const duration = audioElement.current.duration;
        const ct = audioElement.current.currentTime;

        setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration });

    };

    return (
        <article className='play-back-bar'>
            <>
                <audio src={currentSong.url} ref={audioElement} onTimeUpdate={onPlaying} />
                <Player songs={songs} setSongs={setSongs} isplaying={isPlaying} setIsPlaying={setIsPlaying} audioElement={audioElement} currentSong={currentSong} setCurrentSong={setCurrentSong} />
            </>
        </article>
    );
};