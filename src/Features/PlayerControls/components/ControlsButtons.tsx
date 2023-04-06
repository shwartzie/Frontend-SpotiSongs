import React from "react";
import { AudioElement } from "../../../types";
import { NextSong } from "../../NextSong/pages/NextSong";
import { PlayButton } from "../../PlayButton/pages/PlayButton";
import { PreviousSong } from "../../PreviousSong/pages/PreviousSong";
import { Repeat } from "../../Repeat/pages/Repeat";
import { Shuffle } from "../../Shuffle/pages/Shuffle";

interface ControlButtonsProps {
    songs: any;
    currentSong: any;
    setCurrentSong: React.Dispatch<React.SetStateAction<any>>;
    setSongs: React.Dispatch<React.SetStateAction<any[]>>;
    isPlaying: boolean;
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

// type CurrentSong = {
//     title: string;
//     url: string;
//     progress: number;
//     length: number;
//     audio: {
//         src: string
//     };
// };

export const ControlButtons = ({ isPlaying, setPlaying, setCurrentSong, songs, currentSong }: ControlButtonsProps) => {
    const skipPayLoad = {
        setCurrentSong,
        songs,
        currentSong,
    };
    return (
        <article className="control-buttons-container">
            <Shuffle />
            <PreviousSong {...skipPayLoad} />
            <PlayButton isPlaying={isPlaying} setPlaying={setPlaying}/>
            <NextSong {...skipPayLoad} />
            <Repeat />
        </article>
    );
};
