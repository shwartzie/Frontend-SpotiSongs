import React, { useState } from 'react';
import { NavBar } from '../../AsideNavbar/pages/NavBar';

type HeaderProps = {
    activePage: string;
    setPage: any;
};
export const Header = ({ activePage, setPage }: HeaderProps) => {
    const [query, setQuery] = useState<string>("");

    return (
        <header className='div-container main-layout-nav-bar '>
            <NavBar activePage={activePage} setPage={setPage} query={query} setQuery={setQuery} />
        </header>
    );
};