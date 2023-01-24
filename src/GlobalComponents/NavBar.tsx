import React, { useState } from 'react';

import { UserNavProfile } from '../Features/AsideNavbar/components/UserNavProfile';
import { UserNavModal } from '../Features/NavModal/components/UserNavModal';

export const NavBar = () => {
    const [isClicked, setClicked] = useState<boolean>(false);
    console.log(isClicked);
    
    return (
        <nav className='nav-layout' >

            <section className="pagination-buttons">
                <button >
                    <span className='left-arrow' ></span>
                </button>
                <button >
                    <span className='right-arrow'></span>
                </button>
            </section>

            <section className="user-profile">
                <UserNavProfile setClicked={setClicked}/>
                {isClicked && <UserNavModal/>}
            </section>
        </nav>
    );
};