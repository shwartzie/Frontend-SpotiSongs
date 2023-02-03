import React, { useRef } from 'react';
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill } from 'react-icons/bs';
export const Player = ({ audioElem, isPlaying, setIsPlaying, currentSong, setCurrentSong, songs }: any) => {

    const clickRef: any = useRef();

    const PlayPause = () => {
        setIsPlaying(!isPlaying);

    };


    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress = offset / width * 100;
        audioElem.current.currentTime = divprogress / 100 * currentSong.length;

    };

    const skipBack = () => {
        const index = songs.findIndex(x => x.title == currentSong.title);
        if (index == 0) {
            setCurrentSong(songs[songs.length - 1]);
        }
        else {
            setCurrentSong(songs[index - 1]);
        }
        audioElem.current.currentTime = 0;

    };


    const skiptoNext = () => {
        const index = songs.findIndex(x => x.title == currentSong.title);

        if (index == songs.length - 1) {
            setCurrentSong(songs[0]);
        }
        else {
            setCurrentSong(songs[index + 1]);
        }
        audioElem.current.currentTime = 0;

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



