import React, { useMemo, useRef } from "react";
import "react-h5-audio-player/src/styles.scss";
import { AudioElement } from "../../../types";
import { Bar } from "../components/Bar";

type PlayBackBarProps = {
    songs: any;
    currentSong: any;
    setCurrentSong: React.Dispatch<React.SetStateAction<any>>;
    setSongs: React.Dispatch<React.SetStateAction<any[]>>;
    isPlaying: boolean;
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

// type CurrentSong = {
//     title: string;
//     url: string;
//     progress: number;
//     length: number;
// };

export const PlayBackBar = ({
    songs,
    setSongs,
    currentSong,
    setCurrentSong,
    isPlaying,
    setPlaying,
}: PlayBackBarProps) => {

    const audioElement: AudioElement = useRef();

    const playing = useMemo(async () => {
        if (isPlaying) {
            await audioElement.current?.play();
        } else {
            await audioElement.current?.pause();
        }
    }, [isPlaying]);

    const checkWidth = (event: React.MouseEvent<HTMLElement>, clientWidth) => {
        const offset = event.nativeEvent.offsetX;
        const divProgress: number = (offset / clientWidth) * 100;
        audioElement.current.currentTime = (divProgress / 100) * currentSong.length;
    };

    const onPlaying = (event) => {
        console.log("onPlaying", event);
        const duration = audioElement.current.duration;
        const currentTime = audioElement.current.currentTime;

        setCurrentSong({ ...currentSong, progress: (currentTime / duration) * 100, length: duration });
    };

    return (
        <article className="play-back-bar">
            <>
                <audio ref={audioElement} onTimeUpdate={onPlaying} >
                    <source src={currentSong.audio.src} type="audio/ogg" />
                </audio>
                <Bar currentSong={currentSong} checkWidth={checkWidth} />
            </>
        </article>
    );
};
