
import React, { useState } from 'react';
import { utilService } from '../../services/util.service.ts';

export const NavOptionsName = ({ option }: string) => {


    let currentOption: string = utilService.getCurrentAsideOption(option);

    return (
        <span>
            {currentOption}
        </span>
    );
}

