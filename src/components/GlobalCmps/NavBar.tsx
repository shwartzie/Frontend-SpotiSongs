import React from 'react';
import leftArrow from '../../assets/svg/left-svgrepo-com.svg';
import rightArrow from '../../assets/svg/right-svgrepo-com.svg';
import { UserNavProfile } from '../LandingPageCmps/UserNavProfile.tsx';

export const NavBar = () => {

    return (
        <nav className='nav-layout'>

            <section className="pagination-buttons">
                <button><svg src={leftArrow} role="img" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" width="24" height="24"></svg></button>
                <button><svg src={rightArrow} role="img" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" width="24" height="24"></svg></button>
            </section>

            <section className="user-profile">
                <UserNavProfile />
            </section>
        </nav>
    );
};