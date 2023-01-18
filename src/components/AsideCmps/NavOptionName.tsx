
import React, { useState } from 'react';

export const NavOptionsName = ({ option }: string) => {

    return (
        <>
            {option[0].toUpperCase() + option.slice(1)}
        </>
    );
}

