import React, { MouseEvent, useEffect, useState } from 'react';

import { UserNavProfile } from '../components/UserNavProfile';
import { UserNavModal } from '../../NavModal/components/UserNavModal';
import { LeftArrow } from '../components/LeftArrow';
import { RightArrow } from '../components/RightArrow';
import { SearchInput } from 'Features/Search/components/SearchInput';
import { useLocation } from 'react-router-dom';



type NavBarProps = {
    activePage: string;
    setPage: React.Dispatch<React.SetStateAction<string>>;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
};



export const NavBar = ({ activePage, setPage, query, setQuery }: NavBarProps) => {
    const [isClicked, setClicked] = useState<boolean>(false);

    const { pathname } = useLocation();


    return (
        <nav className='nav-layout' >

            <section className="pagination-buttons">
                <LeftArrow setPage={setPage} activePage={activePage} />
                <RightArrow setPage={setPage} activePage={activePage} />
            </section>

            {pathname === "/search" && <section className='nav-search-input'>
                <SearchInput setQuery={setQuery} query={query} />
            </section>}

            <section className="user-profile">
                <UserNavProfile setClicked={setClicked} />
                {isClicked && <UserNavModal />}
            </section>
        </nav>
    );
};