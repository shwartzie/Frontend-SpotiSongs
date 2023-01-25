
import React, { useState } from 'react';
import { utilService } from '../../../common/services/util.service';

type NavOptionsProps = {
    option: string;
    activePage: string;
};
export const NavOptionsName = ({ option, activePage }: NavOptionsProps) => {


    let currentOption: string = utilService.getCurrentAsideOption(option);

    return (
        <span className={option === activePage ? "active-option" : "null"}>
            {currentOption}
        </span>
    );
}

