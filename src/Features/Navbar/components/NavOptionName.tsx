
import React, { useState } from 'react';
import { utilService } from '../../../common/services/util.service';

export const NavOptionsName = (p: { option: string; }) => {


    let currentOption: string = utilService.getCurrentAsideOption(p.option);

    return (
        <span>
            {currentOption}
        </span>
    );
}

