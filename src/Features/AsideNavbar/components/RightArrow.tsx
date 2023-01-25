import React, { MouseEvent } from 'react';
import { NavBar } from '../../AsideNavbar/pages/NavBar';

type RightArrowProps = {
    setPage: React.Dispatch<React.SetStateAction<MouseEvent>> | any;
    activePage:string
};
export const RightArrow = ({ setPage,activePage }: RightArrowProps) => {

    return (
        <button onClick={() => setPage(() => activePage)}>
            <span className='right-arrow'></span>
        </button>
    );
};