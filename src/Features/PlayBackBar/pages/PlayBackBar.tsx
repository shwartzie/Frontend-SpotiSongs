import React, { useEffect, useRef, useState } from 'react';
import { AudioElement } from '../../../types';
import { Player } from '../components/Player';
import { songService } from '../services/song.service';

type PlayBackBarProps = {
    songs: any;
    currentSong: CurrentSong;
    setCurrentSong: React.Dispatch<React.SetStateAction<any>>;
    setSongs: React.Dispatch<React.SetStateAction<CurrentSong[]>>;
    isPlaying: boolean;
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    audioElement: AudioElement;
};

type CurrentSong = {
    title: string;
    uri: string;
};


export const PlayBackBar = ({ songs, setSongs, currentSong, setCurrentSong, isPlaying, setPlaying, audioElement }: PlayBackBarProps) => {


    useEffect(() => {

        if (isPlaying) {
            console.log("audioElement", audioElement.current);
            audioElement.current?.play();
        } else {
            audioElement.current?.pause();
        }
    }, [isPlaying]);

    const onPlaying = () => {
        const duration = audioElement.current.duration;
        const ct = audioElement.current.currentTime;

        console.log("currentSong", currentSong);

        setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration });

    };

    return (
        <article className='play-back-bar'>
            <>
                <audio src={currentSong.uri} ref={audioElement} onTimeUpdate={onPlaying} />
                <Player songs={songs} audioElement={audioElement} currentSong={currentSong} setCurrentSong={setCurrentSong} />
            </>
        </article>
    );
};