import React, { MouseEvent, useState } from 'react';

import { UserNavProfile } from '../components/UserNavProfile';
import { UserNavModal } from '../../NavModal/components/UserNavModal';
import { LeftArrow } from '../components/LeftArrow';
import { RightArrow } from '../components/RightArrow';

type NavBarProps = {
    activePage: string;
    setPage: any;
};

export const NavBar = ({ activePage, setPage }: NavBarProps) => {
    const [isClicked, setClicked] = useState<boolean>(false);


    return (
        <nav className='nav-layout' >

            <section className="pagination-buttons">
                <LeftArrow setPage={setPage} activePage={activePage} />
                <RightArrow setPage={setPage} activePage={activePage} />
            </section>

            <section className="user-profile">
                <UserNavProfile setClicked={setClicked} />
                {isClicked && <UserNavModal />}
            </section>
        </nav>
    );
};