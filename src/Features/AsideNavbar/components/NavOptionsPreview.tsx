import React, { useState } from 'react';
import { NavOptionsName } from './NavOptionName';
import { useNavigate } from 'react-router-dom';

//TODO FIX SVGS
interface Props {
    option: string;
    setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

export const NavOptionsPreview = ({ option, setActivePage }: Props) => {

    return (
        <li>
            <a href="#" onClick={() => setActivePage(option)}>
                <div className={option}> </div>
                <NavOptionsName option={option} />
            </a>
        </li>
    );
}

