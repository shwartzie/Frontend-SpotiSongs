import React, { MouseEvent, useState } from 'react';

import { UserNavProfile } from '../components/UserNavProfile';
import { UserNavModal } from '../../NavModal/components/UserNavModal';
import { LeftArrow } from '../components/LeftArrow';
import { RightArrow } from '../components/RightArrow';
import { SearchInput } from 'Features/Search/components/SearchInput';

type NavBarProps = {
    activePage: string;
    setPage: any;
    query: string;
    setQuery: any;
};

export const NavBar = ({ activePage, setPage, query, setQuery }: NavBarProps) => {
    const [isClicked, setClicked] = useState<boolean>(false);

    console.log("activePage", activePage);
    

    return (
        <nav className='nav-layout' >

            <section className="pagination-buttons">
                <LeftArrow setPage={setPage} activePage={activePage} />
                <RightArrow setPage={setPage} activePage={activePage} />
            </section>

            <section className='nav-search-input'>
                {activePage == "search" && <SearchInput setQuery={setQuery} query={query} />}
            </section>

            <section className="user-profile">
                <UserNavProfile setClicked={setClicked} />
                {isClicked && <UserNavModal />}
            </section>
        </nav>
    );
};