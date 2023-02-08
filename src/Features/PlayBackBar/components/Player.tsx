import React, { useRef } from 'react';
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill } from 'react-icons/bs';
import { AudioElement } from '../../../types';

interface PlayerProps {
    songs: any;
    currentSong: any;
    setCurrentSong: React.Dispatch<React.SetStateAction<any>>;
    audioElement: AudioElement;
}

export const Player = ({ audioElement, currentSong, setCurrentSong, songs }: PlayerProps) => {

    const clickRef: any = useRef();

    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress = offset / width * 100;
        audioElement.current.currentTime = divprogress / 100 * currentSong.length;

    };

    const skiptoNext = () => {
        const index = songs.findIndex(x => x.title == currentSong.title);

        if (index == songs.length - 1) {
            setCurrentSong(songs[0]);
        }
        else {
            setCurrentSong(songs[index + 1]);
        }
        audioElement.current.currentTime = 0;

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



