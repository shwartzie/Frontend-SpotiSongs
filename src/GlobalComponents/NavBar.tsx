import React from 'react';

//TODO fix svgs
// import leftArrow from '../../assets/svg/left-svgrepo-com.svg';
// import rightArrow from '../../assets/svg/right-svgrepo-com.svg';
import { UserNavProfile } from '../Features/Navbar/components/UserNavProfile';

export const NavBar = () => {

    return (
        <nav className='nav-layout'>

            <section className="pagination-buttons">
                <button>

                </button>
                <button>

                </button>
            </section>

            <section className="user-profile">
                <UserNavProfile />
            </section>
        </nav>
    );
};