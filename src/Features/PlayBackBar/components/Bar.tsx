import React, { useRef, forwardRef, useEffect } from "react";
import {
    BsFillPlayCircleFill,
    BsFillPauseCircleFill,
    BsSkipEndCircleFill,
    BsFillSkipEndCircleFill,
} from "react-icons/bs";
import { AudioElement } from "../../../types";
import SpotifyPlayer from "react-spotify-web-playback";

interface PlayerProps {
    currentSong: any;
    checkWidth: (event: any, clickRef: any) => void;
}

export const Bar = ({ checkWidth, currentSong }: PlayerProps) => {
    const clickRef: any = useRef();

    // useEffect(() => {
    // }, [currentSong])
    
    const handleWidth = (event: React.MouseEvent<HTMLElement>) => {
        checkWidth(event, clickRef.current.clientWidth);
    };
    return (
        <div className="player_container">
            <div className="navigation">
                <div className="navigation_wrapper" onClick={(event) => handleWidth(event)} ref={clickRef}>
                    <div className="seek_bar" style={{ width: `${currentSong.progress + "%"}` }}></div>
                </div>
            </div>
        </div>
    );
};
