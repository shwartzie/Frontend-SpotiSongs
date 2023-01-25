import React, { useState } from 'react';
import { NavOptionsName } from './NavOptionName';
import { useNavigate } from 'react-router-dom';

//TODO FIX SVGS
type NavOptionsProps = {
    setActivePage: React.Dispatch<React.SetStateAction<string>>;
    option: string,
    activePage: string;
};
export const NavOptionsPreview = ({ option, setActivePage, activePage }: NavOptionsProps) => {

    return (
        <li>
            <a href="#" onClick={() => setActivePage(option)}>
                <div className={option}> </div>
                <NavOptionsName option={option} activePage={activePage}/>
            </a>
        </li>
    );
}

