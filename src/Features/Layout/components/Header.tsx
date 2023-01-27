import React from 'react';
import { NavBar } from '../../AsideNavbar/pages/NavBar';

type HeaderProps = {
    activePage: string;
    setPage: any;
};
export const Header = ({ activePage, setPage }: HeaderProps) => {

    return (
        <header className='div-container main-layout-nav-bar '>
            <NavBar activePage={activePage} setPage={setPage}/>
        </header>
    );
};