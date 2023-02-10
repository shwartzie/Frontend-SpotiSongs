import React, { useRef } from 'react';
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill } from 'react-icons/bs';
import { AudioElement } from '../../../types';
import SpotifyPlayer from 'react-spotify-web-playback';
interface PlayerProps {
    songs: any;
    currentSong: any;
    setCurrentSong: React.Dispatch<React.SetStateAction<any>>;
    audioElement: AudioElement;
}

export const Player = ({ audioElement, currentSong, setCurrentSong, songs }: PlayerProps) => {

    const clickRef: any = useRef();

    const checkWidth = (e: React.MouseEvent<HTMLElement>) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress: number = offset / width * 100;
        audioElement.current.currentTime = divprogress / 100 * currentSong.length;

    };

    return (
        <div className='player_container'>
            <div className="navigation">
                <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
                    <div className="seek_bar" style={{ width: `${currentSong.progress + "%"}` }}></div>
                </div>
            </div>
        </div>

    );

};



