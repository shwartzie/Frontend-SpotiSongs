import React from 'react';

const profilePic: string = require('../../../assets/images/roni.jpg');


//TODO check why the component is not working on hover and when clicked

export const UserNavProfile = ({ setClicked }) => {
    const userName: string = "Roni Shwarzman";
    let isClicked: boolean = false;

    return (
        <button onClick={() => setClicked((prev) => !prev)}>
            <figure>
                <img src={profilePic} alt={userName} />
            </figure>

            <span>
                {userName}
            </span>


            {!isClicked ? <div className='arrow-down'></div> : <div className='arrow-up'></div>}
        </button>
    );
}

