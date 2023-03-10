import React from 'react';

import { utilService } from '../../../common/services/util.service';
export const FavouritesTitle = () => {  
    const title: string = utilService.getCurrentDayStatus();
    return (
        <div className='favourites-title'>
            <div>
                <h2>
                    {title}
                </h2>
            </div>
        </div>
    );
}

