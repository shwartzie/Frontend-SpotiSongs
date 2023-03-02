import React, { MouseEvent } from 'react';
import { NavBar } from '../../AsideNavbar/pages/NavBar';

type LeftArrowProps = {
    setPage: React.Dispatch<React.SetStateAction<MouseEvent>> | any;
    activePage: string;
};

export const LeftArrow = ({ setPage, activePage }: LeftArrowProps) => {

    return (
        <button onClick={() => setPage((prev) => {
            // console.log(prev);
            return prev;
        })}>
            <span className='left-arrow' ></span>
        </button>
    );
};