import React from 'react';
// import arrowDown from '../../assets/svg/down-arrow-svgrepo-com.svg';
// import arrowUp from '../../assets/svg/up-arrow-svgrepo-com.svg';
// import { profilePic } from '../../assets/images/roni.jpg';

export const UserNavProfile = () => {
    const userName: string = "Roni Shwarzman";
    let isClicked: boolean = false;
    return (
        <button onClick={() => isClicked = !isClicked}>
            <figure>
            {/* //TODO make it a background image which imports the src file profilePic */}
                {/* <img src={profilePic} alt={userName} /> */}
            </figure>

            <span>
                {userName}
            </span>

            {/* //TODO make it a background image which imports the src file isClicked ? arrowUp : arrowDown */}
            
            <svg role="img" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" width="16" height="16">
            </svg>
        </button>
    );
}

